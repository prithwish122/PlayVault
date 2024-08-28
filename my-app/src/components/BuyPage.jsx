import React from 'react';

const BuyPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-yellow-400 via-red-500 to-pink-600">
      <div className="text-center p-8 bg-white bg-opacity-40 rounded-lg shadow-lg backdrop-blur-lg">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-8">
          Buy PlayVault Tokens
        </h1>
        <p className="text-xl text-gray-700 mb-6">
          Purchase your tokens to access exclusive features and content.
        </p>
        <button
          className="bg-yellow-600 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-yellow-500 transition duration-300 transform hover:scale-105"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default BuyPage;
