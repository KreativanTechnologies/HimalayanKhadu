

"use client"

import Image from "next/image"
import { useState,useEffect } from "react"

const ClientSay = () => {
  const [activeSlide, setActiveSlide] = useState(4)

  const testimonials = [
      {
        id: 1,
        text: "The Kashmir Great Lakes Trek was nothing short of surreal! Every turn revealed a new postcard view. Our guide knew the terrain inside-out, and the campsites were just stunning. Himalayan Khadu made this trek super safe and memorable.",
        author: "Neha Sinha",
        trip: "Kashmir Great Lakes Trek",
        rating: 5,
      },
      {
        id: 2,
        text: "The Chandranahan Lake Trek was a dream! Snow patches, alpine meadows, and the crystal-clear lake were simply magical. Our trek leader was supportive and the food was surprisingly delicious at that altitude. Loved every second with Himalayan Khadu!",
        author: "Ravi Jangra",
        trip: "Chandranahan Lake Trek",
        rating: 5,
      },
      {
        id: 3,
        text: "Tarsar Marsar Lake Trek stole my heart. The twin lakes are a hidden paradise. I’ve done many treks, but this one had something special — peace, beauty, and great vibes. Hats off to Himalayan Khadu for organizing such a smooth and safe journey.",
        author: "Meghna Kapoor",
        trip: "Tarsar Marsar Lake Trek",
        rating: 5,
      },
      {
        id: 4,
        text: "The Valley of Flowers Trek is every nature lover’s paradise! I felt like I was walking through a rainbow of wildflowers. The team at Himalayan Khadu was super helpful and ensured everyone kept pace without pressure. Highly recommended!",
        author: "Tanmay Srivastava",
        trip: "Valley of Flowers Trek",
        rating: 5,
      },
      {
        id: 5,
        text: "Buran Ghati Trek tested my limits in the best way! The rapelling down the snow wall was thrilling and the views were out of this world. If you’re into raw adventure, this is the one. Huge thanks to Himalayan Khadu for the insane experience!",
        author: "Kriti Deswal",
        trip: "Buran Ghati Trek",
        rating: 5,
      },
      {
        id: 6,
        text: "Kedarkantha Trek with Himalayan Khadu was the perfect intro to winter trekking. The sunrise at the summit literally made me tear up. The team made sure beginners like me felt confident all the way. 10/10 experience!",
        author: "Arjun Pathak",
        trip: "Kedarkantha Trek",
        rating: 5,
      },
      {
        id: 7,
        text: "Har Ki Dun Trek was peaceful, scenic, and so fulfilling. I felt like I was walking through a living storybook. Himalayan Khadu’s team was informative and warm, and the route was well planned with great accommodation and meals.",
        author: "Simran Paul",
        trip: "Har Ki Dun Trek",
        rating: 5,
      },
      {
        id: 8,
        text: "Sar Pass Trek blew my mind! The snow slide was the highlight of the trip. Great company, stunning views, and a super enthusiastic trek leader made this an adventure to remember. Can’t wait to join another trek with Himalayan Khadu!",
        author: "Rohit Meena",
        trip: "Sar Pass Trek",
        rating: 5,
      },    
    ]
 
  const slidesPerView = 2
  const totalSlides = Math.ceil(testimonials.length / slidesPerView)

  // Handle dot click
  const handleDotClick = (index) => {
    setActiveSlide(index)
  }

  // Get current visible testimonials
  const getVisibleTestimonials = () => {
    const startIndex = (activeSlide % totalSlides) * slidesPerView
    return testimonials.slice(startIndex, startIndex + slidesPerView)
  }

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % 4)
    }, 5000)
    return () => clearInterval(interval)
  }, [totalSlides])

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-[40px] md:text-[40px] font-medium font-poppins">
          What Our Clients Say <span className="text-teal-500">About Us</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {getVisibleTestimonials().map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 transition-all duration-300"
          >
            <div className="flex justify-between items-start mb-4">
              <span className="text-6xl text-blue-100 font-serif leading-none">&ldquo;</span>
              <div className="flex text-orange-400">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>

            <p className="text-gray-800 mb-6">{testimonial.text}</p>

            <div className="flex items-center">
              <div className="relative w-12 h-12 mr-4 rounded-full overflow-hidden bg-teal-50 border-2 border-teal-100">
                <Image
                  src="/placeholder.svg?height=48&width=48"
                  alt={testimonial.author}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">{testimonial.author}</h4>
                <p className="text-sm text-gray-600">{testimonial.trip}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8 space-x-2">
        {[0, 1, 2, 3].map((index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              activeSlide % 4 === index ? "bg-teal-500 w-3" : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )

}

export default ClientSay