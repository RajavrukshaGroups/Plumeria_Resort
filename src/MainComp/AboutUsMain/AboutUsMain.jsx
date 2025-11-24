import React from "react";
import AboutUs from "../../Components/AboutUs/AboutUs";
import HeaderComponent from "../../Components/HeaderComp/header";
import Footer from "../../Components/Footer/footer";
import SeoHelmet from "../../seo/SeoHelmet";

const AboutUsMain = () => {
  return (
    <>
      <SeoHelmet page="about" />

      {/* Page Content */}
      <HeaderComponent />
      <AboutUs />
      <Footer />
    </>
  );
};

export default AboutUsMain;
