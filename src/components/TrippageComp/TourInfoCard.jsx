import React from 'react';
import { Clock, MapPin, List, Users } from 'lucide-react';

const TourInfoCard = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-wrap gap-4 mt-6 justify-center">
        {/* Duration */}
        <div className="flex items-center gap-3 border rounded-lg px-4 py-3 w-full sm:w-[300px] bg-white shadow-sm border-cyan-100">
          <div className="bg-cyan-50 p-2 rounded-md">
            <Clock className="text-cyan-700 w-6 h-6" />
          </div>
          <div>
            <h4 className="text-cyan-800 font-semibold">Duration</h4>
            <p className="text-gray-600 text-sm">7 Days 6 Nights</p>
          </div>
        </div>

        {/* Pickup & Drop */}
        <div className="flex items-center gap-3 border rounded-lg px-4 py-3 w-full sm:w-[300px] bg-white shadow-sm border-cyan-100">
          <div className="bg-cyan-50 p-2 rounded-md">
            <MapPin className="text-cyan-700 w-6 h-6" />
          </div>
          <div>
            <h4 className="text-cyan-800 font-semibold">Pickup & Drop</h4>
            <p className="text-gray-600 text-sm">Guwahati to Guwahati</p>
          </div>
        </div>

        {/* Tour Category */}
        <div className="flex items-center gap-3 border rounded-lg px-4 py-3 w-full sm:w-[300px] bg-white shadow-sm border-cyan-100">
          <div className="bg-cyan-50 p-2 rounded-md">
            <List className="text-cyan-700 w-6 h-6" />
          </div>
          <div>
            <h4 className="text-cyan-800 font-semibold">Tour Category</h4>
            <p className="text-gray-600 text-sm">Backpacking Trips</p>
          </div>
        </div>

        {/* Group Size */}
        <div className="flex items-center gap-3 border rounded-lg px-4 py-3 w-full sm:w-[300px] bg-white shadow-sm border-cyan-100">
          <div className="bg-cyan-50 p-2 rounded-md">
            <Users className="text-cyan-700 w-6 h-6" />
          </div>
          <div>
            <h4 className="text-cyan-800 font-semibold">Group Size</h4>
            <p className="text-gray-600 text-sm">Unlimited</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourInfoCard;
