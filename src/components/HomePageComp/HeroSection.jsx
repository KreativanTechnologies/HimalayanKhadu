"use client";
import React, { useState, useEffect } from "react";
import { FaMapMarkerAlt, FaTag, FaSmile, FaBolt, FaSearch } from "react-icons/fa";

const images = [
  "/images/HomePage/h1.png",
  "/images/HomePage/h3.png",
  "/images/HomePage/h4.png",
];

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen bg-cover bg-center transition-all duration-1000"
      style={{ backgroundImage: `url(${images[currentImage]})` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-white text-3xl md:text-5xl font-bold">
          Book Your Trip Today To <span className="text-[#0C8699]">Meghalaya.</span>
        </h1>
        <div className="mt-6 flex items-center w-full max-w-lg bg-white rounded-full shadow-md overflow-hidden px-4 py-2">
          <input
            type="text"
            placeholder="Type Your Location..."
            className="w-full p-3 outline-none text-sm md:text-base bg-transparent"
          />
          <button className="bg-[#0C8699] text-white flex items-center px-6 py-3 rounded-full">
            <FaSearch className="mr-2" /> Search
          </button>
        </div>
      </div>
      <div className="absolute bottom-[-100px] left-1/2 transform -translate-x-1/2 w-full max-w-2xl lg:max-w-5xl h-auto bg-[#0C8699] p-6 md:p-8 lg:p-16 rounded-lg shadow-lg flex flex-wrap justify-around items-center gap-4 md:gap-0">
        <div className="flex flex-col items-center text-white text-center px-2 md:px-4 py-2 w-1/2 sm:w-auto">
          <FaMapMarkerAlt className="text-xl md:text-2xl lg:text-3xl mb-2" />
          <span className="text-xs md:text-sm lg:text-lg font-bold">100+ Destinations</span>
        </div>
        <div className="flex flex-col items-center text-white text-center px-2 md:px-4 py-2 w-1/2 sm:w-auto">
          <FaTag className="text-xl md:text-2xl lg:text-3xl mb-2" />
          <span className="text-xs md:text-sm lg:text-lg font-bold">Best Price Guarantee</span>
        </div>
        <div className="flex flex-col items-center text-white text-center px-2 md:px-4 py-2 w-1/2 sm:w-auto">
          <FaSmile className="text-xl md:text-2xl lg:text-3xl mb-2" />
          <span className="text-xs md:text-sm lg:text-lg font-bold">Satisfied Customer</span>
        </div>
        <div className="flex flex-col items-center text-white text-center px-2 md:px-4 py-2 w-1/2 sm:w-auto">
          <FaBolt className="text-xl md:text-2xl lg:text-3xl mb-2" />
          <span className="text-xs md:text-sm lg:text-lg font-bold">Super Fast Booking</span>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
