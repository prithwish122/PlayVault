import React, { useState } from 'react';
import { gsap } from 'gsap';

const JoinPage = () => {
  const [page, setPage] = useState(1);
  const [walletAddress, setWalletAddress] = useState('');
  const [accountCost, setAccountCost] = useState('');
  const [gameId, setGameId] = useState('');
  const [twitchId, setTwitchId] = useState('');
  const [steamId, setSteamId] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleNextPage = () => {
    gsap.to(".form-container", { opacity: 0, duration: 0.5, onComplete: () => {
      setPage((prevPage) => prevPage + 1);
      gsap.fromTo(".form-container", { opacity: 0 }, { opacity: 1, duration: 0.5 });
    }});
  };

  const handlePreviousPage = () => {
    gsap.to(".form-container", { opacity: 0, duration: 0.5, onComplete: () => {
      setPage((prevPage) => prevPage - 1);
      gsap.fromTo(".form-container", { opacity: 0 }, { opacity: 1, duration: 0.5 });
    }});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here
    console.log(`Wallet Address: ${walletAddress}, Account Cost: ${accountCost}, Game ID: ${gameId}, Twitch ID: ${twitchId}, Steam ID: ${steamId}`);
    setFormSubmitted(true);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
      <div className="p-8 bg-white bg-opacity-20 rounded-lg shadow-lg backdrop-blur-lg max-w-md w-full">
        <h1 className="text-4xl font-extrabold text-white mb-6">Join PlayVault</h1>
        <p className="text-lg text-white mb-4">Unlock exclusive content and become part of our community.</p>

        {!formSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-4 form-container">
            {page === 1 && (
              <div>
                <label className="block text-left text-white text-sm font-semibold mb-2">Wallet Address</label>
                <input
                  type="text"
                  value={walletAddress}
                  onChange={(e) => setWalletAddress(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                  placeholder="Enter your wallet address"
                  required
                />
                <label className="block text-left text-white text-sm font-semibold mb-2 mt-4">Account Cost (ETH)</label>
                <input
                  type="number"
                  value={accountCost}
                  onChange={(e) => setAccountCost(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                  placeholder="Enter the cost in EDU"
                  required
                />
              </div>
            )}
            {page === 2 && (
              <div>
                <label className="block text-left text-white text-sm font-semibold mb-2">Game ID</label>
                <input
                  type="text"
                  value={gameId}
                  onChange={(e) => setGameId(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                  placeholder="Enter your Game ID"
                  required
                />
                <label className="block text-left text-white text-sm font-semibold mb-2 mt-4">Twitch ID</label>
                <input
                  type="text"
                  value={twitchId}
                  onChange={(e) => setTwitchId(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                  placeholder="Enter your Twitch ID"
                />
                <label className="block text-left text-white text-sm font-semibold mb-2 mt-4">Steam ID</label>
                <input
                  type="text"
                  value={steamId}
                  onChange={(e) => setSteamId(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                  placeholder="Enter your Steam ID"
                />
              </div>
            )}
            {page === 3 && (
              <div>
                <p className="text-lg text-white mb-6">Review your details and submit the form.</p>
                <p className="mb-3 text-lg text-white"><strong>Wallet Address:</strong> {walletAddress}</p>
                <p className="mb-3 text-lg text-white"><strong>Account Cost:</strong> {accountCost}</p>
                <p className="mb-3 text-lg text-white"><strong>Game ID:</strong> {gameId}</p>
                <p className="mb-3 text-lg text-white"><strong>Twitch ID:</strong> {twitchId}</p>
                <p className="mb-3 text-lg text-white"><strong>Steam ID:</strong> {steamId}</p>
              </div>
            )}
            <div className="flex justify-between mt-6">
              {page > 1 && (
                <button
                  type="button"
                  onClick={handlePreviousPage}
                  className="bg-white text-purple-600 font-semibold px-4 py-2 rounded-lg shadow-lg hover:bg-purple-100 transition-transform duration-300 transform hover:scale-105"
                >
                  Previous
                </button>
              )}
              {page < 3 ? (
                <button
                  type="button"
                  onClick={handleNextPage}
                  className="bg-white text-purple-600 font-semibold px-4 py-2 rounded-lg shadow-lg hover:bg-purple-100 transition-transform duration-300 transform hover:scale-105"
                >
                  Next
                </button>
              ) : (
                <button
                  type="submit"
                  className="bg-white text-purple-600 font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-purple-100 transition-transform duration-300 transform hover:scale-105"
                >
                  Register
                </button>
              )}
            </div>
          </form>
        ) : (
          <p className="text-lg text-white">Thank you for joining PlayVault! We'll get in touch with you soon.</p>
        )}
      </div>
    </div>
  );
};

export default JoinPage;
