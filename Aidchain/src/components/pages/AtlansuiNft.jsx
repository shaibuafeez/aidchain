import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import image5 from '../../assets/5.jpg'; // Import the relevant image

const AtlansuiNft = () => {
  const [suiAmount, setSuiAmount] = useState(''); // State to track the amount of SUI

  const handlePayment = () => {
    // Check if the SUI amount is a positive number
    const amount = parseFloat(suiAmount);
    if (amount <= 0 || isNaN(amount)) {
      alert('Please enter a positive amount of SUI.');
      return;
    }

    // Handle the payment logic here
    console.log(`Paying ${amount} SUI to Atlansui NFT`);
    alert(`You have successfully paid ${amount} SUI to Atlansui NFT.`);
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
            src={image5}
            alt="Atlansui NFT"
            className="rounded-lg shadow-md"
          />
        </div>

        {/* Project Title */}
        <h1 className="text-4xl font-bold text-white text-center mb-4">
          Atlansui NFT
        </h1>

        {/* Project Details */}
        <div className="bg-blue-900 p-6 rounded-lg shadow-md text-white">
          <p className="text-lg mb-4">
            <span className="font-semibold">Type:</span> Development
          </p>
          <p className="text-lg mb-4">
            <span className="font-semibold">Category:</span> NFT lending and borrowing
          </p>
          <p className="text-lg mb-4">
            <span className="font-semibold">Aid Amount:</span> $9,000
          </p>
          <p className="text-lg mb-4">
            <span className="font-semibold">Reason for Aid:</span> 
            Our platform will revolutionize the NFT market by unlocking liquidity, expanding investment opportunities, and promoting financial inclusion. By leveraging advanced blockchain technology, we're creating a secure and user-friendly environment for NFT lending and borrowing. Your support will enable us to accelerate growth, create jobs, and contribute significantly to the NFT ecosystem.
          </p>
        </div>

        {/* Payment Section */}
        <div className="bg-blue-900 p-6 rounded-lg shadow-md text-white mt-6">
          <h2 className="text-2xl font-semibold mb-4">Contribute to Atlansui NFT</h2>
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
            href="https://x.com/AtlansuiLab" // Link to the Twitter page
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

export default AtlansuiNft;
