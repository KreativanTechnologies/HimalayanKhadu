"use client";
import logoIcon from "../../assets/logo.png";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, Search } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='bg-white shadow-md py-4'>
      <div className='flex responsivewidth justify-between items-center'>
        {/* Logo */}
        <div className='flex items-center'>
          <Image src={logoIcon} alt='Logo' className='size-[100px]' />
        </div>

        {/* Desktop Menu */}
        <div className='hidden lg:flex space-x-8 text-gray-700'>
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className='relative text-[#6a6a6a] text-base font-normal font-poppins after:block after:h-[2px] after:w-full after:bg-teal-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300'
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Right Section */}
        <div className='flex items-center space-x-4'>
          <Search className='w-5 h-5 text-gray-600 cursor-pointer' />
          <button className='bg-teal-600 text-white px-4 py-2 rounded-full hover:bg-teal-700 transition-all'>
            Login
          </button>
          {/* Mobile Menu Button */}
          <button
            className='lg:hidden text-gray-700'
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } lg:hidden flex flex-col space-y-4 mt-4 overflow-hidden transition-all duration-300`}
      >
        {["Home", "about", "Destinations", "Package", "Blog", "Contact Us"].map(
          (item) => (
            <a
              key={item}
              href='/'
              className='block py-2 px-4 text-[#6a6a6a] text-base font-normal font-poppins'
            >
              {item}
            </a>
          )
        )}
      </div>
    </nav>
  );
}

const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Destinations",
    href: "/destinations",
  },
  {
    name: "Package",
    href: "/Package",
  },
  {
    name: "Blog",
    href: "/Blog",
  },
  {
    name: "Contact",
    href: "/Contact",
  },
];
