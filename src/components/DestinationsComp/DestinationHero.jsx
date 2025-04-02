import React from 'react'

const DestinationHero = () => {
  return (
    <div className=" px-6 md:px-18 py-10">
      <section className="flex flex-col md:flex-row  items-center md:gap-18 md:h-screen">
        {/* Left Section */}
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-5xl font-bold leading-[1.3]">
            Our Popular Trips in <br />{" "}
            <span className="text-[#0C8699]">Meghalaya</span>
          </h2>
          <p className=" py-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <button className="text-md px-4 py-1 z-10 sm:px-[1.5vw] sm:py-[0.5vw] sm:text-[1.2vw] font-medium rounded-full text-white bg-[#0C8699]">
            Book Your Trip
          </button>
        </div>

        {/* Right Section - Image Grid */}
        <div className="md:w-1/2 flex md:mt-0 md:h-full md:justify-end gap-0 ">
          <div className="w-56">
            <div className="h-[15rem] md:w-full flex items-end">
              <img
                src="/images/destinationPage/image1.png"
                alt=""
                className=""
              />
            </div>
            <div className="w-64">
              <img
                src="/images/destinationPage/image2.png"
                alt=""
                className=""
              />
            </div>
          </div>
          <div className="w-72">
            <div className="h-[70%] overflow-hidden">
              <img src="/images/destinationPage/image3.png" alt="" />
            </div>
            <div className="bg-[#0C8699]">
              <img src="/images/destinationPage/Vector191.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DestinationHero