"use client"
import React, { useEffect } from 'react'
import DestinationHero from '../../components/DestinationsComp/DestinationHero';
import OurTrips from "../../components/HomePageComp/OurTrips";
import Section3 from '../../components/DestinationsComp/Section3';
import OurDestination from '../../components/DestinationsComp/OurDestination';
import ClientSay from "../../components/HomePageComp/ClientSay";
import DestinationSlider from '../../components/DestinationsComp/DestinationSlider';
import { useDispatch, useSelector } from 'react-redux';
import {fetchAllPackages} from '../../store/client/tourPackage-slice'
import LoadingState from '../../components/GlobalComp/LoadingState'

const DestinationPage = () => {
  const { packageList } = useSelector((state) => state.clientTourPackages);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllPackages());
  }, [dispatch]);

  if (!packageList || Object.keys(packageList).length === 0) {
    return <LoadingState/>;
  }

  return (
    <div>
      <DestinationHero />
      <OurTrips tripsData={packageList} />
      <Section3 />
      <OurDestination />
      <DestinationSlider/>
      <ClientSay />
    </div>
  );
}

export default DestinationPage;