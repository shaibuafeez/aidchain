module charity_system::aid_distribution {
    use sui::object::{Self, UID};
    use sui::transfer;
    use sui::tx_context::{Self, TxContext};
    use sui::balance::{Self, Balance};
    use sui::coin::{Self, Coin};
    use sui::event;
    use sui::clock::{Self, Clock};
    use sui::sui::SUI;
    use sui::vec_map::{Self, VecMap};
    use sui::vec_set::{Self, VecSet};
    use std::string::String;
    use std::option::{Self, Option};

    // Errors
    const EInsufficientFunds: u64 = 0;
    const EInvalidAmount: u64 = 2;
    const EInvalidCause: u64 = 4;
    const EAdminAlreadyExists: u64 = 5;
    const EAdminDoesNotExist: u64 = 6;
    const ENotEnoughAdmins: u64 = 7;

    // Constants
    const MIN_DONATION: u64 = 1_000_000; // 0.001 SUI
    const MIN_ADMINS: u64 = 2;
    const MAX_ADMINS: u64 = 5;

    // Events
    struct DonationReceived has copy, drop {
        donor: address,
        amount: u64,
        cause: Option<String>,
        timestamp: u64,
    }

    struct AidDistributed has copy, drop {
        recipient: address,
        amount: u64,
        cause: Option<String>,
        timestamp: u64,
    }

    struct CauseAdded has copy, drop {
        cause: String,
    }

    struct AdminAdded has copy, drop {
        admin: address,
    }

    struct AdminRemoved has copy, drop {
        admin: address,
    }

    // Main charity object
    struct CharityPool has key {
        id: UID,
        balance: Balance<SUI>,
        admins: VecSet<address>,
        total_donations: u64,
        total_distributed: u64,
        donor_history: VecMap<address, DonorInfo>,
        causes: VecMap<String, CauseInfo>,
        matching_pool: Balance<SUI>,
    }

    // Donor information
    struct DonorInfo has store, drop {
        total_donated: u64,
        last_donation: u64,
    }

    // Cause information
    struct CauseInfo has store, drop {
        total_donated: u64,
        total_distributed: u64,
    }

    // Capability for admin actions
    struct AdminCap has key { id: UID }

    // Initialize the charity pool
    fun init(ctx: &mut TxContext) {
        let sender = tx_context::sender(ctx);
        let admins = vec_set::singleton(sender);

        let charity_pool = CharityPool {
            id: object::new(ctx),
            balance: balance::zero(),
            admins,
            total_donations: 0,
            total_distributed: 0,
            donor_history: vec_map::empty(),
            causes: vec_map::empty(),
            matching_pool: balance::zero(),
        };
        let admin_cap = AdminCap { id: object::new(ctx) };

        transfer::share_object(charity_pool);
        transfer::transfer(admin_cap, sender);

        event::emit(AdminAdded { admin: sender });
    }

    // Donate to the charity pool
    public entry fun donate(
        pool: &mut CharityPool,
        donation: &mut Coin<SUI>,
        cause: Option<String>,
        clock: &Clock,
        ctx: &mut TxContext
    ) {
        let amount = coin::value(donation);
        assert!(amount >= MIN_DONATION, EInvalidAmount);

        let donated = coin::split(donation, amount, ctx);
        balance::join(&mut pool.balance, coin::into_balance(donated));

        pool.total_donations = pool.total_donations + amount;

        let donor = tx_context::sender(ctx);
        let timestamp = clock::timestamp_ms(clock);
        
        if (vec_map::contains(&pool.donor_history, &donor)) {
            let donor_info = vec_map::get_mut(&mut pool.donor_history, &donor);
            donor_info.total_donated = donor_info.total_donated + amount;
            donor_info.last_donation = timestamp;
        } else {
            vec_map::insert(&mut pool.donor_history, donor, DonorInfo { total_donated: amount, last_donation: timestamp });
        };

        if (option::is_some(&cause)) {
            let cause_str = option::destroy_some(cause);
            assert!(vec_map::contains(&pool.causes, &cause_str), EInvalidCause);
            let cause_info = vec_map::get_mut(&mut pool.causes, &cause_str);
            cause_info.total_donated = cause_info.total_donated + amount;
            cause = option::some(cause_str);
        };

        event::emit(DonationReceived {
            donor,
            amount,
            cause,
            timestamp,
        });

        // Apply matching if available
        if (balance::value(&pool.matching_pool) > 0) {
            let matching_amount = if (balance::value(&pool.matching_pool) >= amount) {
                amount
            } else {
                balance::value(&pool.matching_pool)
            };
            let matched = balance::split(&mut pool.matching_pool, matching_amount);
            balance::join(&mut pool.balance, matched);
            pool.total_donations = pool.total_donations + matching_amount;
        };
    }

    // Distribute aid to a recipient
    public entry fun distribute_aid(
        _: &AdminCap,
        pool: &mut CharityPool,
        recipient: address,
        amount: u64,
        cause: Option<String>,
        clock: &Clock,
        ctx: &mut TxContext
    ) {
        assert!(balance::value(&pool.balance) >= amount, EInsufficientFunds);
        assert!(amount > 0, EInvalidAmount);

        let aid = coin::take(&mut pool.balance, amount, ctx);
        transfer::public_transfer(aid, recipient);

        pool.total_distributed = pool.total_distributed + amount;

        if (option::is_some(&cause)) {
            let cause_str = option::destroy_some(cause);
            assert!(vec_map::contains(&pool.causes, &cause_str), EInvalidCause);
            let cause_info = vec_map::get_mut(&mut pool.causes, &cause_str);
            cause_info.total_distributed = cause_info.total_distributed + amount;
            cause = option::some(cause_str);
        };

        event::emit(AidDistributed {
            recipient,
            amount,
            cause,
            timestamp: clock::timestamp_ms(clock),
        });
    }

    // Add a new cause
    public entry fun add_cause(_: &AdminCap, pool: &mut CharityPool, cause: String) {
        assert!(!vec_map::contains(&pool.causes, &cause), EInvalidCause);
        vec_map::insert(&mut pool.causes, cause, CauseInfo { total_donated: 0, total_distributed: 0 });
        event::emit(CauseAdded { cause });
    }

    // Add funds to the matching pool
    public entry fun add_matching_funds(pool: &mut CharityPool, funds: &mut Coin<SUI>, ctx: &mut TxContext) {
        let amount = coin::value(funds);
        let matched = coin::split(funds, amount, ctx);
        balance::join(&mut pool.matching_pool, coin::into_balance(matched));
    }

    // Add a new admin
    public entry fun add_admin(_: &AdminCap, pool: &mut CharityPool, new_admin: address) {
        assert!(vec_set::size(&pool.admins) < MAX_ADMINS, EAdminAlreadyExists);
        assert!(!vec_set::contains(&pool.admins, &new_admin), EAdminAlreadyExists);
        vec_set::insert(&mut pool.admins, new_admin);
        event::emit(AdminAdded { admin: new_admin });
    }

    // Remove an admin
    public entry fun remove_admin(_: &AdminCap, pool: &mut CharityPool, admin: address) {
        assert!(vec_set::size(&pool.admins) > MIN_ADMINS, ENotEnoughAdmins);
        assert!(vec_set::contains(&pool.admins, &admin), EAdminDoesNotExist);
        vec_set::remove(&mut pool.admins, &admin);
        event::emit(AdminRemoved { admin });
    }

    // View functions
    public fun total_balance(pool: &CharityPool): u64 { balance::value(&pool.balance) }
    public fun total_donations(pool: &CharityPool): u64 { pool.total_donations }
    public fun total_distributed(pool: &CharityPool): u64 { pool.total_distributed }
    public fun donor_info(pool: &CharityPool, donor: address): (u64, u64) {
        if (vec_map::contains(&pool.donor_history, &donor)) {
            let info = vec_map::get(&pool.donor_history, &donor);
            (info.total_donated, info.last_donation)
        } else {
            (0, 0)
        }
    }
    public fun cause_info(pool: &CharityPool, cause: &String): (u64, u64) {
        if (vec_map::contains(&pool.causes, cause)) {
            let info = vec_map::get(&pool.causes, cause);
            (info.total_donated, info.total_distributed)
        } else {
            (0, 0)
        }
    }
    public fun matching_pool_balance(pool: &CharityPool): u64 { balance::value(&pool.matching_pool) }

    // Emergency withdraw (only admin, for contract migration or emergency situations)
    public entry fun emergency_withdraw(
        _: &AdminCap,
        pool: &mut CharityPool,
        amount: u64,
        recipient: address,
        ctx: &mut TxContext
    ) {
        assert!(balance::value(&pool.balance) >= amount, EInsufficientFunds);
        let withdrawn = coin::take(&mut pool.balance, amount, ctx);
        transfer::public_transfer(withdrawn, recipient);
    }
}