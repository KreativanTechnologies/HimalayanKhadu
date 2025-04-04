import { div } from 'framer-motion/client'
import React from 'react'

const WhyChooseus = () => {

    const data =[
        {
            img:'/images/aboutimg/best-price.png',
            title: 'Best Price Guarantee',
            desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
        },
        {
            img:'/images/aboutimg/experienced.png',

            
            title: 'Best Price Guaranteee',
            desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
        },
        {
            img:'/images/aboutimg/customer-service.png',

            title: '24/7 Customer Care',
            desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
        },
        {
            img:'/images/aboutimg/travel-bag.png',

            title: 'Customize Packages',
            desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
        },
    ]

    

  return (
    <>
    <div className='mt-10 responsivewidth'>
        <div className='flex  flex-col jusity-center items-center '>
            <h1 className='text-center text-[5vh] sm:text-[3vw] md:text-[3vw] font-medium '>Why Choose <span className='text-[#0C8699]'>Us</span></h1>
            <p className='text-center w-[70%]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
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
