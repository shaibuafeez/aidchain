import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Qualify for a grant <br className="sm:block hidden" /> in few easy steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        After signing up, you'll need to fill out a form to be eligible for a grant if successfully reviewed.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={`${layout.sectionImg} flex justify-center items-center`}>
      <img
        src={card}
        alt="card deal"
        className="max-w-[80%] max-h-[80%] object-contain rounded-lg shadow-lg"
      />
    </div>
  </section>
);

export default CardDeal;
