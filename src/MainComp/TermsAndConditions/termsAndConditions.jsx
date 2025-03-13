import React from "react";
import { Helmet } from "react-helmet-async";
import Footer from "../../Components/Footer/footer";
import HeaderComponent from "../../Components/HeaderComp/header";
import TermsAndConditions from "../../Components/TermsConditions/TermsConditions";

const MainTermsAndConditions = () => {
  return (
    <div>
      <Helmet>
        <title>
          Terms and Conditions | Plumeria Resort, Coorg - Policies & Guest
          Guidelines
        </title>
        <meta
          name="description"
          content="Read the terms and conditions of Plumeria Resort in Coorg. Learn about our booking policies, cancellations, check-in rules, and guest responsibilities."
        />
        <meta
          property="og:title"
          content="Plumeria Resort - Terms and Conditions & Policies"
        />
        <meta
          property="og:description"
          content="Read the Plumeria Resort terms and conditions, covering reservations, cancellations, guest policies, and resort facilities in Coorg."
        />
        {/* <meta property="og:image" content="/plumeria.png" /> */}
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <HeaderComponent />
      <TermsAndConditions />
      <Footer />
    </div>
  );
};

export default MainTermsAndConditions;
