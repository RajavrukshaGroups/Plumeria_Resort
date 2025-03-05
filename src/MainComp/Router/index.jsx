import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePageMainComponent from "../HomePageMain/HomePageMain";
import AboutUsMain from "../AboutUsMain/AboutUsMain";
import HeaderComponent from "../../Components/HeaderComp/header";
import ContactUsMain from "../../MainComp/contactUsMain/contactUsMain";
import Services from "../../Components/Services/services";
import ServicesMain from "../ServicesMain/servicesMain";
import ScrollToTop from "../../Utils/scrollToTop";
import GalleryMain from "../GalleryMain/gallery";

const AllRoute = () => {
  return (
    <Router>
      {/* <HeaderComponent/> */}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePageMainComponent />} />
        <Route path="/about-us" element={<AboutUsMain />} />
        {/* <Route path="/contactus" element={<ContactUsMain />}/> */}
        <Route path="/facilities" element={<ServicesMain />} />
        <Route path="/gallery" element={<GalleryMain />} />
      </Routes>
    </Router>
  );
};

export default AllRoute;
