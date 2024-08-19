import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import image7 from '../../assets/7.jpg'; // Import the relevant image

const SuiTelegramGame = () => {
  const [suiAmount, setSuiAmount] = useState(''); // State to track the amount of SUI

  const handlePayment = () => {
    // Check if the SUI amount is a positive number
    const amount = parseFloat(suiAmount);
    if (amount <= 0 || isNaN(amount)) {
      alert('Please enter a positive amount of SUI.');
      return;
    }

    // Handle the payment logic here
    console.log(`Paying ${amount} SUI to Sui Telegram Game project`);
    alert(`You have successfully paid ${amount} SUI to the Sui Telegram Game project.`);
    // Reset the input field after payment
    setSuiAmount('');
  };

  return (
    <div className="min-h-screen bg-dark-blue py-8 px-4">
      <div className="max-w-4xl mx-auto bg-blue-800 rounded-lg shadow-lg p-6">
        {/* Back to Dashboard Button */}
        <div className="mb-4">
          <Link to="/dashboard" className="text-purple-400 hover:text-purple-600">
            &larr; Back to Dashboard
          </Link>
        </div>

        {/* Project Image */}
        <div className="flex justify-center mb-6">
          <img
            src={image7}
            alt="Sui Telegram Game"
            className="rounded-lg shadow-md"
          />
        </div>

        {/* Project Title */}
        <h1 className="text-4xl font-bold text-white text-center mb-4">
          Sui Telegram Game
        </h1>

        {/* Project Details */}
        <div className="bg-blue-900 p-6 rounded-lg shadow-md text-white">
          <p className="text-lg mb-4">
            <span className="font-semibold">Type:</span> DEX
          </p>
          <p className="text-lg mb-4">
            <span className="font-semibold">Category:</span> Development
          </p>
          <p className="text-lg mb-4">
            <span className="font-semibold">Aid Amount:</span> $7,000
          </p>
          <p className="text-lg mb-4">
            <span className="font-semibold">Reasons for Aid:</span> 
            Sui Telegram Game: Click Your Way to Crypto
            <br /><br />
            Introducing Sui Telegram Game, the addictive clicker experience that rewards you with real crypto! Earn Sui tokens simply by tapping your way to the top. Our game features a built-in Sui wallet, making it easy to manage your earnings and dive into the world of DeFi. Get ready to click, earn, and explore the exciting possibilities of blockchain gaming!
          </p>
        </div>

        {/* Payment Section */}
        <div className="bg-blue-900 p-6 rounded-lg shadow-md text-white mt-6">
          <h2 className="text-2xl font-semibold mb-4">Contribute to Sui Telegram Game</h2>
          <div className="flex flex-col items-center">
            {/* SUI Amount Input */}
            <input
              type="number"
              className="mb-4 p-3 rounded-lg text-black"
              placeholder="Enter amount of SUI"
              value={suiAmount}
              onChange={(e) => setSuiAmount(e.target.value)}
            />
            {/* Pay Button */}
            <button
              onClick={handlePayment}
              className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-purple-700 transition-all duration-300"
            >
              Aid with SUI
            </button>
          </div>
        </div>

        {/* Call-to-Action Button */}
        <div className="flex justify-center mt-6">
          <a
            href="#"
            className="bg-purple-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-purple-700 transition-all duration-300"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default SuiTelegramGame;
