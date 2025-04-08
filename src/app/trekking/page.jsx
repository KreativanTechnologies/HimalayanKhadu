import React from 'react'
import TrekkingHero from '../../components/TrekkingComp/TrekkingHero'
import DestinationSlider from "../../components/DestinationsComp/DestinationSlider";
import Nexttrip from "../../components/CyclingComp/Nexttrip";
import Recommended from "../../components/CyclingComp/Recommended";
import ClientSay from "../../components/HomePageComp/ClientSay";
import Blogs from '../../components/HomePageComp/Blogs';

const TrekkingPage = () => {
  return (
      <>
          <TrekkingHero />
          <Nexttrip />
          <Recommended/>
          <DestinationSlider/>
          <ClientSay />
           <Blogs/>
      
      
      
      
      </>
  )
}

export default TrekkingPage