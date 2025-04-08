import { div } from 'framer-motion/client'
import React from 'react'

const WhyChooseus = () => {

  const data = [
    {
      img: '/images/aboutimg/best-price.png',
      title: 'Best Price Guarantee',
      desc: 'We offer the most competitive prices without compromising on quality. No hidden charges — just honest, affordable travel.',
    },
    {
      img: '/images/aboutimg/experienced.png',
      title: 'Expert-Led Adventures',
      desc: 'Our trip leaders are trained, certified, and experienced. You’ll be guided safely by professionals who know the mountains inside out.',
    },
    {
      img: '/images/aboutimg/customer-service.png',
      title: '24/7 Customer Care',
      desc: 'Our support team is always available to assist you — from planning to on-trip queries. We’re just a call or message away.',
    },
    {
      img: '/images/aboutimg/travel-bag.png',
      title: 'Customized Packages',
      desc: 'We design trips that match your vibe — solo, group, romantic, or adventurous. Every detail tailored for you.',
    },
  ];
  

    

  return (
    <>
    <div className='mt-10'>
        <div className='flex  flex-col jusity-center items-center '>
            <h1 className='text-center text-[5vh] sm:text-[3vw] md:text-[3vw] font-medium '>Why Choose <span className='text-[#0C8699]'>Us</span></h1>
            <p className='text-center w-[70%]'>Because we don’t just take you to the mountains — we take you beyond.</p>
        </div>

        <div className="flex justify-center items-center p-10">
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  gap-5 w-full ">
    {data.map((item, index) => (
      <div key={index} className="bg-white p-4 rounded-md shadow-md flex flex-col items-center gap-3">
        <img src={item.img} alt="" />
        <h1 className="text-lg font-bold">{item.title}</h1>
        <p className="text-gray-700 text-sm">{item.desc}</p>
      </div>
    ))}
  </div>
</div>

    </div>
      
    </>
  )
}

export default WhyChooseus
