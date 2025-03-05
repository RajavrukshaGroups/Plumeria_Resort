import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePageMainComponent from "../HomePageMain/HomePageMain";
import AboutUsMain from "../AboutUsMain/AboutUsMain";
import HeaderComponent from "../../Components/HeaderComp/header";
import ContactUsMain from "../../MainComp/contactUsMain/contactUsMain";
import Services from "../../Components/Services/services";

const AllRoute = () => {
  return (
    <Router>
      {/* <HeaderComponent/> */}
      <Routes>
        <Route path="/" element={<HomePageMainComponent />} />
        {/* <Route path="/aboutUs" element={<AboutUsMain />} />
        <Route path="/contactus" element={<ContactUsMain />} />
        <Route path="/services" element={<Services />} /> */}
      </Routes>
    </Router>
  );
};

export default AllRoute;
