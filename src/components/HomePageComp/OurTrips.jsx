"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Cards from "../../components/GlobalComp/Cards.jsx"; 

const tripsData = {
  "Top Destinations": [
    { id: 1, title: "Winter Meghalaya Trip", duration: "6 Nights, 7 Days", price: "₹ 12,500", badge: "Best Seller", image: "images/HomePage/IMG_0136.webp" },
    { id: 2, title: "Summer Goa Trip", duration: "5 Nights, 6 Days", price: "₹ 14,000", badge: "20% OFF", image: "images/HomePage/IMG_0175.webp" },
    { id: 3, title: "Himalayan Adventure", duration: "7 Nights, 8 Days", price: "₹ 18,000", badge: "New", image: "images/HomePage/IMG_0214.webp" },
    { id: 4, title: "Kerala Backwaters", duration: "6 Nights, 7 Days", price: "₹ 15,500", badge: "New", image: "images/HomePage/IMG_0246.webp" },
    { id: 5, title: "Winter Meghalaya Trip", duration: "6 Nights, 7 Days", price: "₹ 12,500", badge: "Best Seller", image: "images/HomePage/IMG_0261.webp" },
    { id: 6, title: "Summer Goa Trip", duration: "5 Nights, 6 Days", price: "₹ 14,000", badge: "20% OFF", image: "images/HomePage/IMG_0263.webp" },
    { id: 7, title: "Himalayan Adventure", duration: "7 Nights, 8 Days", price: "₹ 18,000", badge: "New", image: "images/HomePage/IMG_0320.webp" },
    { id: 8, title: "Kerala Backwaters", duration: "6 Nights, 7 Days", price: "₹ 15,500", badge: "New", image: "images/HomePage/IMG_0335.webp" },
  ],
  "New Launches": [
    { id: 9, title: "Meghalaya with Kaziranga Backpacking Trip", duration: "7 Nights, 8 Days", price: "₹ 18,000", badge: "New", image: "images/HomePage/IMG_0339.webp" },
    { id: 10, title: "All Girls Backpacking Trip to Meghalaya", duration: "6 Nights, 7 Days", price: "₹ 15,500", badge: "New", image: "images/HomePage/IMG_0345.webp" },
    { id: 11, title: "Kedarkantha Trek", duration: "7 Nights, 8 Days", price: "₹ 18,000", badge: "New", image: "images/HomePage/IMG_0356.webp" },
    { id: 12, title: "Winter Spiti Trip", duration: "6 Nights, 7 Days", price: "₹ 15,500", badge: "New", image: "images/HomePage/IMG_0368.webp" },
    { id: 13, title: "Uttarakhand Bike & Backpacking Trip", duration: "7 Nights, 8 Days", price: "₹ 18,000", badge: "New", image: "/images/HomePage/IMG_0369.webp" },
    { id: 14, title: "Hampta Pass Trek", duration: "6 Nights, 7 Days", price: "₹ 15,500", badge: "New", image: "images/HomePage/IMG_0458.webp" },
    { id: 15, title: "Deoriatal Chandrashila Trek", duration: "7 Nights, 8 Days", price: "₹ 18,000", badge: "New", image: "images/HomePage/IMG_0501.webp" },
    { id: 16, title: "Leh Ladakh Tour with Turtuk", duration: "6 Nights, 7 Days", price: "₹ 15,500", badge: "New", image: "/images/HomePage/IMG_0502.webp" },
  ],
  "Trending": [
    { id: 17, title: "Rajasthan Desert Safari", duration: "5 Nights, 6 Days", price: "₹ 13,500", badge: "Trending", image: "/images/HomePage/IMG_0571.webp" },
    { id: 18, title: "Andaman Islands", duration: "6 Nights, 7 Days", price: "₹ 20,000", badge: "Trending", image: "images/HomePage/IMG_0649.webp" },
    { id: 19, title: "Himalayan Adventure", duration: "7 Nights, 8 Days", price: "₹ 18,000", badge: "New", image: "images/HomePage/IMG_0736.webp" },
    { id: 20, title: "Kerala Backwaters", duration: "6 Nights, 7 Days", price: "₹ 15,500", badge: "New", image: "images/HomePage/IMG_0764.webp" },
    { id: 21, title: "yan Adventure", duration: "7 Nights, 8 Days", price: "₹ 18,000", badge: "New", image: "images/HomePage/IMG_1005.webp" },
    { id: 22, title: "Kerala Backwaters", duration: "6 Nights, 7 Days", price: "₹ 15,500", badge: "New", image: "images/HomePage/IMG_1194.webp" },
    { id: 23, title: "Himalayan Adventure", duration: "7 Nights, 8 Days", price: "₹ 18,000", badge: "New", image: "images/HomePage/IMG_1262.webp" },
    { id: 24, title: "Kerala Backwaters", duration: "6 Nights, 7 Days", price: "₹ 15,500", badge: "New", image: "images/HomePage/IMG_1262.webp" },
  ],
  "Recommended": [
    { id: 25, title: "Rajasthan Desert Safari", duration: "5 Nights, 6 Days", price: "₹ 13,500", badge: "Trending", image: "/images/HomePage/IMG_1384.webp" },
    { id: 26, title: "Andaman Islands", duration: "6 Nights, 7 Days", price: "₹ 20,000", badge: "Trending", image: "/images/HomePage/IMG_1550.JPG" },
    { id: 27, title: "Himalayan Adventure", duration: "7 Nights, 8 Days", price: "₹ 18,000", badge: "New", image: "/images/HomePage/IMG_3164.JPG" },
    { id: 28, title: "Kerala Backwaters", duration: "6 Nights, 7 Days", price: "₹ 15,500", badge: "New", image: "/images/HomePage/IMG_1815.JPG" },
    { id: 29, title: "raj Adventure", duration: "7 Nights, 8 Days", price: "₹ 18,000", badge: "New", image: "/images/HomePage/IMG_1902.JPG" },
    { id: 30, title: "Kerala Backwaters", duration: "6 Nights, 7 Days", price: "₹ 15,500", badge: "New", image: "/images/HomePage/IMG_1907.JPG" },
    { id: 31, title: "Himalayan Adventure", duration: "7 Nights, 8 Days", price: "₹ 18,000", badge: "New", image: "/images/HomePage/IMG_1930.JPG" },
    { id: 32, title: "Kerala Backwaters", duration: "6 Nights, 7 Days", price: "₹ 15,500", badge: "New", image: "/images/HomePage/IMG_1948.JPG" },
  ],
  "Featured": [
    { id: 33, title: "Rajasthan Desert Safari", duration: "5 Nights, 6 Days", price: "₹ 13,500", badge: "Trending", image: "/images/HomePage/IMG_1971.JPG" },
    { id: 34, title: "Andaman Islands", duration: "6 Nights, 7 Days", price: "₹ 20,000", badge: "Trending", image: "/images/HomePage/IMG_1995.JPG" },
    { id: 35, title: "Himalayan Adventure", duration: "7 Nights, 8 Days", price: "₹ 18,000", badge: "New", image: "/images/HomePage/IMG_1996.JPG" },
    { id: 36, title: "Kerala Backwaters", duration: "6 Nights, 7 Days", price: "₹ 15,500", badge: "New", image: "/images/HomePage/IMG_2011.JPG" },
    { id: 37, title: "Hrgrfr Adventure", duration: "7 Nights, 8 Days", price: "₹ 18,000", badge: "New", image: "/images/HomePage/IMG_2012.JPG" },
    { id: 38, title: "Kerala Backwaters", duration: "6 Nights, 7 Days", price: "₹ 15,500", badge: "New", image: "/images/HomePage/IMG_2034.JPG" },
    { id: 39, title: "Himalayan Adventure", duration: "7 Nights, 8 Days", price: "₹ 18,000", badge: "New", image: "/images/HomePage/IMG_2134.JPG" },
    { id: 40, title: "Kerala Backwaters", duration: "6 Nights, 7 Days", price: "₹ 15,500", badge: "New", image: "/images/HomePage/IMG_2286.JPG" },
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
