import React from 'react'
import Hero from '../../components/AboutComponents/Hero'
import AboutSection from '../../components/AboutComponents/About'
import Memory from '../../components/AboutComponents/Memory'
import WhyChooseus from '../../components/AboutComponents/WhyChooseus'
import ClientSay from '../../components/AboutComponents/ClientSay'
import DiscoverTrips from '../../components/AboutComponents/OurPackagexplore'

const Herodata = {
  img_Src : "/images/aboutimg/hero.png",
  heading : "About Us"
}

const page = () => {
  return (
    <>
    <Hero data={Herodata}/>
    <AboutSection/>
    <DiscoverTrips/>
    <Memory/>
    <WhyChooseus/>
    <ClientSay/>
    </>
  )
}

export default page
