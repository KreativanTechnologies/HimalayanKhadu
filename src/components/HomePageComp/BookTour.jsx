import React from "react";

const BookTour = () => {
  return (
    <div className="w-full h-full py-[4vw] relative">
      <div className="w-full h-full absolute">
        {/* <img className='' src="" alt="" /> */}
      </div>
      <div className="w-full h-[95vw] sm:h-[35vw] relative flex flex-col items-center justify-center">
        <div className="sm:absolute w-full sm:w-1/2 h-full sm:h-[10vw] sm:top-0 sm:left-1/2 sm:-translate-x-1/2 flex flex-col items-center sm:justify-center gap-[1vw]">
          <p className="text-xl sm:text-[2.5vw] font-semibold">
            Find And Book Your Tour{" "}
            <span className="text-[#0C8699]">Today!</span>
          </p>
          <button className="text-md px-4 py-1 z-10 sm:px-[1.5vw] sm:py-[0.5vw] sm:text-[1.2vw] font-medium rounded-full text-white bg-[#0C8699]">
            Book Now!
          </button>
        </div>



        <div className="absolute w-[30vw] top-[22vw] left-[15vw] h-[30vw] sm:w-[17vw] sm:h-[15vw] sm:top-[5vw] sm:left-[8vw] bg-green-600 rounded-[0.5vw] rotate-[-10deg] overflow-hidden hover:scale-110 duration-1000 cursor-pointer hover:rounded-[3vw]">
          <img
            className="w-full h-full object-center object-cover"
            src=""
            alt=""
          />
        </div>
        <div className="absolute w-[30vw] top-[22vw] right-[15vw] h-[30vw] sm:w-[17vw] sm:h-[15vw] sm:top-[5vw] sm:right-[8vw] bg-green-600 rounded-[0.5vw] rotate-[10deg] overflow-hidden hover:scale-110 duration-1000 cursor-pointer hover:rounded-[3vw]">
          <img
            className="w-full h-full object-center object-cover"
            src=""
            alt=""
          />
        </div>
        <div className="absolute w-[30vw] top-[60vw] left-[15vw] h-[30vw] sm:w-[17vw] sm:h-[15vw] sm:top-[12vw] sm:left-[30vw] bg-green-600 rounded-[0.5vw] rotate-[10deg] sm:rotate-[5deg] overflow-hidden hover:scale-110 duration-1000 cursor-pointer hover:rounded-[3vw]">
          <img
            className="w-full h-full object-center object-cover"
            src=""
            alt=""
          />
        </div>
        <div className="absolute w-[30vw] top-[60vw] right-[15vw] h-[30vw] sm:w-[17vw] sm:h-[15vw] sm:top-[14vw] sm:left-[53vw] bg-green-600 rounded-[0.5vw] rotate-[-10deg] overflow-hidden hover:scale-110 duration-1000 cursor-pointer hover:rounded-[3vw]">
          <img
            className="w-full h-full object-center object-cover"
            src=""
            alt=""
          />
        </div>
        {/* <div className='absolute w-[15vw] h-[15vw] bg-green-600 rounded-[0.5vw] top-[5vw] left-[8vw] rotate-[-10deg] '></div> */}
      </div>
    </div>
  );
};

export default BookTour;
