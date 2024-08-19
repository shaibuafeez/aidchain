import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import image2 from '../../assets/2.jpg'; // Import the relevant image

const Doubleup = () => {
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
            src={image2}
            alt="Doubleup"
            className="rounded-lg shadow-md"
          />
        </div>

        {/* Project Title */}
        <h1 className="text-4xl font-bold text-white text-center mb-4">
          Doubleup
        </h1>

        {/* Project Details */}
        <div className="bg-blue-900 p-6 rounded-lg shadow-md text-white">
          <p className="text-lg mb-4">
            <span className="font-semibold">Type:</span> Development
          </p>
          <p className="text-lg mb-4">
            <span className="font-semibold">Category:</span> Integration of more web3 casino events
          </p>
          <p className="text-lg mb-4">
            <span className="font-semibold">Aid Amount:</span> $15,000
          </p>
          <p className="text-lg mb-4">
            <span className="font-semibold">Description:</span> Why Invest in Web3 Casinos on Sui Blockchain, 

            A Web3 casino integrated on the Sui blockchain presents a compelling investment opportunity. By combining the potential of blockchain technology with the entertainment industry, this project can:

            - Accelerate Sui Blockchain Adoption: Attract a new user base and demonstrate the platform's scalability for complex applications.
            - Pioneer Web3 Gaming: Introduce innovative gaming models, enhance user experience through faster transactions, and potentially disrupt the traditional casino industry.
            - Stimulate Economic Growth: Create jobs, generate tax revenue, and contribute to the overall development of the blockchain ecosystem.
            - Promote Responsible Gaming: Integrate features that prioritize player safety and well-being.

            This project has the potential to position Sui as a leading blockchain platform for gaming and entertainment while delivering significant economic and social benefits.
          </p>
        </div>

        {/* Payment Section */}
        <div className="bg-blue-900 p-6 rounded-lg shadow-md text-white mt-6">
          <h2 className="text-2xl font-semibold mb-4">Contribute to Doubleup</h2>
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
            href="https://x.com/doubleup_app" // Link to the Twitter page
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

export default Doubleup;
