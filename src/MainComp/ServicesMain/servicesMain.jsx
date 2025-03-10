import React from "react";
import { Helmet } from "react-helmet-async";
import Footer from "../../Components/Footer/footer";
import HeaderComponent from "../../Components/HeaderComp/header";
import Services from "../../Components/Services/services";

const ServicesMain = () => {
  return (
    <div>
      <Helmet>
        {/* 🔹 SEO Optimized Page Title */}
        <title>
          Facilities & Services - Plumeria Resort | Luxury Amenities in Coorg
        </title>

        {/* 🔹 Meta Description for Better SEO */}
        <meta
          name="description"
          content="Discover world-class facilities at Plumeria Resort, Coorg. Enjoy entertainment zones, fine dining, meditation spaces, nature walkways, and secure parking."
        />

        {/* 🔹 Keywords for SEO */}
        <meta
          name="keywords"
          content="Plumeria Resort facilities, luxury amenities, best resort in Coorg, entertainment zone, meditation space, fine dining, in-house parking, eco-friendly resort"
        />

        {/* 🔹 Open Graph (OG) Meta Tags for Social Media Sharing */}
        <meta
          property="og:title"
          content="Facilities & Services at Plumeria Resort"
        />
        <meta
          property="og:description"
          content="Experience luxury with our world-class facilities at Plumeria Resort. From entertainment zones to meditation spaces, we have it all!"
        />
        {/* <meta property="og:image" content="/plumeria.png" /> */}
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* Page Content */}
      <HeaderComponent />
      <Services />
      <Footer />
    </div>
  );
};

export default ServicesMain;
