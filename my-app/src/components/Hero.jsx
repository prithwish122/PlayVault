import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';

const Hero = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // GSAP animations
    gsap.fromTo(
      '.hero-title',
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power4.out' }
    );

    gsap.fromTo(
      '.hero-button',
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.8, ease: 'back.out(1.7)', stagger: 0.2 }
    );
  }, []);

  const handleJoinNow = () => {
    navigate('/join');
  };

  const handleBuyNow = () => {
    navigate('/buy');
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
      {/* <div className="absolute inset-0 bg-black opacity-40"></div> */}

      <div className="relative text-center z-10">
        <h1 className="hero-title text-5xl font-extrabold text-white mb-8 text-shadow-md">
          Welcome to PlayVault
          <br />
          Join us now
        </h1>
        <div className="flex justify-center gap-4">
          <button
            onClick={handleJoinNow}
            className="hero-button bg-white text-purple-600 font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-purple-100 transition-transform duration-300 transform hover:scale-105"
          >
            Join Now
          </button>
          <button
            onClick={handleBuyNow}
            className="hero-button bg-yellow-500 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-yellow-400 transition-transform duration-300 transform hover:scale-105"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
