import React from 'react'
import HeroSection from "../../components/HomePageComp/HeroSection"
import OurTrips from "../../components/HomePageComp/OurTrips"
import BookTour from "../../components/HomePageComp/BookTour"
import WhyHimalayan from "../../components/HomePageComp/WhyHimalayan"
// import ClientSay from "../../components/HomePageComp/ClientSay"
import Blogs from "../../components/HomePageComp/Blogs"

const page = () => {

  const tripsData = {
    "Top Destinations": [
      {
        title: "Chandigarh To Spiti Valley Tour",
        duration: "8 Nights, 9 Days",
        price: "₹ 16,950",
        badge: "Best Seller",
        image: "images/HomePage/IMG_0136.webp",
      },
      {
        title: "Manali To Chandratal Tour",
        duration: "4 Nights, 5 Days",
        price: "₹ 8,950",
        badge: "20% OFF",
        image: "images/HomePage/IMG_0175.webp",
      },
      {
        title: "Shimla To Kalpa Tour",
        duration: "6 Nights, 7 Days",
        price: "₹ 14,499",
        badge: "New",
        image: "images/HomePage/IMG_0214.webp",
      },
      {
        title: "Chandigarh To Shimla Tour",
        duration: "9 Nights, 10 Days",
        price: "₹ 18,500",
        badge: "New",
        image: "images/HomePage/IMG_0246.webp",
      },
      {
        title: "Shimla To Manali Tour",
        duration: "6 Nights, 7 Days",
        price: "₹ 14,999",
        badge: "Best Seller",
        image: "images/HomePage/IMG_0261.webp",
      },
      {
        title: "Delhi To Shimla Tour",
        duration: "8 Nights, 9 Days",
        price: "₹ 15,999",
        badge: "20% OFF",
        image: "images/HomePage/IMG_0263.webp",
      },
      {
        title: "Delhi To Manali Tour",
        duration: "8 Nights, 9 Days",
        price: "₹ 17,999",
        badge: "New",
        image: "images/HomePage/IMG_0320.webp",
      },
      {
        title: "Manali To Chandratal Spiti Tour",
        duration: "8 Nights, 9 Days",
        price: "₹ 8,950",
        badge: "New",
        image: "images/HomePage/IMG_0335.webp",
      },
    ],
    "New Launches": [
      {
        title: "Shimla Spiti Tour",
        duration: "6 Nights, 7 Days",
        price: "₹ 14,499",
        badge: "New",
        image: "images/HomePage/IMG_0339.webp",
      },
      {
        title: "Chandigarh kinnour Spiti Tour",
        duration: "9 Nights, 10 Days",
        price: "₹ 18,500",
        badge: "New",
        image: "images/HomePage/IMG_0345.webp",
      },
      {
        title: "Shimla Spiti Circuit Manali ",
        duration: "6 Nights, 7 Days",
        price: "₹ 14,999",
        badge: "New",
        image: "images/HomePage/IMG_0356.webp",
      },
      {
        title: "Delhi Spiti Shimla Tour",
        duration: "8 Nights, 9 Days",
        price: "₹ 15,999",
        badge: "New",
        image: "images/HomePage/IMG_0368.webp",
      },
      {
        title: "Delhi Spiti Chandratal Manali Tour",
        duration: "8 Nights, 9 Days",
        price: "₹ 17,999",
        badge: "New",
        image: "/images/HomePage/IMG_0369.webp",
      },
      {
        title: "Chandigarh To Shimla Tour",
        duration: "2 Nights, 3 Days",
        price: "₹ 15,500",
        badge: "New",
        image: "images/HomePage/IMG_0458.webp",
      },
      {
        title: "Shimla - Manali Tour ",
        duration: "5 Nights, 6 Days",
        price: "₹ 18,000",
        badge: "New",
        image: "images/HomePage/IMG_0501.webp",
      },
      {
        title: "Chandigarh Shimla Kinnaur Tour ",
        duration: "3 Nights, 4 Days",
        price: "₹ 15,500",
        badge: "New",
        image: "/images/HomePage/IMG_0502.webp",
      },
    ],
    Trending: [
      {
        title: "Chandigarh - Shimla Tour",
        duration: "3 Nights, 4 Days",
        price: "₹ 18,500",
        badge: "Trending",
        image: "/images/HomePage/IMG_0571.webp",
      },
      {
        title: "CHD - Shimla - Manali Tour ",
        duration: "4 Nights, 5 Days",
        price: "₹ 20,000",
        badge: "Trending",
        image: "images/HomePage/IMG_0649.webp",
      },
      {
        title: "Chandigarh To Manali Tour",
        duration: "6 Nights, 7 Days",
        price: "₹ 18,000",
        badge: "New",
        image: "images/HomePage/IMG_0736.webp",
      },
      {
        title: "Delhi To Manali Tour",
        duration: "5 Nights, 6 Days",
        price: "₹ 15,500",
        badge: "New",
        image: "images/HomePage/IMG_0764.webp",
      },
      {
        title: "yan Adventure",
        duration: "7 Nights, 8 Days",
        price: "₹ 18,000",
        badge: "New",
        image: "images/HomePage/IMG_1005.webp",
      },
      {
        title: "Kerala Backwaters",
        duration: "6 Nights, 7 Days",
        price: "₹ 15,500",
        badge: "New",
        image: "images/HomePage/IMG_1194.webp",
      },
      {
        title: "Himalayan Adventure",
        duration: "7 Nights, 8 Days",
        price: "₹ 18,000",
        badge: "New",
        image: "images/HomePage/IMG_1262.webp",
      },
      {
        title: "Kerala Backwaters",
        duration: "6 Nights, 7 Days",
        price: "₹ 15,500",
        badge: "New",
        image: "images/HomePage/IMG_1262.webp",
      },
    ],
    Recommended: [
      {
        title: "Rajasthan Desert Safari",
        duration: "5 Nights, 6 Days",
        price: "₹ 13,500",
        badge: "Trending",
        image: "images/HomePage/IMG_1384.webp",
      },
      {
        title: "Andaman Islands",
        duration: "6 Nights, 7 Days",
        price: "₹ 20,000",
        badge: "Trending",
        image: "images/HomePage/IMG_1490.webp",
      },
      {
        title: "Himalayan Adventure",
        duration: "7 Nights, 8 Days",
        price: "₹ 18,000",
        badge: "New",
        image: "images/HomePage/IMG_1492.webp",
      },
      {
        title: "Kerala Backwaters",
        duration: "6 Nights, 7 Days",
        price: "₹ 15,500",
        badge: "New",
        image: "images/HomePage/IMG_1501.webp",
      },
      {
        title: "raj Adventure",
        duration: "7 Nights, 8 Days",
        price: "₹ 18,000",
        badge: "New",
        image: "images/HomePage/IMG_1534.webp",
      },
      {
        title: "Kerala Backwaters",
        duration: "6 Nights, 7 Days",
        price: "₹ 15,500",
        badge: "New",
        image: "images/HomePage/IMG_1539.webp",
      },
      {
        title: "Himalayan Adventure",
        duration: "7 Nights, 8 Days",
        price: "₹ 18,000",
        badge: "New",
        image: "images/HomePage/IMG_1550.webp",
      },
      {
        title: "Kerala Backwaters",
        duration: "6 Nights, 7 Days",
        price: "₹ 15,500",
        badge: "New",
        image: "images/HomePage/IMG_1767.webp",
      },
    ],
    Featured: [
      {
        title: "Rajasthan Desert Safari",
        duration: "5 Nights, 6 Days",
        price: "₹ 13,500",
        badge: "Trending",
        image: "images/HomePage/IMG_1815.webp",
      },
      {
        title: "Andaman Islands",
        duration: "6 Nights, 7 Days",
        price: "₹ 20,000",
        badge: "Trending",
        image: "images/HomePage/IMG_1501.webp",
      },
      {
        title: "Himalayan Adventure",
        duration: "7 Nights, 8 Days",
        price: "₹ 18,000",
        badge: "New",
        image: "images/HomePage/IMG_1907.webp",
      },
      {
        title: "Kerala Backwaters",
        duration: "6 Nights, 7 Days",
        price: "₹ 15,500",
        badge: "New",
        image: "images/HomePage/IMG_1930.webp",
      },
      {
        title: "Hrgrfr Adventure",
        duration: "7 Nights, 8 Days",
        price: "₹ 18,000",
        badge: "New",
        image: "images/HomePage/IMG_1948.webp",
      },
      {
        title: "Kerala Backwaters",
        duration: "6 Nights, 7 Days",
        price: "₹ 15,500",
        badge: "New",
        image: "images/HomePage/IMG_1767.webp",
      },
      {
        title: "Himalayan Adventure",
        duration: "7 Nights, 8 Days",
        price: "₹ 18,000",
        badge: "New",
        image: "images/HomePage/IMG_0571.webp",
      },
      {
        title: "Kerala Backwaters",
        duration: "6 Nights, 7 Days",
        price: "₹ 15,500",
        badge: "New",
        image: "images/HomePage/IMG_1815.webp",
      },
    ],
  }

  return (
    <div className='w-full h-full flex flex-col '>
      <HeroSection />
      <OurTrips tripsData={tripsData} />
      <BookTour />
      <WhyHimalayan />
      {/* <ClientSay/> */}
      <Blogs />
    </div>
  )
}

export default page