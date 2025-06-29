import React from 'react';
import Hero from '../../components/AboutComponents/Hero';
import AboutSection from '../../components/AboutComponents/About';
import Memory from '../../components/AboutComponents/Memory';
import WhyChooseus from '../../components/AboutComponents/WhyChooseus';
// import ClientSay from '../../components/AboutComponents/ClientSay';
import DiscoverTrips from '../../components/AboutComponents/OurPackages';
import Navbar from '../../components/GlobalComp/Navbar'

const Herodata = {
  img_Src: "/images/aboutimg/IMG_4421.JPG",
  heading: "About Us"
};

const Page = () => {
  return (
    <>
    <Navbar />
      <Hero data={Herodata} />
      <AboutSection />
      <DiscoverTrips />
      <Memory />
      <WhyChooseus />
      {/* <ClientSay /> */}
    </>
  );
};

export default Page;
