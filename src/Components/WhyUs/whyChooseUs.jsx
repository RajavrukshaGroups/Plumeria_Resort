import React from "react";
import "./whyChoose.css";
import { useNavigate } from "react-router-dom";
import {
  IconWifi,
  IconDropletHalf2Filled,
  IconPizza,
  IconCar,
} from "@tabler/icons-react";

const cardData = [
  {
    icon: <IconCar size={24} stroke={1.5} />,
    title: "Travel Accommodation",
    shortDesc:
      "We provide comfortable and reliable travel options, including cab services for easy transportation to nearby locations.",
  },
  {
    icon: <IconDropletHalf2Filled size={24} stroke={1.5} />,
    title: "Purified Water",
    shortDesc:
      "Experience safe and clean drinking water, free from harmful contaminants, ensuring your health and well-being.",
  },
  {
    icon: <IconPizza size={24} stroke={1.5} />,
    title: "Tasty Restaurant",
    shortDesc:
      "Enjoy a variety of delicious multi-cuisine meals at our in-house restaurant, perfect for gatherings and business events.",
  },
  {
    icon: <IconWifi size={24} stroke={1.5} />,
    title: "High-Speed WiFi",
    shortDesc:
      "Stay connected with our seamless, high-speed WiFi, providing uninterrupted internet access for work and entertainment.",
  },
];

const WhyChooseUs = () => {
  const navigate = useNavigate();
  return (
    <section className="why-choose-us">
      {/* Left Side - Cards */}
      <div className="cards-container">
        {cardData.map((card, index) => (
          <div
            key={index}
            className={`info-card ${index === 1 ? "highlighted-card" : ""}`}
          >
            <div className="icon-wrapper">{card.icon}</div>
            <h3>{card.title}</h3>
            <p>{card.shortDesc}</p>
          </div>
        ))}
      </div>

      {/* Right Side - Content */}
      <div className="content-container">
        <p className="section-tag">Service & Amenities</p>
        <h2 className="section-title">
          Escape to the Ultimate <br /> Haven of Relaxation
        </h2>
        <p className="section-description">
          Experience the perfect blend of comfort and convenience with our
          top-notch amenities. From seamless travel options to high-speed
          connectivity, we ensure an unparalleled stay for our guests.
        </p>
        <button
          className="view-all-btn"
          onClick={() => navigate("/facilities")}
        >
          View All Services
        </button>
      </div>
    </section>
  );
};

export default WhyChooseUs;
