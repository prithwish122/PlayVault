import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import {BrowserProvider, ethers} from "ethers";
import pvtToken from '../contractInfo/pvttoken.json'

const BuyPage = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const navigate = useNavigate();

  const cards = [
    {
      id: 1,
      walletAddress: "0xfB8ae9808D84BF601f2Ef6178Da51a612bD046D0",
      accountId: "ACC001",
      cost: "15 PVT",
    },
    {
      id: 2,
      walletAddress: "0x5678...efgh",
      accountId: "ACC002",
      cost: "1.0 PVT",
    },
    {
      id: 3,
      walletAddress: "0x9abc...ijkl",
      accountId: "ACC003",
      cost: "2.5 PVT",
    },
  ];

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const handleCloseModal = () => {
    setSelectedCard(null);
  };

  const bidNow = async () => {
    const clientAddress = "0xfb8ae9808d84bf601f2ef6178da51a612bd046d0";
    const claimAmt = 15;
    const contractAddress = "0x3DB018dF75e2Df9925c7e2dbe44088685a607dC4"
    const provider = new BrowserProvider(window.ethereum);

    const signer = await provider.getSigner()
    const pvtTokenContract = new ethers.Contract(contractAddress, pvtToken.abi, signer)
    // mint();
    console.log(claimAmt, "========inside withdraw===")

    await (await pvtTokenContract.mint(clientAddress, ethers.parseUnits(claimAmt.toString(), 18))).wait();

    alert('Withdraw your earned PVT coins!');

    // axios
    // axios
    //   .post(
    //     "http://localhost:9000/withdraw",
    //     { clientAddress, claimAmt },
    //     {
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //     }
    //   )
    //   .then((response) => {
    //     console.log(response.data);
    //   })
    //   .catch((error) => {
    //     console.error("There was an error!", error);
    //   });
    // navigate("/buy")
    setTimeout(() => {
      handleCloseModal()
    }, 5000);
    // setSelectedCard(null);

  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-yellow-400 via-red-500 to-pink-600">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 text-white rounded-2xl shadow-xl p-8 text-center cursor-pointer transform hover:scale-105 transition-all duration-300"
            onClick={() => handleCardClick(card)}
          >
            <h2 className="text-3xl font-extrabold mb-4">
              Account {card.accountId}
            </h2>
            <p className="text-2xl mb-2">Cost: {card.cost}</p>
            <p className="text-lg">
              Wallet: {card.walletAddress.substring(0, 6)}...
              {card.walletAddress.substring(card.walletAddress.length - 4)}
            </p>
          </div>
        ))}
      </div>

      {selectedCard && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="relative bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 max-w-md w-full shadow-2xl">
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-gray-300 hover:text-gray-100 transition transform hover:scale-105"
            >
              <IoClose size={24} />
            </button>
            <h2 className="text-3xl font-extrabold text-white mb-6">
              Account Details
            </h2>
            <p className="mb-3 text-lg text-white">
              <strong>Wallet Address:</strong> {selectedCard.walletAddress}
            </p>
            <p className="mb-3 text-lg text-white">
              <strong>Account ID:</strong> {selectedCard.accountId}
            </p>
            <p className="mb-3 text-lg text-white">
              <strong>Cost:</strong> {selectedCard.cost}
            </p>
            <p className="mb-3 text-lg text-white">
              <strong>Twitch ID:</strong> twitch_id_example
            </p>
            <p className="mb-3 text-lg text-white">
              <strong>Steam ID:</strong> steam_id_example
            </p>
            <p className="mb-6 text-lg text-white">
              <strong>Gameplay Videos:</strong>
              <a
                href="https://example.com/video1"
                className="text-blue-400 hover:underline"
              >
                Video 1
              </a>
              ,
              <a
                href="https://example.com/video2"
                className="text-blue-400 hover:underline"
              >
                Video 2
              </a>
            </p>
            <button
              className="bg-yellow-500 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-yellow-400 transition duration-300 transform hover:scale-105"
              onClick={bidNow}
            >
              BID Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BuyPage;
