import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// Replace this SVG with your actual logo SVG
const LogoSVG = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-10 h-10 text-white"
  >
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="M12 22l10-5V7l-10 5-10-5v10l10 5z" />
  </svg>
);

const Navbar = () => {
  const [account, setAccount] = useState(null);
  const navigate = useNavigate();

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
    <nav className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 p-4 flex justify-between items-center shadow-lg">
      <Link to="/" className="flex items-center">
        <LogoSVG />
        <span className="text-white text-2xl font-extrabold tracking-wide ml-3 cursor-pointer">
          PlayVault
        </span>
      </Link>
      <div>
        {account ? (
          <span className="text-white font-semibold bg-purple-700 px-4 py-2 rounded-lg shadow-sm">
            Connected: {account.substring(0, 6)}...{account.substring(account.length - 4)}
          </span>
        ) : (
          <button
            onClick={connectMetaMask}
            className="bg-white text-purple-600 font-semibold px-6 py-2 rounded-lg shadow-md hover:bg-purple-100 transition duration-300 transform hover:scale-105"
          >
            Connect MetaMask
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
