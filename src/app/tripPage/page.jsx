import React from 'react'
import Hero from '../../components/tripPageComponents/Hero'
import Section2 from '../../components/tripPageComponents/section2'
import Section3 from '../../components/tripPageComponents/Section3'
import DestinationSlider from '../../components/DestinationsComp/DestinationSlider'
import DiscoverTrips from '../../components/AboutComponents/OurPackages'
import ClientSay from '../../components/HomePageComp/ClientSay'

const page = () => {
  return (
    <>
      
    <Hero/>
    <Section2/>
    <Section3/>
    < DestinationSlider />
    < ClientSay />
    < DiscoverTrips  />
    </>
  )
}

export default page
