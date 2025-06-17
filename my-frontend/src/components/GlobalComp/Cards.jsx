import React from "react";
import { motion } from "framer-motion";

const Cards = ({ trips, showAll }) => {
  return (
    <>
      {trips
        .slice(0, trips.length <= 4 ? trips.length : showAll ? trips.length : 4)
        .map((trip, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative">
              <img
                src={trip.gallery[0]}
                alt={trip.title}
                className="w-full h-48 object-cover"
              />
              {trip.badge && (
                <motion.span
                  className="absolute top-2 left-2 bg-teal-600 text-white text-xs px-3 py-1 rounded-full"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {trip.badge}
                </motion.span>
              )}
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold">{trip.title}</h3>
              <p className="text-sm text-gray-600 flex items-center gap-1 mt-1">
                ⏳ {trip.duration}
              </p>
              <div className="mt-2 flex items-center justify-between">
                <p className="text-teal-600 text-sm font-bold">{trip.price}</p>
                <p className="text-yellow-500 text-sm">⭐⭐⭐⭐⭐ (2 Reviews)</p>
              </div>
            </div>
          </motion.div>
        ))}
    </>
  );
};

export default Cards;
