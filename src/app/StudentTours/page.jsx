
import Image from "next/image"

import DestinationSlider from '../../components/DestinationsComp/DestinationSlider';
import ClientSay from "../../components/HomePageComp/ClientSay"
import WhyHimalayan from "../../components/HomePageComp/WhyHimalayan"
import Blogs from "../../components/HomePageComp/Blogs"
export default function page() {
  return (
    <div>
        <Hero />
        <DestinationSlider/>
        <ClientSay/>
        <WhyHimalayan/>
        <Blogs/>
        {/* <Cards/> */}
    </div>
  )
}


const Hero =() => {
    return (
        <main className="container mx-auto px-4 py-12 md:py-20 border-2">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
          {/* Text Content */}
          <div className="w-full md:w-1/2 max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              A Journey of Discovery for <span className="text-teal-600">Young Minds</span>
            </h1>
            <p className="text-gray-700 leading-relaxed">
              Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
              Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
  
        {/* Image Collage - Updated with all three images */}
        <div className="w-full md:w-1/2 relative h-[400px] md:h-[500px]">
          {/* First image - Cycling with insurance text */}
          <div className="absolute top-0 left-0 md:left-40  w-[200px] h-[180px] rounded-lg overflow-hidden shadow-lg transform rotate-[9.23deg] z-10  border-4 border-blue-400">
            <Image src="/cycling-image.jpg" alt="Insurance qualways dreamt about" fill className="object-cover" />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/30 flex flex-col justify-end p-3">
            
            </div>
          </div>

          {/* Second image - Blue/gray background */}
          <div className="absolute top-[80px] right-[20px] md:right-[40px] w-[280px] h-[200px] bg-blue-200 rounded-lg shadow-lg  border-4 border-blue-700 transform rotate-[-4deg] z-0">
            <Image src="/landscape-image.jpg" alt="Landscape view" fill className="object-cover rounded-lg" />
          </div>

          {/* Third image - I love Nako */}
          <div className="absolute top-[180px] right-[0px] w-[200px] h-[180px] rounded-lg overflow-hidden shadow-lg transform rotate-[3deg] z-20 border-4 border-red-700 transform-[10.89deg] md:bottom-[10px]">
            <Image src="/i-love-nako.jpg" alt="I love Nako sign" fill className="object-cover rounded-lg" />
          </div>
        </div>
        </div>
      </main>
    )
}

