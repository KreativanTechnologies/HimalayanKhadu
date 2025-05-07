"use client";
import React, { useEffect } from "react";
import HeroSection from "../../components/HomePageComp/HeroSection";
import OurTrips from "../../components/HomePageComp/OurTrips";
import BookTour from "../../components/HomePageComp/BookTour";
import WhyHimalayan from "../../components/HomePageComp/WhyHimalayan";
// import ClientSay from "../../components/HomePageComp/ClientSay"
import Blogs from "../../components/HomePageComp/Blogs";
import { fetchAllPackages } from "../../store/client/tourPackage-slice";
import { useDispatch, useSelector } from "react-redux";

const page = () => {
  const { packageList } = useSelector((state) => state.clientTourPackages);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllPackages());
  }, [dispatch]);

  if (!packageList || Object.keys(packageList).length === 0) {
    return <p>Loading packages...</p>;
  }    

  return (
    <div className="w-full h-full flex flex-col ">
      <HeroSection />
      <OurTrips tripsData={packageList} />
      <BookTour />
      <WhyHimalayan />
      {/* <ClientSay/> */}
      <Blogs />
    </div>
  );
};

export default page;
