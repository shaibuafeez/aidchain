import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import loginBackground from '../assets/login.png'; // Import the background image

// Importing other images
import image1 from '../assets/1.jpg';
import image2 from '../assets/2.jpg';
import image3 from '../assets/3.jpg';
import image4 from '../assets/4.jpg';
import image5 from '../assets/5.jpg';
import image6 from '../assets/6.jpg';
import image7 from '../assets/7.jpg';
import image8 from '../assets/8.jpg';
import image9 from '../assets/9.jpg';

// Ticker Component
const Ticker = () => {
  const prices = [
    { name: '$SCA', value: '0.2713', change: '+2.15%' },
    { name: '$FUD', value: '0.0000002220', change: '-1.87%' },
    { name: '$BUCK', value: '1.00', change: '+0.00%' },
    { name: '$SCB', value: '0.00000002762', change: '+3.40%' },
    { name: '$FLX', value: '0.4628', change: '-0.52%' },
    { name: '$CETUS', value: '0.0563', change: '+1.12%' },
    { name: '$BLUB', value: '0.000000002840', change: '-4.01%' },
    { name: '$TURBOS', value: '0.0014', change: '+0.75%' },
    { name: '$LIQ', value: '0.000002614', change: '+2.60%' },
    { name: '$DRIP', value: '0.000006275', change: '-0.85%' },
    { name: '$KOTO', value: '0.0000001160', change: '-3.14%' },
    { name: '$SPAM', value: '0.000003105', change: '+1.88%' },
    { name: '$GENERIS', value: '0.2548', change: '-2.22%' },
  ];

  return (
    <div className="ticker-container overflow-hidden py-2 bg-black">
      <div className="ticker-content whitespace-nowrap">
        {prices.map((price, index) => (
          <span key={index} className="mx-4 text-white">
            {price.name}: <span className="font-semibold">${price.value}</span>{' '}
            <span
              className={`text-sm ${
                price.change.startsWith('+') ? 'text-green-400' : 'text-red-400'
              }`}
            >
              {price.change}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
};

// CSS for infinite scrolling
const styles = `
@keyframes scroll {
  0% {
    transform: translateX(80%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.ticker-content {
  display: inline-block;
  animation: scroll 90s linear infinite; /* Adjusted speed for smoother scrolling */
}
`;

const Dashboard = () => {
  const [selectedCategory, setSelectedCategory] = useState('individual');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const grantsData = {
    individual: [
      {
        project: 'Sui telegram game',
        type: 'DEX',
        category: 'DEX',
        Aid_amount: '7,000',
        image: image7,
        link: '/sui-telegram-game', // Add link path
      },
      {
        project: 'Move on Sui Ai assistant',
        type: 'artificial intelligence',
        category: 'Machine learning innovation',
        Aid_amount: '10,000',
        image: image8,
        link: '/move-on-sui-ai-assistant',
      },
      {
        project: 'Sui Agro',
        type: 'Development',
        category: 'Infrastructure',
        Aid_amount: '11,000',
        image: image9,
        link: '/sui-agro',
      },
    ],
    programs: [
      {
        project: 'Sui Generis',
        type: 'Nft launch',
        category: 'Nft integration',
        Aid_amount: '12,000',
        image: image1,
        link: '/sui-generis',
      },
      {
        project: 'Doubleup',
        type: 'Integration of more web3 casino event',
        category: 'slot tournament',
        Aid_amount: '15,000',
        image: image2,
        link: '/doubleup',
      },
      {
        project: 'Suilend',
        type: 'Lending and borrowing platform on Sui',
        category: 'Infrastructure',
        Aid_amount: '12,000',
        image: image3,
        link: '/suilend',
      },
      {
        project: 'Sui on campus',
        type: 'Development',
        category: 'Aimed at Onboarding Nigerian student developers from vibrant campuses to build on the Sui Network blockchain.',
        Aid_amount: '10,000',
        image: image4,
        link: '/sui-on-campus',
      },
      {
        project: 'Atlansui Nft',
        type: 'Development',
        category: 'Nft lending and borrowing',
        Aid_amount: '9,000',
        image: image5,
        link: '/atlansui-nft',
      },
      {
        project: 'Studio Mirai',
        type: 'Infrastructure',
        category: 'Nft project',
        Aid_amount: '25,000',
        image: image6,
        link: '/studio-mirai',
      },
    ],
  };

  // Function to handle "Provide Feedback" button click
  const handleFeedbackClick = () => {
    window.open('https://forms.gle/Q5nXQ7gbm9pDjqvS9', '_blank'); // Open the feedback form link in a new tab
  };

  // Function to handle "Submit Grant Request" button click
  const handleGrantRequestClick = () => {
    window.open('https://forms.gle/xfR5AzyRdwExbefg6', '_blank'); // Open the Google Form link in a new tab
  };

  return (
    <div
      className="w-full min-h-screen bg-dark-blue"
      style={{
        backgroundImage: `url(${loginBackground})`, // Set the background image
        backgroundSize: 'cover', // Ensure the image covers the entire background
        backgroundPosition: 'center', // Center the image
      }}
    >
      {/* Navbar */}
      <nav className="bg-blue-900 shadow-md py-4 px-6">
        <div className="container mx-auto flex justify-between items-center">
          {/* Aidchain Text that routes to Home Page */}
          <Link to="/" className="text-2xl font-bold text-white">
            Aidchain
          </Link>
          <ul className="flex space-x-4">
            {/* Previously removed icons */}
          </ul>
          {/* "Connect Wallet" button */}
          <button className="bg-purple-600 text-white px-4 py-2 rounded">
            Connect Wallet
          </button>
        </div>
      </nav>

      {/* Ticker Component */}
      <style>{styles}</style>
      <Ticker />

      {/* Dashboard Content */}
      <div className="container mx-auto py-6 px-4">
        <h1 className="text-3xl font-bold text-white mb-6">
          Aidchain: Sui Grants Directory
        </h1>
        <div className="flex justify-between items-center mb-4">
          <div className="flex space-x-4">
            <button
              onClick={() => handleCategoryChange('individual')}
              className={`font-semibold ${
                selectedCategory === 'individual'
                  ? 'text-purple-400 border-b-2 border-purple-600'
                  : 'text-gray-400'
              }`}
            >
              Individual Grants Request
            </button>
            <button
              onClick={() => handleCategoryChange('programs')}
              className={`font-semibold ${
                selectedCategory === 'programs'
                  ? 'text-purple-400 border-b-2 border-purple-600'
                  : 'text-gray-400'
              }`}
            >
              Community Grant Request
            </button>
          </div>
          <div className="flex space-x-4">
            {/* Provide Feedback Button */}
            <button
              className="bg-gray-700 text-white px-4 py-2 rounded"
              onClick={handleFeedbackClick}
            >
              Provide Feedback
            </button>
            {/* Submit Grant Button */}
            <button
              className="bg-purple-600 text-white px-4 py-2 rounded"
              onClick={handleGrantRequestClick}
            >
              Submit Grant Request
            </button>
          </div>
        </div>
        <div className="bg-blue-800 shadow-lg rounded-lg p-6">
          {/* Search and Filters */}
          <div className="mb-4 flex justify-between items-center">
            <input
              type="text"
              placeholder="Search..."
              className="border p-2 rounded w-1/3 bg-gray-700 text-white"
            />
            <select className="border p-2 rounded bg-gray-700 text-white">
              <option>Project Category</option>
            </select>
          </div>

          {/* Grant List - Card Style */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {grantsData[selectedCategory].map((grant, index) => (
              <div
                key={index}
                className="bg-blue-900 text-white p-4 rounded-lg shadow hover:bg-blue-700 transition-all duration-300"
              >
                <Link to={grant.link}>
                  <img
                    src={grant.image}
                    alt={grant.project}
                    className="mb-4 rounded-lg cursor-pointer"
                  />
                </Link>
                <h3 className="text-lg font-bold mb-2">{grant.project}</h3>
                <p className="text-sm mb-2">
                  <span className="font-semibold">Type:</span> {grant.type}
                </p>
                <p className="text-sm mb-2">
                  <span className="font-semibold">Category:</span>{' '}
                  {grant.category}
                </p>
                <p className="text-sm mb-4">
                  <span className="font-semibold">Aid_amount:</span>{' '}
                  {grant.Aid_amount}
                </p>
                <Link
                  to={grant.link}
                  className="text-purple-400 hover:underline hover:text-purple-600"
                >
                  Aid
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
