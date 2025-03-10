import React from "react";
import { Helmet } from "react-helmet-async";
import AboutUs from "../../Components/AboutUs/AboutUs";
import HeaderComponent from "../../Components/HeaderComp/header";
import Footer from "../../Components/Footer/footer";

const AboutUsMain = () => {
  return (
    <>
      <Helmet>
        {/* 🔹 Page Title for SEO */}
        <title>About Us - Plumeria Resort | Luxury Stay in Coorg</title>

        {/* 🔹 Meta Description */}
        <meta
          name="description"
          content="Discover the story of Plumeria Resort in Coorg, Karnataka. A perfect blend of luxury, nature, and relaxation for an unforgettable stay."
        />

        {/* 🔹 Keywords for SEO */}
        <meta
          name="keywords"
          content="About Plumeria Resort, luxury resort in Coorg, eco-friendly stay, best resorts in Karnataka, nature getaway"
        />

        {/* 🔹 Open Graph for Social Media Sharing */}
        <meta
          property="og:title"
          content="About Plumeria Resort - Luxury & Nature Retreat"
        />
        <meta
          property="og:description"
          content="Plumeria Resort is your gateway to a luxurious escape in Coorg, Karnataka. Enjoy breathtaking nature views, deluxe accommodations, and world-class hospitality."
        />
        {/* <meta property="og:image" content="/plumeria.png" /> */}
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* Page Content */}
      <HeaderComponent />
      <AboutUs />
      <Footer />
    </>
  );
};

export default AboutUsMain;
