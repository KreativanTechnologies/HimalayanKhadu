"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Cards from "../../components/GlobalComp/Cards.jsx"; 

const tripsData = {
  "Top Destinations": [
    { id: 1, title: "Winter Meghalaya Trip", duration: "6 Nights, 7 Days", price: "₹ 12,500", badge: "Best Seller", image: "/images/HomePage/h1.png" },
    { id: 2, title: "Summer Goa Trip", duration: "5 Nights, 6 Days", price: "₹ 14,000", badge: "20% OFF", image: "/images/HomePage/h1.png" },
    { id: 3, title: "Himalayan Adventure", duration: "7 Nights, 8 Days", price: "₹ 18,000", badge: "New", image: "/images/HomePage/h1.png" },
    { id: 4, title: "Kerala Backwaters", duration: "6 Nights, 7 Days", price: "₹ 15,500", badge: "New", image: "/images/HomePage/h1.png" },
    { id: 5, title: "Winter Meghalaya Trip", duration: "6 Nights, 7 Days", price: "₹ 12,500", badge: "Best Seller", image: "/images/HomePage/h1.png" },
    { id: 6, title: "Summer Goa Trip", duration: "5 Nights, 6 Days", price: "₹ 14,000", badge: "20% OFF", image: "/images/HomePage/h1.png" },
    { id: 7, title: "Himalayan Adventure", duration: "7 Nights, 8 Days", price: "₹ 18,000", badge: "New", image: "/images/HomePage/h1.png" },
    { id: 8, title: "Kerala Backwaters", duration: "6 Nights, 7 Days", price: "₹ 15,500", badge: "New", image: "/images/HomePage/h1.png" },
  ],
  "New Launches": [
    { id: 9, title: "Himalayan Adventure", duration: "7 Nights, 8 Days", price: "₹ 18,000", badge: "New", image: "/images/HomePage/h1.png" },
    { id: 10, title: "Kerala Backwaters", duration: "6 Nights, 7 Days", price: "₹ 15,500", badge: "New", image: "/images/HomePage/h1.png" },
    { id: 11, title: "Himalayan Adventure", duration: "7 Nights, 8 Days", price: "₹ 18,000", badge: "New", image: "/images/HomePage/h1.png" },
    { id: 12, title: "Kerala Backwaters", duration: "6 Nights, 7 Days", price: "₹ 15,500", badge: "New", image: "/images/HomePage/h1.png" },
    { id: 13, title: " Adventure", duration: "7 Nights, 8 Days", price: "₹ 18,000", badge: "New", image: "/images/HomePage/h1.png" },
    { id: 14, title: "Kerala Backwaters", duration: "6 Nights, 7 Days", price: "₹ 15,500", badge: "New", image: "/images/HomePage/h1.png" },
    { id: 15, title: "Himalayan Adventure", duration: "7 Nights, 8 Days", price: "₹ 18,000", badge: "New", image: "/images/HomePage/h1.png" },
    { id: 16, title: "Kerala Backwaters", duration: "6 Nights, 7 Days", price: "₹ 15,500", badge: "New", image: "/images/HomePage/h1.png" },
  ],
  "Trending": [
    { id: 17, title: "Rajasthan Desert Safari", duration: "5 Nights, 6 Days", price: "₹ 13,500", badge: "Trending", image: "/images/HomePage/h1.png" },
    { id: 18, title: "Andaman Islands", duration: "6 Nights, 7 Days", price: "₹ 20,000", badge: "Trending", image: "/images/HomePage/h1.png" },
    { id: 19, title: "Himalayan Adventure", duration: "7 Nights, 8 Days", price: "₹ 18,000", badge: "New", image: "/images/HomePage/h1.png" },
    { id: 20, title: "Kerala Backwaters", duration: "6 Nights, 7 Days", price: "₹ 15,500", badge: "New", image: "/images/HomePage/h1.png" },
    { id: 21, title: "yan Adventure", duration: "7 Nights, 8 Days", price: "₹ 18,000", badge: "New", image: "/images/HomePage/h1.png" },
    { id: 22, title: "Kerala Backwaters", duration: "6 Nights, 7 Days", price: "₹ 15,500", badge: "New", image: "/images/HomePage/h1.png" },
    { id: 23, title: "Himalayan Adventure", duration: "7 Nights, 8 Days", price: "₹ 18,000", badge: "New", image: "/images/HomePage/h1.png" },
    { id: 24, title: "Kerala Backwaters", duration: "6 Nights, 7 Days", price: "₹ 15,500", badge: "New", image: "/images/HomePage/h1.png" },
  ],
  "Recommended": [
    { id: 25, title: "Rajasthan Desert Safari", duration: "5 Nights, 6 Days", price: "₹ 13,500", badge: "Trending", image: "/images/HomePage/h1.png" },
    { id: 26, title: "Andaman Islands", duration: "6 Nights, 7 Days", price: "₹ 20,000", badge: "Trending", image: "/images/HomePage/h1.png" },
    { id: 27, title: "Himalayan Adventure", duration: "7 Nights, 8 Days", price: "₹ 18,000", badge: "New", image: "/images/HomePage/h1.png" },
    { id: 28, title: "Kerala Backwaters", duration: "6 Nights, 7 Days", price: "₹ 15,500", badge: "New", image: "/images/HomePage/h1.png" },
    { id: 29, title: "raj Adventure", duration: "7 Nights, 8 Days", price: "₹ 18,000", badge: "New", image: "/images/HomePage/h1.png" },
    { id: 30, title: "Kerala Backwaters", duration: "6 Nights, 7 Days", price: "₹ 15,500", badge: "New", image: "/images/HomePage/h1.png" },
    { id: 31, title: "Himalayan Adventure", duration: "7 Nights, 8 Days", price: "₹ 18,000", badge: "New", image: "/images/HomePage/h1.png" },
    { id: 32, title: "Kerala Backwaters", duration: "6 Nights, 7 Days", price: "₹ 15,500", badge: "New", image: "/images/HomePage/h1.png" },
  ],
  "Featured": [
    { id: 33, title: "Rajasthan Desert Safari", duration: "5 Nights, 6 Days", price: "₹ 13,500", badge: "Trending", image: "/images/HomePage/h1.png" },
    { id: 34, title: "Andaman Islands", duration: "6 Nights, 7 Days", price: "₹ 20,000", badge: "Trending", image: "/images/HomePage/h1.png" },
    { id: 35, title: "Himalayan Adventure", duration: "7 Nights, 8 Days", price: "₹ 18,000", badge: "New", image: "/images/HomePage/h1.png" },
    { id: 36, title: "Kerala Backwaters", duration: "6 Nights, 7 Days", price: "₹ 15,500", badge: "New", image: "/images/HomePage/h1.png" },
    { id: 37, title: "Hrgrfr Adventure", duration: "7 Nights, 8 Days", price: "₹ 18,000", badge: "New", image: "/images/HomePage/h1.png" },
    { id: 38, title: "Kerala Backwaters", duration: "6 Nights, 7 Days", price: "₹ 15,500", badge: "New", image: "/images/HomePage/h1.png" },
    { id: 39, title: "Himalayan Adventure", duration: "7 Nights, 8 Days", price: "₹ 18,000", badge: "New", image: "/images/HomePage/h1.png" },
    { id: 40, title: "Kerala Backwaters", duration: "6 Nights, 7 Days", price: "₹ 15,500", badge: "New", image: "/images/HomePage/h1.png" },
  ],
};
const categories = Object.keys(tripsData);

const OurTrips = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="w-full px-6 md:px-18 py-10 pt-36">
      <motion.h2
        className="text-3xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-teal-600">Discover</span> Our Trips
      </motion.h2>
      
      {/* Category Buttons */}
      <motion.div className="flex flex-wrap justify-center  gap-4 mb-6">
        {categories.map((category) => (
          <motion.button
            key={category}
            className={`px-4 py-2 rounded-lg text-sm font-semibold cursor-pointer border transition-all ${
              activeCategory === category
                ? "bg-teal-600 text-white"
                : "border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white"
            }`}
            onClick={() => setActiveCategory(category)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {category}
          </motion.button>
        ))}
      </motion.div>

      {/* Cards Section */}
      <AnimatePresence mode="wait">
        <motion.div 
          key={activeCategory}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <Cards trips={tripsData[activeCategory]} showAll={showAll} />
        </motion.div>
      </AnimatePresence>

      {/* View All Packages Button */}
      {tripsData[activeCategory].length > 4 && (
        <div className="flex items-center justify-center w-full">
          <button
            className="mt-6 px-6 py-2 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition-all"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less" : "View All Packages"}
          </button>
        </div>
      )}
    </div>
  );
};

export default OurTrips;
