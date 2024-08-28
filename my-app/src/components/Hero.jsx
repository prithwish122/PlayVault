import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import axios from "axios";

// Adding Google Fonts
const loadGoogleFonts = () => {
  const link = document.createElement("link");
  link.href =
    "https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Poppins:wght@400;600&display=swap";
  link.rel = "stylesheet";
  document.head.appendChild(link);
};

const Hero = () => {
  const navigate = useNavigate();

  useEffect(() => {
    loadGoogleFonts();

    // GSAP animations
    gsap.fromTo(
      ".hero-title",
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: "power4.out" }
    );

    gsap.fromTo(
      ".hero-button",
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "back.out(1.7)",
        stagger: 0.2,
      }
    );
  }, []);

  const handleJoinNow = () => {
    navigate("/join");
  };

  const handleBuyNow = () => {
    navigate("/buy");
    console.log("clientAddress", "claimAmt==================");
   
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
      <div className="relative text-center z-10">
        <h1
          className="hero-title text-5xl md:text-6xl font-extrabold text-white mb-8 text-shadow-md"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          Welcome to <span className="text-yellow-300">PlayVault</span> <br />
          <span className="text-yellow-400">BID</span> game accounts to <br />
          purchase from <span className="text-yellow-300">legend gamers</span>
          <br />
          <span className="text-pink-300">Join us now</span>
        </h1>
        <div className="flex justify-center gap-4">
          <button
            onClick={handleJoinNow}
            className="hero-button bg-white text-purple-600 font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-purple-100 transition-transform duration-300 transform hover:scale-105 text-lg md:text-xl"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Join Now
          </button>
          <button
            onClick={handleBuyNow}
            className="hero-button bg-yellow-500 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-yellow-400 transition-transform duration-300 transform hover:scale-105 text-lg md:text-xl"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            BID Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
