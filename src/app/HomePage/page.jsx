import React from 'react'
import HeroSection from "../../components/HomePageComp/HeroSection"
import OurTrips from "../../components/HomePageComp/OurTrips"
import BookTour from "../../components/HomePageComp/BookTour"
import ClientSay from "../../components/HomePageComp/ClientSay"
import Blogs from "../../components/HomePageComp/Blogs"

const page = () => {
  return (
    <div>
      <HeroSection/>
      <OurTrips/>
      <BookTour/>
      <ClientSay/>
      <Blogs/>
    </div>
  )
}

export default page