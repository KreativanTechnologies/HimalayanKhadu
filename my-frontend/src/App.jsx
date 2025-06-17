import { Routes, Route } from 'react-router-dom';
import Layout from '../src/Layout';
import Home from './app/page';
import About from './app/about/page';
import Login from './app/login/page';
import SignUp from './app/Signup/page';
import Blog from './app/Blog/page';
import Contact from './app/Contact/page';
import CorporateTour from './app/corporateTour/page';
import Cycling from './app/Cycling/page';
import Package from './app/Package/page';
import Trekking from './app/trekking/page';
import Trippage from './app/Trippage/page';
import Transport from './app/Transport/page';
import StudentTour from './app/StudentTours/page'
import Spirtiualtours from './app/spiritualTours/page'
// import Destinations from './app/destinations/page'
// import Carddetail from '../../my-frontend/src/app/Carddetail/page';
import BikeTour from './app/biketour/page';



export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Signup" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/corporateTour" element={<CorporateTour />} />
        <Route path="/Cycling" element={<Cycling />} />
        <Route path="/package" element={<Package />} />
        <Route path="/trekking" element={<Trekking />} />
        <Route path="/trippage" element={<Trippage />} /> 
        <Route path="/Transport" element={<Transport/>} />
        <Route path="/StudentTours" element={<StudentTour />} />
        <Route path="/spiritualTours" element={<Spirtiualtours/>} />
        {/* <Route path="/destinations" element={<Destinations />} /> */}
        {/* <Route path="/carddetail" element={<Carddetail />} /> */}
        <Route path="/biketour" element={<BikeTour />} />
      </Route>
    </Routes>
  );
}


