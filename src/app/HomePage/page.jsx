"use client";
import HeroSection from "../../components/HomePageComp/HeroSection";
import OurTrips from "../../components/HomePageComp/OurTrips";
import BookTour from "../../components/HomePageComp/BookTour";
import WhyHimalayan from "../../components/HomePageComp/WhyHimalayan";
import Blogs from "../../components/HomePageComp/Blogs";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllPackages } from "@/store/admin/tourPackage-slice";
import { useEffect } from "react";
import LoadingState from '../../components/GlobalComp/LoadingState'

const page = () => {
  const { packageList } = useSelector((state) => state.clientTourPackages);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllPackages());
  }, [dispatch]);

  if (!packageList || Object.keys(packageList).length === 0) {
    return <LoadingState/>;
  }

  return (
    <div className="w-full h-full flex flex-col ">
      <HeroSection />
      <OurTrips tripsData={packageList} />
      <BookTour />
      <WhyHimalayan />
      <Blogs />
    </div>
  );
};

export default page;
