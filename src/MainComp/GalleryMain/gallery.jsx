import React from "react";
import Footer from "../../Components/Footer/footer";
import GalleryComponent from "../../Components/Gallery/gallery";
import HeaderComponent from "../../Components/HeaderComp/header";
import SeoHelmet from "../../seo/SeoHelmet";

const GalleryMain = () => {
  return (
    <div>
      <SeoHelmet page="gallery" />

      {/* Page Content */}
      <HeaderComponent />
      <GalleryComponent />
      <Footer />
    </div>
  );
};

export default GalleryMain;
