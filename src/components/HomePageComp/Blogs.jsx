import React from 'react'
import Image from "next/image"
import Link from "next/link"

const Blogs = () => {
  return (
    <main className="container mx-auto px-4 py-12 max-w-7xl bg-custom-gradient  ">
      <section className="mb-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl md:text-[40px] font-medium font-poppins">
            Our Latest <span className="text-[#0C8699]">Blogs</span>
          </h2>
          <Link
            href="/blogs"
            className="bg-[#0C8699] text-white px-4 py-2 text-[16px]  hover:bg-teal-600 transition-colors rounded-full"
          >
            View All Packages
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main blog posts - left side */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2].map((item) => (
              <div
                key={item}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative h-64">
                  <Image
                    src="/images/HomePage/latestBlogs.png"
                    alt="Adventure in mountains"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="flex justify-between text-sm text-gray-500 mb-2">
                    <span className='text-[#9A9A9A] text-[16px] font-Poppins'>08-11-2021</span>
                    <span className='text-[##64607D] text-[16px] font-Poppins'>10 min ago</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 font-poppins">Partiality on or continuing in particular principles</h3>
                  <p className="text-gray-700 text-[16px] font-poppins">
                    Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed
                    necessary.
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar blog posts - right side */}
          <div className="space-y-6  ">
            {[1, 2, 3].map((item) => (
              <div key={item} className="border-b pb-6 last:border-b-0 border-[#DEE1E6]">
                <div className="flex justify-between text-sm text-gray-500 mb-2 ">
                  <span>08-11-2021</span>
                  <span>10 min ago</span>
                </div>
                <h3 className="text-lg font-semibold font-poppins">Partiality on or continuing in particular principles</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Blogs