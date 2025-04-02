import React from "react";

const Section3 = () => {
  return (
    <div className="h-screen w-full relative ">
      
      <div className="absolute z-30 h-10 w-10 left-[24.2rem] -top-[2rem]">
        <img className="w-full h-full object-cover" src="/images/destinationPage/paperplane.png" alt="vector" />
      </div>


      <div className="absolute z-30">
        <img className="w-full h-full object-cover" src="/images/destinationPage/Vector2.png" alt="vector" />
      </div>


      <div className="h-[90vh] w-full bg-gradient-to-r from-[#dff6fd] to-[#c3e7f6] flex flex-col md:flex-row px-6 md:pl-10 md:pr-0 relative">
      
       
        <div className="relative w-full md:w-[40%] flex items-center justify-center">
       
          <div className="absolute w-48 h-60 md:w-[19rem] md:h-[22rem] rounded-[2vw] overflow-hidden sm:top-[10rem] md:top-[15rem] -translate-y-1/2 left-4 md:left-10 hover:scale-110 hover:z-40 cursor-pointer duration-1000 hover:rounded-[4vw]">
            <img className="w-full h-auto object-cover rounded-xl" src="/images/destinationPage/section3img1.png" alt="Cycling Adventure" />
          </div>


          <div className="absolute w-40 h-48 md:w-56 md:h-[15rem] rounded-xl overflow-hidden sm:top-[5rem] md:top-[7rem] translate-y-1/2 left-20 md:left-[15rem] z-10 hover:scale-110 hover:z-40 cursor-pointer duration-1000 hover:rounded-[4vw]">
            <img className="w-full h-auto object-cover" src="/images/destinationPage/section3img2.png" alt="Hand View" />
          </div>
        </div>


        <div className="w-full md:w-[60%] flex flex-col justify-center text-center md:text-left relative">
          <div className="w-full max-w-[40rem] mx-auto px-4 md:px-0">

            <h2 className="text-3xl sm:text-2xl md:text-4xl font-bold leading-snug">
              We are no. 1 Travel <span className="text-[#0C8699]">Company</span>
            </h2>

      
            <p className="leading-relaxed mt-2 text-sm sm:text-base md:text-lg">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s.
            </p>

          
            <div className="flex flex-wrap justify-center md:justify-start space-x-6 md:space-x-8 my-4">
              <div className="h-16 sm:h-18">
                <img src="/images/destinationPage/nako.png" alt="nako" className="h-full" />
              </div>
              <div>
                <h1 className="text-center text-lg sm:text-xl md:text-[2vw] font-bold text-[#0C8699]">100+</h1>
                <p className="text-md sm:text-lg md:text-[1.6vw]">Destinations</p>
              </div>
              <div>
                <h1 className="text-center text-lg sm:text-xl md:text-[2vw] font-bold text-[#0C8699]">200+</h1>
                <p className="text-md sm:text-lg md:text-[1.6vw]">Satisfied Customers</p>
              </div>
            </div>

         
            <button className="text-sm sm:text-md px-4 py-2 sm:px-6 sm:py-3 font-medium rounded-full text-white bg-[#0C8699] hover:bg-[#097480] transition duration-300">
              Book Your Trip
            </button>
          </div>

         
          <div className="h-48 sm:h-60 md:h-72 w-full flex items-end justify-end absolute bottom-0">
            <img className="h-full w-auto object-cover" src="/images/destinationPage/section3cycle.png" alt="Cyclist" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
