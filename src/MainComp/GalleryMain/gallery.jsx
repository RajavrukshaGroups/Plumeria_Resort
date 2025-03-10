import React from "react";
import { Helmet } from "react-helmet-async";
import Footer from "../../Components/Footer/footer";
import GalleryComponent from "../../Components/Gallery/gallery";
import HeaderComponent from "../../Components/HeaderComp/header";

const GalleryMain = () => {
  return (
    <div>
      <Helmet>
        {/* 🔹 SEO Optimized Title */}
        <title>
          Gallery - Plumeria Resort | Explore Our Beautiful Retreat in Coorg
        </title>

        {/* 🔹 SEO Meta Description */}
        <meta
          name="description"
          content="Browse the gallery of Plumeria Resort in Coorg. View our luxury villas, deluxe rooms, swimming pools, meditation areas, and stunning nature pathways."
        />

        {/* 🔹 Keywords for SEO Ranking */}
        <meta
          name="keywords"
          content="Plumeria Resort gallery, luxury resort in Coorg, villa and deluxe rooms, nature retreat, meditation spaces, swimming pool, fine dining"
        />

        {/* 🔹 Open Graph (OG) Meta Tags for Social Media */}
        <meta property="og:title" content="Plumeria Resort - Gallery" />
        <meta
          property="og:description"
          content="Explore the breathtaking beauty of Plumeria Resort in Coorg. View our stunning villas, nature retreats, and world-class amenities."
        />
        {/* <meta property="og:image" content="/plumeria.png" /> */}
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* Page Content */}
      <HeaderComponent />
      <GalleryComponent />
      <Footer />
    </div>
  );
};

export default GalleryMain;
