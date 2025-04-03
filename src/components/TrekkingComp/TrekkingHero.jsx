import React from "react";

const TrekkingHero = () => {
  return (
    <div className=" px-6 md:px-18 pt-20 ">
      <section className="flex flex-col md:flex-row  items-center gap-4 md:gap-18 ">
        {/* Left Section */}
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold leading-[1.3]">
            Best Treks in <br className="hidden lg:flex" />{" "}
            <span className="text-[#0C8699]">India</span>
          </h2>
          <p className=" py-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 flex md:mt-0 justify-center items-center sm:gap-4 relative ">
          <div className="relative w-full rounded-lg overflow-hidden">
            {/* <div className="md:hidden lg:block">
              <img
                src="/images/trekkingPage/hero.png"
                alt="Trekking Hero"
                className="w-full h-auto "
              />
            </div> */}
            <div className="">
              <img
                src="/images/trekkingPage/hero.webp"
                alt="Trekking Hero"
                className="w-full h-auto "
              />
            </div>

            {/* <div className="absolute bottom-[3%] right-[3%] md:bottom-[0.3vw] lg:right-[1vw] p-2 md:p-3 flex items-center gap-2 md:gap-4 scale-90 md:scale-100 transition-transform">
              <div className="relative flex items-center w-[9vw] md:w-[7vw]">
                <img
                  src="/images/trekkingPage/user1.png"
                  alt="User 1"
                  className="h-[4.5vw] w-[4.5vw] md:h-[3.5vw] md:w-[3.5vw] rounded-full absolute left-0"
                />
                <img
                  src="/images/trekkingPage/user2.png"
                  alt="User 2"
                  className="h-[4.5vw] w-[4.5vw] md:h-[3.5vw] md:w-[3.5vw] rounded-full left-[2.5vw] md:left-[2vw] absolute"
                />
                <img
                  src="/images/trekkingPage/user1.png"
                  alt="User 1"
                  className="h-[4.5vw] w-[4.5vw] md:h-[3.5vw] md:w-[3.5vw] rounded-full left-[5vw] md:left-[4vw] absolute"
                />
              </div>

          
              <div className="text-[10px] sm:text-[12px] md:text-sm text-gray-700">
                <span className="text-[#0C8699] font-bold block">500+</span>
                <p>
                  People have <br className="hidden sm:block" /> explored
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrekkingHero;
