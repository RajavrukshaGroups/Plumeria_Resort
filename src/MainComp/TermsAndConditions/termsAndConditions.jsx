import React from "react";
import Footer from "../../Components/Footer/footer";
import HeaderComponent from "../../Components/HeaderComp/header";
import TermsAndConditions from "../../Components/TermsConditions/TermsConditions";
import SeoHelmet from "../../seo/SeoHelmet";

const MainTermsAndConditions = () => {
  return (
    <div>
      <SeoHelmet page="terms" />

      <HeaderComponent />
      <TermsAndConditions />
      <Footer />
    </div>
  );
};

export default MainTermsAndConditions;
