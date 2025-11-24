import React from "react";
import Footer from "../../Components/Footer/footer";
import HeaderComponent from "../../Components/HeaderComp/header";
import PrivacyPolicy from "../../Components/PrivacyPolicy/PrivacyPolicy";
import SeoHelmet from "../../seo/SeoHelmet";

const MainPrivacyPolicy = () => {
  return (
    <div>
      <SeoHelmet page="privacy" />

      <HeaderComponent />
      <PrivacyPolicy />
      <Footer />
    </div>
  );
};

export default MainPrivacyPolicy;
