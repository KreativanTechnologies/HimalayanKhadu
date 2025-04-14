import React from 'react'
import Hero from '../../components/AboutComponents/Hero'
// import ClientSay from '../../components/AboutComponents/ClientSay'
import Blogs from "../../components/HomePageComp/Blogs"
import Grid from  "../../components/PackagePageComp/Grid"
const Herodata = {
    img_Src: "/images/Packageimg/Rectangle 1.png",
    heading: "Travel Packages"
}
const page = () => {
    return (
        <div>
            <Hero data={Herodata} />
            <Grid/>
            {/* <ClientSay/> */}
            <Blogs/>
        </div>
    )
}

export default page