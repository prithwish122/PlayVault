import React, { useState } from 'react';

const JoinPage = () => {
  const [walletAddress, setWalletAddress] = useState('');
  const [accountCost, setAccountCost] = useState('');
  const [gameId, setGameId] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here
    console.log(`Wallet Address: ${walletAddress}, Account Cost: ${accountCost}, Game ID: ${gameId}`);
    setFormSubmitted(true);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
      <div className="text-center p-8 bg-white bg-opacity-20 rounded-lg shadow-lg backdrop-blur-lg max-w-md w-full">
        <h1 className="text-6xl font-extrabold text-white mb-8">
          Join PlayVault
        </h1>
        <p className="text-lg text-white mb-6">
          Unlock exclusive content and become part of our community.
        </p>

        {!formSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-left text-white text-sm font-semibold mb-2">
                Wallet Address
              </label>
              <input
                type="text"
                value={walletAddress}
                onChange={(e) => setWalletAddress(e.target.value)}
                className="w-full px-4 py-2 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                placeholder="Enter your wallet address"
                required
              />
            </div>
            <div>
              <label className="block text-left text-white text-sm font-semibold mb-2">
                Account Cost (ETH)
              </label>
              <input
                type="number"
                value={accountCost}
                onChange={(e) => setAccountCost(e.target.value)}
                className="w-full px-4 py-2 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                placeholder="Enter the cost in ETH"
                required
              />
            </div>
            <div>
              <label className="block text-left text-white text-sm font-semibold mb-2">
                Game ID
              </label>
              <input
                type="text"
                value={gameId}
                onChange={(e) => setGameId(e.target.value)}
                className="w-full px-4 py-2 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                placeholder="Enter your Game ID"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full mt-6 bg-white text-purple-600 font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-purple-100 transition duration-300 transform hover:scale-105"
            >
              Get Started
            </button>
          </form>
        ) : (
          <p className="text-lg text-white">
            Thank you for joining PlayVault! We'll get in touch with you soon.
          </p>
        )}
      </div>
    </div>
  );
};

export default JoinPage;
