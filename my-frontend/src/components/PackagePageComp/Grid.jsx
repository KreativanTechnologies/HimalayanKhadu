import React, { useState } from "react";

const data = [
  {
    img: "/images/Packageimg/IMG_5181.JPG",
    title: "Winter Meghalaya Trip",
    review: 2,
  },
  {
    img: "/images/Packageimg/IMG_4136.JPG",
    title: "Winter Meghalaya Trip",
    review: 2,
  },
  {
    img: "/images/Packageimg/IMG_4159.JPG",
    title: "Winter Meghalaya Trip",
    review: 2,
  },
  {
    img: "/images/Packageimg/IMG_5315.JPG",
    title: "Winter Meghalaya Trip",
    review: 2,
  },
  {
    img: "/images/Packageimg/IMG_6010.JPG",
    title: "Winter Meghalaya Trip",
    review: 2,
  },
  {
    img: "/images/Packageimg/IMG_6244.JPG",
    title: "Winter Meghalaya Trip",
    review: 2,
  },
  {
    img: "/images/Packageimg/IMG_6843.JPG",
    title: "Winter Meghalaya Trip",
    review: 2,
  },
  {
    img: "/images/Packageimg/IMG_4421.JPG",
    title: "Winter Meghalaya Trip",
    review: 2,
  },
  {
    img: "/images/Packageimg/IMG_4155.JPG",
    title: "Winter Meghalaya Trip",
    review: 2,
  },
].map((item) => ({
  ...item,
  img: `${item.img}?resize=100x150`,
}));

const Grid = () => {
  const [visibleItems, setVisibleItems] = useState(6);

  const handleLoadMore = () => {
    setVisibleItems((prev) => prev + 3);
  };

  return (
    <div className="w-full px-8 md:px-18 py-18 mt-12 md:mt-0 rounded-lg">
      <h2 className="text-center text-3xl font-bold mb-12">
        Our <span className="text-[#0C8699]">Package</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {data.slice(0, visibleItems).map((item, index) => (
          <div key={index} className="relative">
            <div className="w-full h-[180px] md:h-[200px] lg:h-[240px] overflow-hidden rounded-xl">
              <img
                className="w-full h-full object-cover shadow-md"
                src={item.img}
                alt={item.title}
              />
            </div>
            <div className="absolute top-2 right-2 bg-opacity-50 text-white text-xs md:text-xl px-6 py-1 rounded-lg font-bold">
              3D 2N
            </div>
            <div className="absolute top-1/2 z-40 left-[-99px] transform -translate-y-1/2 -rotate-90 py-4 text-gray-400 text-2xl font-bold">
              Meghalaya Trip
            </div>
            <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t via-transparent to-transparent rounded-xl">
              <h3 className="text-white text-lg md:text-xl font-bold">
                {item.title}
              </h3>
              <p className="text-white text-sm">
                ⭐⭐⭐⭐⭐ ({item.review} Reviews)
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-6">
        {visibleItems < data.length && (
          <button
            onClick={handleLoadMore}
            className="px-6 py-2 bg-teal-500 text-white rounded-full shadow-md hover:bg-teal-600 mr-4"
          >
            View All Packages
          </button>
        )}
        {visibleItems > 6 && (
          <button
            onClick={() => setVisibleItems(6)}
            className="px-6 py-2 bg-teal-500 text-white rounded-full shadow-md hover:bg-teal-600"
          >
            Show Less
          </button>
        )}
      </div>
    </div>
  );
};

export default Grid;
