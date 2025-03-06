import React from "react";
import "./gallery.css";

// Importing images
import CottageHome from "../../assets/plumeriaresortimages/cottagehome.jpg";
import DeluxeRoom1 from "../../assets/plumeriaresortimages/deluxeRoomNew1.webp";
import VillaRoom1 from "../../assets/plumeriaresortimages/villaRoom2.jpg";
import SwimmingPool1 from "../../assets/plumeriaresortimages/plumeriahome.webp";
import SwimmingPool2 from "../../assets/plumeriaresortimages/poolhero2.jpg";
import SwimmingPool3 from "../../assets/plumeriaresortimages/swimnight.jpg";
import Pathway from "../../assets/plumeriaresortimages/pathway.jpg";
import Meditation from "../../assets/plumeriaresortimages/meditaion.jpg";
import pathway2 from "../../assets/plumeriaresortimages/aboutus_img.jpg";
import Restaurant from "../../assets/plumeriaresortimages/cp-plan.jpg";
import Restaurant2 from "../../assets/plumeriaresortimages/restaurant1.webp";
import campfire from "../../assets/plumeriaresortimages/campfire.webp";

// Data for categories
const gallerySections = [
  {
    title: "Villa & Deluxe Rooms",
    images: [VillaRoom1, DeluxeRoom1, CottageHome],
  },
  {
    title: "Swimming Pool",
    images: [SwimmingPool1, SwimmingPool2, SwimmingPool3],
  },
  {
    title: "Pathway & Meditation Area",
    images: [Pathway, pathway2, Meditation],
  },
  {
    title: "Restaurant & Campfire",
    images: [Restaurant, campfire],
  },
];

const GalleryComponent = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="w-screen h-[460px] relative">
        <img
          className="w-full h-full object-cover"
          src={CottageHome}
          alt="Gallery"
        />
        <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-60">
          <h1 className="text-5xl md:text-6xl font-bold text-white">GALLERY</h1>
        </div>
      </div>

      {/* Gallery Sections */}
      <div className="max-w-7xl mx-auto py-12 px-4">
        {gallerySections.map((section, index) => (
          <div key={index} className="mb-12">
            {/* Title with Horizontal Line */}
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-3xl font-semibold text-gray-800">
                {section.title}
              </h2>
              <div className="flex-grow h-[2px] bg-yellow-500"></div>
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={section.title}
                  className="w-full h-72 object-cover rounded-lg shadow-md"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryComponent;
