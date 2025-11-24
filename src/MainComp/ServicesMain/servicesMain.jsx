import React from "react";
import Footer from "../../Components/Footer/footer";
import HeaderComponent from "../../Components/HeaderComp/header";
import Services from "../../Components/Services/services";
import SeoHelmet from "../../seo/SeoHelmet";

const ServicesMain = () => {
  return (
    <div>
      <SeoHelmet page="facilities" />

      {/* Page Content */}
      <HeaderComponent />
      <Services />
      <Footer />
    </div>
  );
};

export default ServicesMain;
