import React from 'react'


import ClientSay from '../../components/AboutComponents/ClientSay';
import Recommended from "../../components/CyclingComp/Recommended";
import Blogs from '../../components/HomePageComp/Blogs';
import Gallery from '../../components/CyclingComp/Gallery';
import WhyHimalayan from '../../components/HomePageComp/WhyHimalayan';
import FleetPage from '../../components/TransportComp/FleetPage';

const Page = () => {
  return (
    <div>
      
        <FleetPage />
         <Recommended/>
         <Gallery />
         <ClientSay/>
         <WhyHimalayan/>
         <Blogs/>
    </div>
  )
}

export default Page