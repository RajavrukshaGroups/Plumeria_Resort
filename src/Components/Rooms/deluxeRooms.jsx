import "./deluxeRooms.css";
import { useState } from "react";
import DeluxeRoom1 from "../../assets/plumeriaresortimages/homeimg.jpg";
import DeluxeRoom2 from "../../assets/plumeriaresortimages/delRoom3.jpg";
import DeluxeRoom3 from "../../assets/plumeriaresortimages/delRoom2.jpg";
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
    image: DeluxeRoom1,
    title: "Deluxe Room (Lite Plan)",
    price: "₹4000 / Day",
  },
  {
    id: 2,
    image: DeluxeRoom2,
    title: "Deluxe Room (Plus Plan)",
    price: "₹6000 / Day",
  },
  {
    id: 3,
    image: DeluxeRoom3,
    title: "Deluxe Room (Max Plan)",
    price: "₹7100 / Day",
  },
];

const DeluxeRooms = () => {
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
      <p className="section-tag">Best on our Rooms</p>
      <h2 className="section-title">OUR ACCOMMODATIONS</h2>

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
              <span>{rooms[currentIndex].price}</span>
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

export default DeluxeRooms;
