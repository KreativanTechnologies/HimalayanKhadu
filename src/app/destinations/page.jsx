import React from 'react'
import DestinationHero from '../../components/DestinationsComp/DestinationHero';
import OurTrips from "../../components/HomePageComp/OurTrips";
import Section3 from '../../components/DestinationsComp/Section3';
import OurDestination from '../../components/DestinationsComp/OurDestination';

const DestinationPage = () => {
  return (
    <div>
      <DestinationHero />
      <OurTrips />
      <Section3 />
      <OurDestination/>
    </div>
  );
}

export default DestinationPage;