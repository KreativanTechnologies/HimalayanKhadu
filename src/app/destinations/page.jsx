import React from 'react'
import DestinationHero from '../../components/DestinationsComp/DestinationHero';
import OurTrips from "../../components/HomePageComp/OurTrips";
import Section3 from '../../components/DestinationsComp/Section3';
import OurDestination from '../../components/DestinationsComp/OurDestination';
import ClientSay from "../../components/HomePageComp/ClientSay";
import DestinationSlider from '../../components/DestinationsComp/DestinationSlider';

const DestinationPage = () => {
  return (
    <div>
      <DestinationHero />
      <OurTrips />
      <Section3 />
      <OurDestination />
      <DestinationSlider/>
      <ClientSay />
    </div>
  );
}

export default DestinationPage;