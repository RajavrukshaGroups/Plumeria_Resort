import React from "react";
import Facility from "../../assets/plumeriaresortimages/facilities.webp";
import Restaurant from "../../assets/plumeriaresortimages/restaurant.webp";
import Entertainment from "../../assets/plumeriaresortimages/plumeriahome.webp";
import Walkway from "../../assets/plumeriaresortimages/pathway.jpg";
import Meditation from "../../assets/plumeriaresortimages/meditaion.jpg";
import Parking from "../../assets/plumeriaresortimages/parking.jpg";
import "./services.css";

const servicesData = [
  {
    title: "🎉 Entertainment",
    image: Entertainment,
    points: [
      "✅ Indoor Games: Table Tennis, Carrom, Chess, Darts & Board Games",
      "✅ Outdoor Games: Badminton, Cricket, and Volleyball",
      "✅ Swimming Pool: Dedicated kids' pool with a safe partition",
      "✅ Evening Campfire & Music: Cozy bonfire nights with light music",
      <span className="special-point">
        ✅ Private Campfire & Music: at Rs.3000+GST
      </span>,
    ],
  },
  {
    title: "🍽️ Restaurant",
    image: Restaurant,
    points: [
      "✅ Features a designated multi-cuisine restaurant",
      "✅ A variety of cuisines – Local, Indian & International",
      "✅ Expert chefs crafting gourmet dishes",
      "✅ Serene ambiance for fine dining",
    ],
  },
  {
    title: "🌿 Walkway",
    image: Walkway,
    points: [
      "✅ Lush trees & vibrant ornamental plants",
      "✅ Oxygen-rich atmosphere to rejuvenate your mind & body",
      "✅ Perfect for a leisurely walk & meditation",
    ],
  },
  {
    title: "🧘 Meditation Area",
    image: Meditation,
    points: [
      "✅ Tranquil retreat with a calming fountain",
      "✅ Ideal for meditation, yoga & relaxation",
      "✅ Surrounded by nature for inner peace",
    ],
  },

  {
    title: "🚗 In-House Parking",
    image: Parking,
    points: [
      "✅ Ample, well-organized parking space",
      "✅ 24/7 CCTV surveillance for safety",
    ],
  },
];

const Services = () => {
  return (
    <div>
      {/* Facilities Banner */}
      <div className="services-banner">
        <img className="banner-image" src={Facility} alt="facility" />
        <div className="banner-overlay">
          <h1 className="banner-title">FACILITIES</h1>
        </div>
      </div>

      {/* Services Section */}
      <div className="services-container">
        {servicesData.map((service, index) => (
          <div
            className={`service-card ${index % 2 !== 0 ? "reverse" : ""}`}
            key={index}
          >
            <div className="service-image">
              <img src={service.image} alt={service.title} />
            </div>
            <div className="service-text">
              <h2>{service.title}</h2>
              <ul>
                {service.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
