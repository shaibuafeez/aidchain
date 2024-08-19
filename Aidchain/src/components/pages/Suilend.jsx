import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import image3 from '../../assets/3.jpg'; // Import the relevant image

const Suilend = () => {
  const [suiAmount, setSuiAmount] = useState(''); // State to track the amount of SUI

  const handlePayment = () => {
    // Check if the SUI amount is a positive number
    const amount = parseFloat(suiAmount);
    if (amount <= 0 || isNaN(amount)) {
      alert('Please enter a positive amount of SUI.');
      return;
    }

    // Handle the payment logic here
    console.log(`Paying ${amount} SUI to Suilend project`);
    alert(`You have successfully paid ${amount} SUI to the Suilend project.`);
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
            src={image3}
            alt="Suilend"
            className="rounded-lg shadow-md"
          />
        </div>

        {/* Project Title */}
        <h1 className="text-4xl font-bold text-white text-center mb-4">
          Suilend
        </h1>

        {/* Project Details */}
        <div className="bg-blue-900 p-6 rounded-lg shadow-md text-white">
          <p className="text-lg mb-4">
            <span className="font-semibold">Type:</span> Lending and Borrowing Platform on Sui
          </p>
          <p className="text-lg mb-4">
            <span className="font-semibold">Category:</span> Infrastructure
          </p>
          <p className="text-lg mb-4">
            <span className="font-semibold">Aid Amount:</span> $12,000
          </p>
          <p className="text-lg mb-4">
            <span className="font-semibold">Description:</span> 
            Why Support a Sui Lending and Borrowing Platform:
            <br />
            - Expands Sui's utility: Offers essential financial services beyond trading.
            <br />
            - Fosters financial inclusion: Democratizes access to credit and savings.
            <br />
            - Enhances risk management: Develops robust protocols for DeFi stability.
            <br />
            - Drives technological innovation: Exploits Sui's unique features for DeFi advancements.
            <br />
            - Stimulates economic activity: Attracts users, capital, and developers to the Sui ecosystem.
            <br />
            - Builds a strong foundation: For future DeFi applications and services on Sui.
            <br />
            By supporting this platform, you're investing in a cornerstone of Sui's financial infrastructure.
          </p>
        </div>

        {/* Payment Section */}
        <div className="bg-blue-900 p-6 rounded-lg shadow-md text-white mt-6">
          <h2 className="text-2xl font-semibold mb-4">Contribute to Suilend</h2>
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
            href="https://x.com/suilendprotocol" // Link to the Twitter page
            className="bg-purple-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-purple-700 transition-all duration-300"
            target="_blank" // Open in a new tab
            rel="noopener noreferrer" // Security measure when using target="_blank"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Suilend;
