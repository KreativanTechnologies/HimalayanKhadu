import Image from "next/image";

export default function AboutSection() {
  return (
    <div className="px-6 sm:px-12 py-12 md:py-16 lg:py-20 h-fit">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
        {/* Left content */}
        <div className="w-full md:w-1/2 max-w-2xl mx-auto space-y-4 text-center md:text-left">
          <h2 className="text-[4vh] md:text-[5vh] font-bold">
            <span className="text-[#0C8699]">About</span> Himalayan Khadu
          </h2>
          <p className="text-gray-700 leading-relaxed text-[1.6vh] sm:text-[2vh] sm:text-base">
            Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry&apos;s standard dummy text ever since the 1500s.
          </p>
          <div className="pt-4">
            <button className="bg-[#0C8699] text-white rounded-full px-6 py-2">Book Your Trip</button>
          </div>
        </div>

        {/* Right images */}
        <div className="w-full md:w-1/2 relative flex justify-center items-center h-[60vh] md:h-[70vh]">
          
          {/* Background Image */}
          <img src="/images/aboutimg/Group.png" alt="" className="absolute w-full h-full object-cover top-[10%] right-[10%]" />

          <div className="relative w-[90vw] max-w-xl h-full flex justify-center items-center">
            
            {/* First image */}
            <div className="absolute top-[18%] sm:top-[14%] left-[30%] transform -translate-x-1/2 sm:left-[30%] md:left-[30%] 
            w-[37vw] sm:w-[27vw] md:w-[19vw] rounded-lg overflow-hidden rotate-[5deg] z-20 transition-all duration-300 
            hover:z-[100] hover:scale-110 will-change-transform">
              <img src="/images/aboutimg/aboutimg.png" alt="Himalayan guide" className="object-cover w-full h-full" />
            </div>

            {/* Second image */}
            <div className="absolute top-[33%] sm:top-[32%] right-[25%] sm:right-[28%] md:right-[22%] 
            w-[49vw] sm:w-[39vw] md:w-[26vw] rounded-lg overflow-hidden transform -rotate-[5deg] z-10 transition-all duration-300 
            hover:z-[100] hover:scale-110 will-change-transform">
              <img src="/images/aboutimg/aboutimg3.png" alt="Scenery" className="object-cover w-full h-full" />
            </div>

            {/* Third image */}
            <div className="absolute top-[55%] sm:top-[57%] right-[15%] sm:right-[12%] md:right-[3%] 
            w-[37vw] sm:w-[32vw] md:w-[19vw] rounded-lg overflow-hidden z-15 transition-all duration-300 
            hover:z-[100] hover:scale-110 will-change-transform">
              <img src="/images/aboutimg/aboutimg2.png" alt="I love NAKO sign" className="object-cover w-full h-full" />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
