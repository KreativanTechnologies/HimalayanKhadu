import Image from "next/image";
import Link from "next/link";
import CyclingImage from "../../assets/cycling.png";
import HimalyaImage from "../../assets/himalya.png";
import HeartNakoImage from "../../assets/heartNako.png";
export default function Blog() {
  return (
    <div className='py-8 bg-gray-50'>
      {/* Header Section */}
      <div className='flex responsivewidth flex-col md:flex-row justify-between gap-8 mb-12'>
        <div className='w-full md:w-1/2 flex justify-center items-start flex-col'>
          <h1 className=' text-3xl md:text-5xl lg:text-6xl font-bold font-poppins mb-4'>
            <span className=' text-[#0c8699] '>Blog</span> and Article
          </h1>
          <p className='mb-4 justify-start text-black text-xl font-normal font-Poppins'>
            Lorem ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <div className='inline-block rounded-full overflow-hidden'>
            <Image
              src={HeartNakoImage}
              className='w-[100px] sm:w-[150px] md:w-[180px] lg:w-[216px] lg:h-[92px] rounded-[54px]'
            />
          </div>
        </div>

        {/* Featured Articles */}
        <div className='w-full md:w-1/2 max-w-lg space-y-4'>
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className='flex border-b-[2px] border-gray-200 pb-2 gap-2 lg:gap-4 items-center'
            >
              <div className='w-[163px] relative flex-shrink-0'>
                <Image
                  src={CyclingImage}
                  alt='Mountain landscape'
                  className='w-full h-full rounded-md object-cover '
                />
              </div>
              <div className='flex-1'>
                <div className='flex justify-between text-base font-normal text -[#9a9a9a] font-poppins leading-[30px]'>
                  <span>01-11-2023</span>
                  <span>5 min ago</span>
                </div>
                <h3 className='justify-start text-black text-lg lg:text-xl font-semibold font-poppins leading-[30px]'>
                  Partiality on or continuing in particular principles
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Blog Grid */}
      <div className='grid responsivewidth mt-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8'>
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className='bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow'
          >
            <div className='relative'>
              <Image
                src={HimalyaImage}
                alt='Mountain landscape with people'
                width={300}
                height={200}
                className='w-full h-48 object-cover'
              />
              <div className='absolute bottom-3 -left-0.5 bg-teal-600 text-white text-xs font-bold px-2 py-1 rounded'>
                <div className='text-center'>
                  <span>04</span>
                  <div className='text-[10px]'>MAR</div>
                </div>
              </div>
            </div>
            <div className='p-4'>
              <h3 className='justify-start text-black text-xl font-semibold font-poppins leading-[30px] mb-2'>
                Partiality on or continuing in particular principles
              </h3>
              <p className='text-gray-600  justify-start text-Color-2 text-base font-normal font-poppins leading-[30px]'>
                Blessing welcomed ladyship she met humoured sir breeding her.
                Six curiosity day assurance bed necessary.
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className='flex justify-center'>
        <Link
          href='#'
          className='bg-teal-600 text-white px-6 py-2 rounded-full hover:bg-teal-700 transition-colors'
        >
          View All Blogs
        </Link>
      </div>
    </div>
  );
}
