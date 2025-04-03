'use client'
import { ChevronDown } from 'lucide-react';
import React, { useState } from 'react'

const ContactUs = () => {

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
    <>

<div className='max-w-4xl mx-auto bg-white p-8 rounded-lg border-2 border-gray-100 relative'>
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
      
    </>
  )
}

export default ContactUs
