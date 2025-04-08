import React from "react";

const WhyHimalayan = () => {
  return (
    <div className="w-full h-full p-[4vw]">
      <div className="w-full h-full md:h-[30vw] gap-[3vw] flex flex-col md:flex-row">
        <div className="w-full h-full py-[2vw] flex flex-col gap-2 md:gap-[1vw]">
          <h1 className="text-xl md:text-[2.5vw] font-semibold">
            Why <span className="text-[#0C8699]">Himalayan Khadu?</span>
          </h1>
          <p className="text-md md:text-[1.1vw]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, 
          </p>
          <div className="w-full h-full">
            <div className="flex p-2 md:p-[1vw] justify-between md:pr-[10vw]">
              <div>
                <h1 className="text-center text-2xl md:text-[2vw] font-bold text-[#0C8699]">
                  100+
                </h1>
                <p className=" text-md md:text-[1.6vw]">Destianations</p>
              </div>
              <div>
                <h1 className="text-center text-2xl md:text-[2vw] font-bold text-[#0C8699]">
                  200+
                </h1>
                <p className="text-md md:text-[1.6vw]">Satisfied Customers</p>
              </div>
            </div>
            <div className="flex p-[1vw] justify-between md:pr-[10vw]">
              <div className="w-full h-full flex flex-col items-start justify-center">
                <h1 className="text-center text-2xl md:text-[2vw] font-bold text-[#0C8699]">
                  4+ Years
                </h1>
                <p className="text-md md:text-[1.6vw]">Experience</p>
              </div>
              <div className="w-full h-full flex flex-col items-center justify-center">
                <h1 className="text-center text-2xl md:text-[2vw] font-bold text-[#0C8699]">
                  50+
                </h1>
                <p className="text-md md:text-[1.6vw]">Reviews</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-[70vw] md:h-full relative">
          <div className="absolute w-[35vw] h-[32vw] md:w-[14vw] md:h-[13vw] overflow-hidden left-0 md:left-2/12 top-1/6 z-20 rounded-[1vw] hover:scale-110 hover:z-40 cursor-pointer duration-1000 hover:rounded-[4vw]">
            <img
              className="w-full h-full object-cover object-center"
              src="\images\HomePage\IMG_2895.JPG"
              alt=""
            />
          </div>
          <div className="absolute w-[70vw] h-[60vw] md:w-[28vw] md:h-[25vw] overflow-hidden top-0 right-0 rounded-[1vw] hover:scale-110 hover:z-40 cursor-pointer duration-1000 hover:rounded-[4vw]">
            <img
              className="w-full h-full object-cover object-center"
              src="\images\HomePage\IMG_3826.JPG"
              alt=""
            />
          </div>
          <div className="absolute w-[60vw] h-[50vw] md:w-[24vw] md:h-[20vw] overflow-hidden bottom-0 left-1/12 md:left-3/12 z-10 rounded-[1vw] hover:scale-110 hover:z-40 cursor-pointer duration-1000 hover:rounded-[4vw]">
            <img
              className="w-full h-full object-cover object-center"
              src="\images\HomePage\IMG_4159.JPG"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyHimalayan;
