import "./deluxeRooms.css";
import { useState } from "react";
import VillaRoom1 from "../../assets/plumeriaresortimages/cottagehome.jpg";
import VillaRoom2 from "../../assets/plumeriaresortimages/deluxeRoomNew1.webp";
import VillaRoom3 from "../../assets/plumeriaresortimages/delRoom6.webp";
import {
  IconBed,
  IconBath,
  IconUsers,
  IconArrowRight,
  IconArrowLeft,
} from "@tabler/icons-react";

const rooms = [
  {
    id: 1,
    image: VillaRoom1,
    title: "Villa Room (Lite Plan)",
    // price: "₹4400 / Day",
    price: "₹4000 / Day",
  },
  {
    id: 2,
    image: VillaRoom2,
    title: "Villa Room (Plus Plan)",
    // price: "₹6400 / Day ",
    price: "₹6400 / Day ",
  },
  {
    id: 3,
    image: VillaRoom3,
    title: "Villa Room (Max Plan)",
    // price: "₹7499 / Day",
    price: "₹7500 / Day",
  },
];

const VillaRooms = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? rooms.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === rooms.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="rooms-section">
      <div className="rooms-slider">
        {/* Previous Room (Hidden in Mobile) */}
        <div className="room-card prev-room" onClick={prevSlide}>
          <img
            src={rooms[(currentIndex - 1 + rooms.length) % rooms.length].image}
            alt="Previous Room"
            className="room-image"
          />
          <span className="nav-button prev">
            <IconArrowLeft />
          </span>
        </div>

        {/* Main Room - Shows Navigation Arrows in Mobile */}
        <div className="room-card main-room">
          <img
            src={rooms[currentIndex].image}
            alt="Current Room"
            className="room-image"
          />
          <div className="room-overlay"></div>
          <div className="room-details">
            <p className="room-price">
              <span className="original-price">
                {rooms[currentIndex].originalPrice}
              </span>{" "}
              <span className="price-with-star">
                {rooms[currentIndex].price} <sup className="price-star">*</sup>
              </span>
            </p>
            <h3 className="room-title">{rooms[currentIndex].title}</h3>
            <div className="room-info">
              <span>
                <IconUsers size={16} /> 2 guests
              </span>
              <span>
                <IconBed size={16} /> 1 Bed
              </span>
              <span>
                <IconBath size={16} /> 1 bath
              </span>
            </div>
            {/* <p className="price-disclaimer">
              <sup className="price-star">*</sup> Prices may vary based on
              season and availability.
            </p>
            <p className="price-disclaimer">
              <sup className="price-star">*</sup> Suitable for couples.
            </p> */}
            <p className="price-disclaimer">
              <sup className="price-star">*</sup> Prices may vary based on
              season and availability.
              <br />
              <span className="indent">Suitable for couples.</span>
            </p>
          </div>

          {/* Arrows for Mobile - Placed inside Main Room */}
          <span className="nav-button prev mobile-only" onClick={prevSlide}>
            <IconArrowLeft />
          </span>
          <span className="nav-button next mobile-only" onClick={nextSlide}>
            <IconArrowRight />
          </span>
        </div>

        {/* Next Room (Hidden in Mobile) */}
        <div className="room-card next-room" onClick={nextSlide}>
          <img
            src={rooms[(currentIndex + 1) % rooms.length].image}
            alt="Next Room"
            className="room-image"
          />
          <span className="nav-button next">
            <IconArrowRight />
          </span>
        </div>
      </div>
    </div>
  );
};

export default VillaRooms;
