"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Cards from "../../components/GlobalComp/Cards.jsx"; 

const tripsData = {
  "Top Destinations": [
    { id: 1, title: "Chandigarh To Spiti Valley Circuit Tour", duration: "8 Nights, 9 Days", price: "₹ 16950", badge: "Best Seller", image: "/images/HomePage/IMG-20250408-WA0009.jpg" },
    { id: 2, title: "Manali To Chandratal Lake Tour", duration: "4 Nights, 5 Days", price: "₹ 8950", badge: "20% OFF", image: "/images/HomePage/IMG_4438.JPG" },
    { id: 3, title: "Shimla To Kalpa Tour ", duration: "6 Nights, 7 Days", price: "₹ 14499", badge: "New", image: "/images/HomePage/IMG_4441.JPG" },
    { id: 4, title: "Chandigarh To Shimla Tour", duration: "9 Nights, 10 Days", price: "₹ 18500", badge: "New", image: "/images/HomePage/IMG_5056.JPG" },
    { id: 5, title: "Shimla To Manali Tour", duration: "6 Nights, 7 Days", price: "₹ 14999", badge: "Best Seller", image: "/images/HomePage/IMG-20250408-WA0004.jpg" },
    { id: 6, title: "Delhi To Shimla Tour", duration: "8 Nights, 9 Days", price: "₹ 15,999", badge: "20% OFF", image: "/images/HomePage/IMG-20250408-WA0005.jpg" },
    { id: 7, title: "Delhi To Manali Tour", duration: "8 Nights, 9 Days", price: "₹ 17999", badge: "New", image: "/images/HomePage/IMG-20250408-WA0007.jpg" },
    { id: 8, title: "Kerala Backwaters", duration: "6 Nights, 7 Days", price: "₹ 15,500", badge: "New", image: "/images/HomePage/IMG-20250408-WA0008.jpg" },
  ],
  "New Launches": [
    { id: 9, title: "Meghalaya with Kaziranga Backpacking Trip", duration: "7 Nights, 8 Days", price: "₹ 18,000", badge: "New", image: "/images/HomePage/IMG_0261.JPG" },
    { id: 10, title: "All Girls Backpacking Trip to Meghalaya", duration: "6 Nights, 7 Days", price: "₹ 15,500", badge: "New", image: "/images/HomePage/IMG_0263.JPG" },
    { id: 11, title: "Kedarkantha Trek", duration: "7 Nights, 8 Days", price: "₹ 18,000", badge: "New", image: "/images/HomePage/IMG_0320.JPG" },
    { id: 12, title: "Winter Spiti Trip", duration: "6 Nights, 7 Days", price: "₹ 15,500", badge: "New", image: "/images/HomePage/IMG_0335.JPG" },
    { id: 13, title: "Uttarakhand Bike & Backpacking Trip", duration: "7 Nights, 8 Days", price: "₹ 18,000", badge: "New", image: "/images/HomePage/IMG_0345.JPG" },
    { id: 14, title: "Hampta Pass Trek", duration: "6 Nights, 7 Days", price: "₹ 15,500", badge: "New", image: "/images/HomePage/IMG_0356.JPG" },
    { id: 15, title: "Deoriatal Chandrashila Trek", duration: "7 Nights, 8 Days", price: "₹ 18,000", badge: "New", image: "/images/HomePage/IMG_0369.JPG" },
    { id: 16, title: "Leh Ladakh Tour with Turtuk", duration: "6 Nights, 7 Days", price: "₹ 15,500", badge: "New", image: "/images/HomePage/IMG_0501.JPG" },
  ],
  "Trending": [
    { id: 17, title: "Rajasthan Desert Safari", duration: "5 Nights, 6 Days", price: "₹ 13,500", badge: "Trending", image: "/images/HomePage/IMG_0502.JPG" },
    { id: 18, title: "Andaman Islands", duration: "6 Nights, 7 Days", price: "₹ 20,000", badge: "Trending", image: "/images/HomePage/IMG_0604.JPG" },
    { id: 19, title: "Himalayan Adventure", duration: "7 Nights, 8 Days", price: "₹ 18,000", badge: "New", image: "/images/HomePage/IMG_0649.JPG" },
    { id: 20, title: "Kerala Backwaters", duration: "6 Nights, 7 Days", price: "₹ 15,500", badge: "New", image: "/images/HomePage/IMG_1384.JPG" },
    { id: 21, title: "yan Adventure", duration: "7 Nights, 8 Days", price: "₹ 18,000", badge: "New", image: "/images/HomePage/IMG_1490.JPG" },
    { id: 22, title: "Kerala Backwaters", duration: "6 Nights, 7 Days", price: "₹ 15,500", badge: "New", image: "/images/HomePage/IMG_1492.JPG" },
    { id: 23, title: "Himalayan Adventure", duration: "7 Nights, 8 Days", price: "₹ 18,000", badge: "New", image: "/images/HomePage/IMG_1501.JPG" },
    { id: 24, title: "Kerala Backwaters", duration: "6 Nights, 7 Days", price: "₹ 15,500", badge: "New", image: "/images/HomePage/IMG_1534.JPG" },
  ],
  "Recommended": [
    { id: 25, title: "Rajasthan Desert Safari", duration: "5 Nights, 6 Days", price: "₹ 13,500", badge: "Trending", image: "/images/HomePage/IMG_1539.JPG" },
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
