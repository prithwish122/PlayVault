import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

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
      <Link
        to="/"
        className="text-white text-2xl font-extrabold tracking-wide cursor-pointer"
      >
        PlayVault
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
