"use client"
import { ChevronDown, Send } from "lucide-react"
import { useState } from "react";

export default function ContactForm() {
   const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        trip: "",
        location: "",
        message: "",
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // Add your form submission logic here
      };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden mt-10">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/images/aboutimg/getintouch.png')",
          filter: "brightness(0.8)",
        }}
      />

      {/* Content Container */}
      <div className="container mx-auto px-4 py-10 z-10 flex flex-col lg:flex-row  justify-between gap-8">
        {/* Left Column - Query Text */}
        <div className="w-full lg:w-1/3 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Have any Query?</h2>
          <p className="mb-8 opacity-90">
            Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>

          {/* Paper Airplane with Path */}
          <div className="relative h-32 w-full lg:block hidden">
            <div className="absolute top-0 left-0">
             <img src="/images/aboutimg/arrow.png" alt="" />
            </div>
            
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div className="w-full lg:w-7/12 bg-white rounded-lg shadow-xl p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-teal-600">Get in Touch!</h2>

             <form onSubmit={handleSubmit} className='space-y-6'>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                          <div>
                            <input
                              type='text'
                              name='firstName'
                              placeholder='Your Name'
                              value={formData.firstName}
                              onChange={handleChange}
                              className='w-full px-4 py-3 border rounded-full border-[#0099cc] border-opacity-30 focus:outline-none focus:ring-1 focus:ring-[#0099cc]'
                              required
                            />
                          </div>
                          <div>
                            <input
                              type='text'
                              name='lastName'
                              placeholder='Last Name'
                              value={formData.lastName}
                              onChange={handleChange}
                              className='w-full px-4 py-3 border border-[#0099cc] border-opacity-30 rounded-full focus:outline-none focus:ring-1 focus:ring-[#0099cc]'
                              required
                            />
                          </div>
                        </div>
          
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                          <div>
                            <input
                              type='email'
                              name='email'
                              placeholder='Email'
                              value={formData.email}
                              onChange={handleChange}
                              className='w-full px-4 py-3 border border-[#0099cc] border-opacity-30 rounded-full focus:outline-none focus:ring-1 focus:ring-[#0099cc]'
                              required
                            />
                          </div>
                          <div>
                            <input
                              type='tel'
                              name='phone'
                              placeholder='Phone No'
                              value={formData.phone}
                              onChange={handleChange}
                              className='w-full px-4 py-3 border border-[#0099cc] border-opacity-30 rounded-full focus:outline-none focus:ring-1 focus:ring-[#0099cc]'
                              required
                            />
                          </div>
                        </div>
          
                        <div className='relative'>
                          <select
                            name='trip'
                            value={formData.trip}
                            onChange={handleChange}
                            className='w-full px-4 py-3 border border-[#0099cc] border-opacity-30 rounded-full focus:outline-none focus:ring-1 focus:ring-[#0099cc] appearance-none'
                            required
                          >
                            <option value='' disabled>
                              Select Your Trip
                            </option>
                            <option value='adventure'>Adventure Trip</option>
                            <option value='hiking'>Hiking Trip</option>
                            <option value='camping'>Camping Trip</option>
                            <option value='safari'>Safari Trip</option>
                          </select>
                          <ChevronDown
                            className='absolute right-4 top-1/2 -translate-y-1/2 text-[#0099cc]'
                            size={20}
                          />
                        </div>
          
                        <div className='relative'>
                          <select
                            name='location'
                            value={formData.location}
                            onChange={handleChange}
                            className='w-full px-4 py-3 border border-[#0099cc] border-opacity-30 rounded-full focus:outline-none focus:ring-1 focus:ring-[#0099cc] appearance-none'
                            required
                          >
                            <option value='' disabled>
                              Select a Location
                            </option>
                            <option value='mountains'>Mountains</option>
                            <option value='beach'>Beach</option>
                            <option value='forest'>Forest</option>
                            <option value='desert'>Desert</option>
                          </select>
                          <ChevronDown
                            className='absolute right-4 top-1/2 -translate-y-1/2 text-[#0099cc]'
                            size={20}
                          />
                        </div>
          
                        <div>
                          <textarea
                            name='message'
                            placeholder='Message'
                            value={formData.message}
                            onChange={handleChange}
                            rows={5}
                            className='w-full px-4 py-3 border border-[#0099cc] border-opacity-30 rounded-3xl focus:outline-none focus:ring-1 focus:ring-[#0099cc]'
                            required
                          ></textarea>
                        </div>
          
                        <div className='flex justify-center'>
                          <button
                            type='submit'
                            className='bg-[#0099cc] text-white px-6 py-2 rounded-full hover:bg-[#007aa3] transition-colors'
                          >
                            Send Message
                          </button>
                        </div>
                      </form>
        </div>
      </div>
    </div>
  )
}

