import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import image8 from '../../assets/8.jpg'; // Import the relevant image

const MoveOnSuiAiAssistant = () => {
  const [suiAmount, setSuiAmount] = useState(''); // State to track the amount of SUI

  const handlePayment = () => {
    // Check if the SUI amount is a positive number
    const amount = parseFloat(suiAmount);
    if (amount <= 0 || isNaN(amount)) {
      alert('Please enter a positive amount of SUI.');
      return;
    }

    // Handle the payment logic here
    console.log(`Paying ${amount} SUI to Move on Sui AI Assistant`);
    alert(`You have successfully paid ${amount} SUI to Move on Sui AI Assistant.`);
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
            src={image8}
            alt="Move on Sui AI Assistant"
            className="rounded-lg shadow-md"
          />
        </div>

        {/* Project Title */}
        <h1 className="text-4xl font-bold text-white text-center mb-4">
          Move on Sui AI Assistant
        </h1>

        {/* Project Details */}
        <div className="bg-blue-900 p-6 rounded-lg shadow-md text-white">
          <p className="text-lg mb-4">
            <span className="font-semibold">Type:</span> Artificial intelligence
          </p>
          <p className="text-lg mb-4">
            <span className="font-semibold">Category:</span> Machine learning innovation
          </p>
          <p className="text-lg mb-4">
            <span className="font-semibold">Aid Amount:</span> $15,000
          </p>
          <p className="text-lg mb-4">
            <span className="font-semibold">Description:</span> 
            Why Invest in a Move-on-Sui AI Assistant:
            <br />
            A Move-on-Sui AI assistant is essential for fostering a thriving developer ecosystem on the Sui blockchain.<li> By automating routine tasks, offering intelligent code suggestions, and providing valuable insights, it significantly enhances developer</li> productivity and satisfaction. This, in turn, accelerates the development of innovative applications on the Sui platform, driving broader adoption and strengthening Sui's position in the blockchain industry.
            <br />
            Supporting the development of a Move-on-Sui AI assistant is an investment in the future of the Sui ecosystem.
          </p>
        </div>

        {/* Payment Section */}
        <div className="bg-blue-900 p-6 rounded-lg shadow-md text-white mt-6">
          <h2 className="text-2xl font-semibold mb-4">Contribute to Move on Sui AI Assistant</h2>
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

export default MoveOnSuiAiAssistant;
