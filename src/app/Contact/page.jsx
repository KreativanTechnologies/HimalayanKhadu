"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Contact() {
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
    <div className='relative w-full h-screen'>
      {/* Google Maps Background */}
      <div className='absolute inset-0 z-0'>
        <Image
          src='/placeholder.svg?height=800&width=1920'
          alt='Google Maps Background'
          fill
          className='object-cover'
        />
      </div>

      {/* Content Container */}
      <div className='relative z-10 max-w-6xl mx-auto pt-10 px-4'>
        {/* Header */}
        <h1 className='text-center text-3xl font-bold mb-10'>
          Your next <span className='text-[#0099cc]'>Adventure</span> is just a
          Call away!
        </h1>

        {/* Contact Info Cards */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-10'>
          <div className='bg-white p-6 rounded-lg shadow-sm'>
            <div className='flex items-start gap-3'>
              <MapPin className='text-[#0099cc] mt-1' size={24} />
              <div>
                <h3 className='font-bold text-lg mb-2'>Visit us</h3>
                <p className='text-gray-600 text-sm'>
                  Lorem ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
          </div>

          <div className='bg-white p-6 rounded-lg shadow-sm'>
            <div className='flex items-start gap-3'>
              <Phone className='text-[#0099cc] mt-1' size={24} />
              <div>
                <h3 className='font-bold text-lg mb-2'>Call us at</h3>
                <p className='text-gray-600'>+91 9876543210</p>
              </div>
            </div>
          </div>

          <div className='bg-white p-6 rounded-lg shadow-sm'>
            <div className='flex items-start gap-3'>
              <Mail className='text-[#0099cc] mt-1' size={24} />
              <div>
                <h3 className='font-bold text-lg mb-2'>Email us</h3>
                <p className='text-gray-600'>abc@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Booking Form */}
        <div className='max-w-4xl mx-auto bg-white p-8 rounded-lg border-2 border-[#0099cc]'>
          <form onSubmit={handleSubmit} className='space-y-6'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div>
                <input
                  type='text'
                  name='firstName'
                  placeholder='Your Name'
                  value={formData.firstName}
                  onChange={handleChange}
                  className='w-full px-4 py-3 border border-[#0099cc] border-opacity-30 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0099cc]'
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
                  className='w-full px-4 py-3 border border-[#0099cc] border-opacity-30 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0099cc]'
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
                  className='w-full px-4 py-3 border border-[#0099cc] border-opacity-30 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0099cc]'
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
                  className='w-full px-4 py-3 border border-[#0099cc] border-opacity-30 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0099cc]'
                  required
                />
              </div>
            </div>

            <div className='relative'>
              <select
                name='trip'
                value={formData.trip}
                onChange={handleChange}
                className='w-full px-4 py-3 border border-[#0099cc] border-opacity-30 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0099cc] appearance-none'
                required
              >
                <option value='' disabled selected>
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
                className='w-full px-4 py-3 border border-[#0099cc] border-opacity-30 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0099cc] appearance-none'
                required
              >
                <option value='' disabled selected>
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
                className='w-full px-4 py-3 border border-[#0099cc] border-opacity-30 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0099cc]'
                required
              ></textarea>
            </div>

            <div className='flex justify-center'>
              <button
                type='submit'
                className='bg-[#0099cc] text-white px-6 py-2 rounded-md hover:bg-[#007aa3] transition-colors'
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
