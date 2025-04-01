import Image from "next/image";

export default function AboutSection() {
  return (
    <div className="px-6 sm:px-12  py-12 md:py-16 lg:py-20 overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-12">
        {/* Left content */}
        <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-[#0C8699]">About</span> Himalayan Khadu
          </h2>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
            Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          <div className="pt-4">
            <button className="bg-[#0C8699]  text-white rounded-full px-6 py-2">Book Your Trip</button>
          </div>
        </div>

        {/* Right images with decorative elements */}
        <div className="w-full md:w-1/2 relative flex justify-center items-center">
          <div className="relative h-[300px] sm:h-[350px] md:h-[450px] w-full max-w-sm sm:max-w-md md:max-w-lg flex justify-center items-center">
            {/* First image (person) */}
            <div className="absolute top-0 left-[50%] transform -translate-x-1/2 sm:left-[40%] md:left-[30%] w-[220px] sm:w-[230px] rounded-lg overflow-hidden rotate-[5deg] z-20">
              <img src="/images/aboutimg/aboutimg.png" alt="Himalayan guide" className="object-cover w-full h-full" />
            </div>

            {/* Second image */}
            <div className="absolute top-[20%] right-[10%] sm:right-[15%] md:right-[24%] w-[240px] sm:w-[320px]  rounded-lg overflow-hidden transform -rotate-[5deg] z-10">
              <img src="/images/aboutimg/aboutimg3.png" alt="Scenery" className="object-cover w-full h-full" />
            </div>

            {/* Third image (I love NAKO sign) */}
            <div className="absolute top-[50%] right-[0%] sm:right-[5%] md:right-[3%] w-[220px] sm:w-[260px] md:w-[300px] rounded-lg overflow-hidden z-20">
              <img src="/images/aboutimg/aboutimg2.png" alt="I love NAKO sign" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}