import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  const handleJoinNow = () => {
    navigate('/join');
  };

  const handleBuyNow = () => {
    navigate('/buy');
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <div className="text-center">
        <h1 className="text-5xl font-extrabold text-white mb-8">
          Welcome to PlayVault
          <br />
          Join us now
        </h1>
        <div className="flex justify-center gap-4">
          <button
            onClick={handleJoinNow}
            className="bg-white text-purple-600 font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-purple-100 transition duration-300 transform hover:scale-105"
          >
            Join Now
          </button>
          <button
            onClick={handleBuyNow}
            className="bg-yellow-500 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-yellow-400 transition duration-300 transform hover:scale-105"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
