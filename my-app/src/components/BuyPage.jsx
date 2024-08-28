import React, { useState } from 'react';
import { IoClose } from 'react-icons/io5';

const BuyPage = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const cards = [
    { id: 1, walletAddress: '0x1234...abcd', accountId: 'ACC001', cost: '0.5 ETH' },
    { id: 2, walletAddress: '0x5678...efgh', accountId: 'ACC002', cost: '1.0 ETH' },
    { id: 3, walletAddress: '0x9abc...ijkl', accountId: 'ACC003', cost: '2.5 ETH' },
  ];

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const handleCloseModal = () => {
    setSelectedCard(null);
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
            <h2 className="text-3xl font-extrabold mb-4">Account {card.accountId}</h2>
            <p className="text-2xl mb-2">Cost: {card.cost}</p>
            <p className="text-lg">Wallet: {card.walletAddress.substring(0, 6)}...{card.walletAddress.substring(card.walletAddress.length - 4)}</p>
          </div>
        ))}
      </div>

      {selectedCard && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="relative bg-white rounded-2xl p-10 max-w-md w-full shadow-2xl">
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 transition transform hover:scale-105"
            >
              <IoClose size={24} />
            </button>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Account Details</h2>
            <p className="mb-3 text-lg"><strong>Wallet Address:</strong> {selectedCard.walletAddress}</p>
            <p className="mb-3 text-lg"><strong>Account ID:</strong> {selectedCard.accountId}</p>
            <p className="mb-6 text-lg"><strong>Cost:</strong> {selectedCard.cost}</p>
            <button
              className="bg-yellow-600 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-yellow-500 transition duration-300 transform hover:scale-105"
            >
              Buy Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BuyPage;
