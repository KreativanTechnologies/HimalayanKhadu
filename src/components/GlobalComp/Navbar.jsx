"use client";
import { useState } from "react";
import { Menu, X, Search, ChevronDown } from "lucide-react";
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPackageOpen, setIsPackageOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const router = useRouter();

  return (
    <nav className='bg-white shadow-md py-4'>
      <div className='flex responsivewidth justify-between items-center'>
        {/* Logo */}
        <div className='flex items-center'>
          <img src='/assets/logo1.png' alt='Logo' className='size-[100px]' width={12} height={12} />
        </div>

        {/* Desktop Menu */}
        <div className='hidden lg:flex space-x-8 text-gray-700'>
          {navLinks.map((item) => {
            if (item.name === "Trips/Tours") {
              return (
                <div
                  key={item.name}
                  className='relative group'
                  onMouseEnter={() => setIsPackageOpen(true)}
                  onMouseLeave={() => setIsPackageOpen(false)}
                >
                  <div className='flex items-center gap-1 cursor-pointer text-[#6a6a6a] text-base font-normal font-poppins relative after:block after:h-[2px] after:w-full after:bg-teal-600 after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-300'>
                    {item.name}
                    {/* <ChevronDown className='w-4 h-4 mt-0.5' /> */}
                  </div>
                  {isPackageOpen && (
                    
                    <div className='absolute left-0 top-full  bg-white shadow-md rounded-md w-48 z-50 py-2'>
                      {[
                        { name: "Spiritual Trips", href: "/spiritualTours" },
                        { name: "Student Tours", href: "/StudentTours" },
                        { name: "Bike Tours", href: "/biketour" },
                        { name: "Corporate Tours", href: "/corporateTour" },
                      ].map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              );
            } else if (item.name === "More") {
              return (
                <div
                  key={item.name}
                  className='relative group'
                  onMouseEnter={() => setIsMoreOpen(true)}
                  onMouseLeave={() => setIsMoreOpen(false)}
                >
                  <div className='flex items-center gap-1 cursor-pointer text-[#6a6a6a] text-base font-normal font-poppins relative after:block after:h-[2px] after:w-full after:bg-teal-600 after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-300'>
                    {item.name}
                    {/* <ChevronDown className='w-4 h-4 mt-0.5' /> */}
                  </div>
                  {isMoreOpen && (
                    <div className='absolute left-0 top-full bg-white shadow-md rounded-md w-48 z-50 py-2'>
                      {[
                        { name: "Trekking", href: "/trekking" },
                        { name: "Cycling", href: "/Cycling" },
                      ].map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              );
            } else {
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className='relative text-[#6a6a6a] text-base font-normal font-poppins after:block after:h-[2px] after:w-full after:bg-teal-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300'
                >
                  {item.name}
                </a>
              );
            }
          })}
        </div>

        {/* Right Section */}
        <div className='flex items-center space-x-4'>
          <Search className='w-5 h-5 text-gray-600 cursor-pointer' />
          <button
            className='bg-teal-600 text-white px-4 py-2 rounded-full hover:bg-teal-700 transition-all'
            onClick={() => router.push('/Login')}
          >
            Login
          </button>
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
  } lg:hidden flex flex-col space-y-2 mt-4 overflow-hidden transition-all duration-300`}
>
  {navLinks.map((item) => {
    if (item.name === "Trips/Tours") {
      return (
        <div key={item.name} className="flex flex-col">
          <button
            onClick={() => setIsPackageOpen(!isPackageOpen)}
            className="flex justify-between items-center px-4 py-2 text-[#6a6a6a] text-base font-normal font-poppins w-full"
          >
            {item.name}
            <ChevronDown className={`w-4 h-4 transition-transform ${isPackageOpen ? "rotate-180" : ""}`} />
          </button>
          {isPackageOpen && (
            <div className="ml-4 flex flex-col">
              {[
                { name: "Spiritual Trips", href: "/spiritualTours" },
                { name: "Student Tours", href: "/StudentTours" },
                { name: "Bike Tours", href: "/biketour" },
                { name: "Corporate Tours", href: "/corporateTour" },
              ].map((subItem) => (
                <a
                  key={subItem.name}
                  href={subItem.href}
                  className="py-1 px-4 text-sm text-gray-700 hover:bg-gray-100"
                >
                  {subItem.name}
                </a>
              ))}
            </div>
          )}
        </div>
      );
    } else if (item.name === "More") {
      return (
        <div key={item.name} className="flex flex-col">
          <button
            onClick={() => setIsMoreOpen(!isMoreOpen)}
            className="flex justify-between items-center px-4 py-2 text-[#6a6a6a] text-base font-normal font-poppins w-full"
          >
            {item.name}
            <ChevronDown className={`w-4 h-4 transition-transform ${isMoreOpen ? "rotate-180" : ""}`} />
          </button>
          {isMoreOpen && (
            <div className="ml-4 flex flex-col">
              {[
                { name: "Trekking", href: "/trekking" },
                { name: "Cycling", href: "/Cycling" },
              ].map((subItem) => (
                <a
                  key={subItem.name}
                  href={subItem.href}
                  className="py-1 px-4 text-sm text-gray-700 hover:bg-gray-100"
                >
                  {subItem.name}
                </a>
              ))}
            </div>
          )}
        </div>
      );
    } else {
      return (
        <a
          key={item.name}
          href={item.href}
          className="block py-2 px-4 text-[#6a6a6a] text-base font-normal font-poppins"
        >
          {item.name}
        </a>
      );
    }
  })}
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
    name: "Trips/Tours",
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
  {
    name: "More",
    href: "",
  },
];
