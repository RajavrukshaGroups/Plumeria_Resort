import React from "react";
import { Helmet } from "react-helmet-async";
import Footer from "../../Components/Footer/footer";
import HeaderComponent from "../../Components/HeaderComp/header";
import PrivacyPolicy from "../../Components/PrivacyPolicy/PrivacyPolicy";

const MainPrivacyPolicy = () => {
  return (
    <div>
      <Helmet>
        <title>
          Privacy Policy | Plumeria Resort - User Data Protection & Online
          Security
        </title>
        <meta
          name="description"
          content="Read Plumeria Resort's Privacy Policy to understand how we collect, use, and protect your personal data. Learn about data security, cookies, and user rights."
        />
        <meta
          property="og:title"
          content="Plumeria Resort - Privacy Policy & Data Protection"
        />
        <meta
          property="og:description"
          content="Learn how Plumeria Resort handles user privacy, data collection, and security. Read our policies on cookies, personal data, and compliance with regulations."
        />
        {/* <meta property="og:image" content="/plumeria.png" /> */}
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <HeaderComponent />
      <PrivacyPolicy />
      <Footer />
    </div>
  );
};

export default MainPrivacyPolicy;
