import React from 'react'
import Image3 from "../../assets/spiritualTours/img3.png";
import Image from 'next/image';
import { Star } from "lucide-react";


const Section6 = () => {

     const tours = [
        {
          id: 1,
          name: "Chandra Nahan Lake Trek",
          price: "₹12,500",
          reviews: 2,
          rating: 5,
          image: Image3,
        },
        {
          id: 2,
          name: "Chandra Nahan Lake Trek",
          price: "₹12,500",
          reviews: 2,
          rating: 5,
          image: Image3,
        },
        {
          id: 3,
          name: "Chandra Nahan Lake Trek",
          price: "₹12,500",
          reviews: 2,
          rating: 5,
          image: Image3,
        },
      ]; 

  return (
  <>
    <div className='responsivewidth  font-poppins mt-10'>
        <h1 className='text-center text-[4vh] md:text-[5vh] font-bold'>Our Yatra <span className='text-[#0C8699]'>Packages</span></h1>
     <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-10'>
            {tours.map((tour) => (
              <div
                key={tour.id}
                className='flex items-start space-x-4 p-4 rounded-lg'
              >
                <div className='flex-shrink-0'>
                  <Image
                    src={tour.image || Image3}
                    alt={tour.name}
                    className='w-32 h-24 rounded-lg object-cover'
                  />
                </div>
                <div className='flex flex-col'>
                  <h3 className='font-semibold text-lg'>{tour.name}</h3>
                  <div className='flex items-center mt-1'>
                    <span className='text-gray-600 text-sm'>Starting From:</span>
                    <span className='text-teal-500 font-semibold ml-1'>
                      {tour.price}
                    </span>
                  </div>
                  <div className='flex items-center mt-1'>
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={`${
                          i < tour.rating
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                    <span className='text-gray-500 text-sm ml-2'>
                      ({tour.reviews} Reviews)
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
      
    </div>
  </>
  )
}

export default Section6
