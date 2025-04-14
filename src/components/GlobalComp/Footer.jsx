import React from "react";
import {
  Dribbble,
  Facebook,
  Github,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
const Footer = () => {
  return (
    <footer className='bg-black'>
      <div className='responsivewidth space-y-8 py-16 lg:space-y-16'>
        <div className='grid grid-cols-1 gap-8 lg:grid-cols-3'>
          <div>
            <div className='text-teal-600'>
              <img src='/assets/logo1.png' className=' size-[152px]' alt='logo' width={23} height={12}/>
            </div>

            <p className='mt-4 max-w-xs line-clamp-4 justify-start text-white text-base font-light font-poppins'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s...
            </p>
          </div>

          <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-3'>
            <div>
              <p className='text-neutral-50 text-base font-semibold font-poppins'>
                Quick Links
              </p>

              <ul className='mt-6 space-y-4 text-sm'>
                <li>
                  <a
                    href='/'
                    className='text-neutral-50 text-base font-normal font-poppins'
                  >
                    {" "}
                    Home
                  </a>
                </li>

                <li>
                  <a
                    href='#'
                    className='text-neutral-50 text-base font-normal font-poppins'
                  >
                    {" "}
                    Destination
                  </a>
                </li>

                <li>
                  <a
                    href='#'
                    className='text-neutral-50 text-base font-normal font-poppins'
                  >
                    {" "}
                    About
                  </a>
                </li>

                <li>
                  <a
                    href='#'
                    className='text-neutral-50 text-base font-normal font-poppins'
                  >
                    {" "}
                    Packages
                  </a>
                </li>

                <li>
                  <a
                    href='#'
                    className='text-neutral-50 text-base font-normal font-poppins'
                  >
                    {" "}
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className='text-neutral-50 text-base font-semibold font-poppins'>
                Contact Information
              </p>

              <ul className='mt-6 space-y-4 text-sm'>
                <li>
                  <a
                    href='#'
                    className='text-neutral-50 flex gap-1 text-base font-normal font-poppins'
                  >
                    {" "}
                    <span>
                      <Mail />
                    </span>
                    <span className='break-all'>
                      {" "}
                      Himlyankhadu@gmail.com
                      </span>
                  </a>
                </li>

                <li>
                  <a
                    href='#'
                    className='text-neutral-50 flex gap-1 text-base font-normal font-poppins'
                  >
                    <span>
                      <Phone />
                    </span>
                    <span className='break-all'>  7876750072
                    </span>{" "}
                  </a>
                </li>

                <li>
                  <a
                    href='#'
                    className='text-neutral-50 flex gap-1 text-base font-normal font-poppins'
                  >
                    {" "}
                    <span>
                      <MapPin />
                    </span>
                    <span className='break-all'>
                      {" "}
                      Himlayan Khadu 16 Miles, Shimla-Mandi National Highway, Ghandal, District Shimla, Himachal Pradesh-171014.
                    </span>{" "}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className='text-neutral-50 text-base font-semibold font-poppins'>
                Newsletters
              </p>

              <ul className='mt-6 space-y-4 text-sm'>
                <li>
                  <p className='text-neutral-50 text-base font-light font-poppins'>
                    Be the first one to know all about the Exciting Offers,
                    Travel Updates and more.
                  </p>
                  {/* <div className='w-[449px]  py-3  outline outline-offset-[-1px] outline-white inline-flex justify-start items-center gap-2.5'> */}
                  <input
                    type='text'
                    className='justify-start py-3 my-4 px-[30px] border w-full rounded-[50px] text-white text-opacity-50 text-xs font-light font-poppins leading-tight tracking-tight'
                    placeholder='Enter your email adress'
                  />

                  {/* </div> */}
                  {/* </div> */}
                  <div className='px-[30px] py-3 bg-[#0c8699] rounded-[35px] inline-flex justify-center items-center gap-2.5'>
                    <div className='justify-start text-white text-base font-medium font-poppins'>
                      Subscribe
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='flex pt-8 justify-between items-center border-t border-white'>
          <p className='justify-start text-neutral-50 text-xl font-normal font-lato leading-loose tracking-tigh'>
            &copy; Copyright 2025. All Rights Reserved.
          </p>

          {/* icons */}
          <ul className='flex gap-6'>
            <li>
              <a
                href='#'
                rel='noreferrer'
                target='_blank'
                className='text-neutral-50 text-base font-normal font-poppins'
              >
                <span className='sr-only'>Facebook</span>
                <Facebook />
              </a>
            </li>

            <li>
              <a
                href='#'
                rel='noreferrer'
                target='_blank'
                className='text-neutral-50 text-base font-normal font-poppins'
              >
                <span className='sr-only'>Instagram</span>

                <Instagram />
              </a>
            </li>

            <li>
              <a
                href='#'
                rel='noreferrer'
                target='_blank'
                className='text-neutral-50 text-base font-normal font-poppins'
              >
                <span className='sr-only'>Twitter</span>

                <Twitter />
              </a>
            </li>

            <li>
              <a
                href='#'
                rel='noreferrer'
                target='_blank'
                className='text-neutral-50 text-base font-normal font-poppins'
              >
                <span className='sr-only'>GitHub</span>

                <Github />
              </a>
            </li>

            <li>
              <a
                href='#'
                rel='noreferrer'
                target='_blank'
                className='text-neutral-50 text-base font-normal font-poppins'
              >
                <span className='sr-only'>Dribbble</span>

                <Dribbble />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
