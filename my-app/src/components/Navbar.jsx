import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';

// SVG Logo Component
const LogoSVG = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-12 h-12 text-white"
  >
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="M12 22l10-5V7l-10 5-10-5v10l10 5z" />
  </svg>
);

const Navbar = () => {
  const [account, setAccount] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Animate the navbar sliding in from the top
    gsap.fromTo(
      '.navbar',
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power4.out' }
    );

    // Animate the logo with a bounce effect
    gsap.fromTo(
      '.navbar-logo',
      { opacity: 0, y: -30 },
      { opacity: 1, y: 0, duration: 1, ease: 'bounce.out' }
    );

    // Animate the button with a pulse effect
    gsap.fromTo(
      '.connect-button',
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 1, ease: 'back.out(1.7)', delay: 0.5 }
    );
  }, []);

  const connectMetaMask = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccount(accounts[0]);
      } catch (error) {
        console.error("User denied account access or there was an error");
      }
    } else {
      alert("MetaMask not detected. Please install MetaMask extension.");
    }
  };

  return (
    <nav className="navbar bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 p-4 flex justify-between items-center shadow-lg relative">
      <Link to="/" className="flex items-center navbar-logo">
        <LogoSVG />
        <span className="text-white text-3xl font-extrabold tracking-wide ml-3 cursor-pointer">
          PlayVault
        </span>
      </Link>
      <div>
        {account ? (
          <span className="text-white font-semibold bg-purple-800 px-5 py-2 rounded-lg shadow-md transform transition-transform hover:scale-105">
            Connected: {account.substring(0, 6)}...{account.substring(account.length - 4)}
          </span>
        ) : (
          <button
            onClick={connectMetaMask}
            className="connect-button bg-white text-purple-600 font-semibold px-6 py-3 rounded-lg shadow-xl transition-all duration-300 ease-in-out hover:bg-purple-100 hover:scale-105"
          >
            Connect MetaMask
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
