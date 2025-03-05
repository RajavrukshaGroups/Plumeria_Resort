import React from "react";
import "./AboutUs.css";
import AboutUsNew from "../../assets/plumeriaresortimages/about_us_new.webp";
import AboutUsImg from "../../assets/plumeriaresortimages/aboutus_img.jpg";
import SecondAbout from "../../assets/plumeriaresortimages/about_jpg.jpg";
import AboutThree from "../../assets/plumeriaresortimages/about.jpg";

const AboutUs = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="w-screen h-[460px] relative">
        <img
          className="w-full h-full object-cover"
          src={AboutUsNew}
          alt="about us"
        />
        <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-60">
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            ABOUT US
          </h1>
        </div>
      </div>

      {/* About Us Content Section */}
      <div className="container mx-auto px-5 py-12 about-section">
        <div className="about-container">
          {/* Text Content */}
          {/* <div className="about-text">
            <h2 className="text-3xl font-semibold text-yellow-500">
              Welcome to Plumeria Resort
            </h2>
            <p>
              At our resort, we believe in providing a perfect blend of comfort,
              luxury, and nature. Nestled amidst the breathtaking landscapes of
              Coorg, we offer an idyllic retreat for those seeking tranquility,
              adventure, and rejuvenation.
            </p>
            <p>
              Our resort features thoughtfully designed accommodations that
              allow you to unwind and connect with nature, while our
              personalized services ensure every moment of your stay is
              exceptional. Whether you’re here to explore the lush surroundings,
              indulge in local flavors, or simply relax, we are committed to
              offering an unforgettable experience that brings you closer to the
              serene beauty of Coorg.
            </p>
            <p>
              Come, escape the ordinary, and immerse yourself in the
              extraordinary at our resort.
            </p>
          </div> */}
          <div className="about-text">
            <h2 className="text-3xl font-semibold text-yellow-500">
              Welcome to Plumeria Resort
            </h2>
            <p>
              At <b>Plumeria Resort</b>, we blend{" "}
              <span className="text-yellow-500 font-semibold">
                comfort, luxury, and nature
              </span>{" "}
              to create an extraordinary getaway. Nestled in the breathtaking
              landscapes of <b>Coorg</b>, our resort is designed for those
              seeking{" "}
              <span className="text-yellow-500 font-semibold">
                tranquility, adventure, and rejuvenation
              </span>
              .
            </p>
            <p>
              Our thoughtfully designed accommodations provide a perfect escape,
              allowing you to <b>connect with nature</b> in a setting of{" "}
              <span className="text-yellow-500 font-semibold">
                pure relaxation
              </span>
              . Whether you’re here to explore the lush surroundings, indulge in
              local flavors, or simply unwind, every moment at{" "}
              <b>Plumeria Resort</b> is crafted to be unforgettable.
            </p>
            <p>
              <i>
                Escape the ordinary, and immerse yourself in the extraordinary.
              </i>{" "}
              <span className="text-yellow-500 font-semibold">
                Welcome to paradise.
              </span>
            </p>
          </div>

          {/* Image - Now perfectly aligned */}
          <div className="about-image">
            <img src={AboutUsImg} alt="Resort View" />
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="bg-black py-12">
        <div className="container mx-auto px-5">
          <h2 className="text-3xl font-semibold text-center text-yellow-500">
            Discover Our Resort
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <img src={SecondAbout} alt="Scenic View" className="gallery-img" />
            <img
              src={AboutThree}
              alt="Luxurious Room"
              className="gallery-img"
            />
            <img
              src={AboutUsImg}
              alt="Nature Surroundings"
              className="gallery-img"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
