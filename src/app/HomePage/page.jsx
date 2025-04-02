import React from 'react'
import HeroSection from "../../components/HomePageComp/HeroSection"
import OurTrips from "../../components/HomePageComp/OurTrips"
import BookTour from "../../components/HomePageComp/BookTour"
import WhyHimalayan from "../../components/HomePageComp/WhyHimalayan"
import ClientSay from "../../components/HomePageComp/ClientSay"
import Blogs from "../../components/HomePageComp/Blogs"

const page = () => {
  return (
    <div className='w-full h-full'>
      <HeroSection/>
      <OurTrips/>
      <BookTour/>
      <WhyHimalayan/>
      <ClientSay/>
      <Blogs/>
    </div>
  )
}

export default page