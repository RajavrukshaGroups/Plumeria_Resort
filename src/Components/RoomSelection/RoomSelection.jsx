import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaUsers, FaBed, FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import YourStay from "../YourStay/YourStay";
import RoomDetailsModal from "./RoomDetails";

import VillaRoomImg1 from "../../assets/plumeriaresortimages/delRoom6.webp";
import VillaRoomImg2 from "../../assets/plumeriaresortimages/deluxeRoomNew1.webp";
import VillaRoomImg3 from "../../assets/plumeriaresortimages/deluxeRoom2.jpg";
import DeluxeRoomImg1 from "../../assets/plumeriaresortimages/villaRoom2.jpg";
import DeluxeRoomImg2 from "../../assets/plumeriaresortimages/delRoom1.jpg";
import DeluxeRoomImg3 from "../../assets/plumeriaresortimages/delRoom10.jpg";
import { setPlan } from "../../store/bookingSlice";

const RoomSelection = ({ rooms }) => {
  console.log("rooms-data", rooms);
  const dispatch = useDispatch();
  const selectedPlan = useSelector((state) => state.booking.selectedPlan);

  // const [selectedPlan, setSelectedPlan] = useState(null);
  const [selectedRoomType, setSelectedRoomType] = useState(null);
  const [roomImageIndex, setRoomImageIndex] = useState({ Villa: 0, Deluxe: 0 });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);

  //   console.log("selectedPlans", selectedPlan);

  const roomImages = {
    Villa: [VillaRoomImg1, VillaRoomImg2, VillaRoomImg3],
    Deluxe: [DeluxeRoomImg1, DeluxeRoomImg2, DeluxeRoomImg3],
  };

  const openModal = (roomType) => {
    setSelectedRoom(roomType);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedRoom(null);
  };

  const handleImageChange = (roomType, direction) => {
    setRoomImageIndex((prev) => {
      const newIndex =
        direction === "next"
          ? (prev[roomType] + 1) % roomImages[roomType].length
          : (prev[roomType] - 1 + roomImages[roomType].length) %
            roomImages[roomType].length;
      return { ...prev, [roomType]: newIndex };
    });
  };

  const handleRoomSelect = (roomType, plan, roomIndex) => {
    console.log(
      `Selecting plan for Room Type: ${roomType}, Room Index: ${roomIndex}`,
      plan
    );

    dispatch(setPlan({ roomId: `${roomType}${roomIndex}`, plan, roomType }));
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6 w-full p-4">
      <div className="flex flex-col gap-6 w-full lg:w-3/4">
        {["Villa", "Deluxe"].map((roomType, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row gap-4 bg-white p-6 rounded-lg shadow-lg border border-gray-200"
          >
            <div className="relative w-full md:w-1/3 bg-white p-3 rounded-lg shadow-md">
              <div className="relative">
                <img
                  src={roomImages[roomType][roomImageIndex[roomType]]}
                  alt={`${roomType} Room`}
                  className="w-full h-[250px] md:h-[280px] rounded-lg object-cover transition-transform duration-300 ease-in-out"
                />
                <button
                  onClick={() => handleImageChange(roomType, "prev")}
                  className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black/60 p-2 rounded-full text-white text-lg hover:bg-black/80"
                >
                  <FaChevronLeft />
                </button>
                <button
                  onClick={() => handleImageChange(roomType, "next")}
                  className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black/60 p-2 rounded-full text-white text-lg hover:bg-black/80"
                >
                  <FaChevronRight />
                </button>
              </div>

              <div className="mt-4 bg-gray-100 p-3 rounded-lg text-center">
                <div className="flex items-center justify-center gap-3 text-lg font-semibold text-gray-800">
                  <FaUsers className="text-[#a77a3a]" />
                  <span>Up to 3 Guests</span>
                </div>
                <div className="flex items-center justify-center gap-3 text-lg font-semibold text-gray-800 mt-2">
                  <FaBed className="text-[#a77a3a]" />
                  <span>King Bed</span>
                </div>
              </div>

              <button
                onClick={() => openModal(roomType)}
                className="mt-3 w-full text-center text-[#a77a3a] font-bold text-sm border border-[#a77a3a] rounded-lg py-2 hover:bg-[#a77a3a] hover:text-white transition-all duration-300"
              >
                VIEW ROOM DETAILS
              </button>
            </div>

            <div className="w-full md:w-2/3">
              <h2 className="text-lg font-bold text-[#a77a3a] mb-3">
                {roomType} Room
              </h2>
              {[
                {
                  id: "lite",
                  name: "Lite Plan",
                  price: 17100,
                  benefits: ["Room-only", "Wi-Fi included", "Taxes extra"],
                },
                {
                  id: "plus",
                  name: "Plus Plan",
                  price: 18450,
                  benefits: [
                    "Buffet breakfast",
                    "Wi-Fi included",
                    "Taxes extra",
                  ],
                },
                {
                  id: "max",
                  name: "Max Plan",
                  price: 19999,
                  benefits: ["All meals included", "Premium Wi-Fi", "Free Spa"],
                },
              ].map((plan) => (
                <div
                  key={plan.id}
                  className="flex flex-col md:flex-row justify-between items-center border border-gray-300 p-3 rounded-lg bg-white shadow-sm mb-3"
                >
                  <div className="w-full md:w-2/3">
                    <h3 className="text-lg font-semibold text-[#a77a3a] bg-[#f8f1e3] px-3 py-1 rounded-md">
                      {plan.name}
                    </h3>
                    <ul className="text-xs text-gray-700 mt-1">
                      {plan.benefits.map((desc, i) => (
                        <li
                          key={i}
                          className="text-base font-medium flex items-center gap-2"
                        >
                          <span className="text-[#a77a3a]">➤</span> {desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="w-full md:w-1/3 text-center mt-2 md:mt-0">
                    <div className="text-sm font-bold mb-1 text-gray-900">
                      ₹ {plan.price}
                    </div>
                    <button
                      onClick={() => handleRoomSelect(roomType, plan, index)}
                      className="bg-[#a77a3a] text-white py-2 px-4 rounded text-xs hover:bg-[#8c5f2a] transition-all duration-300"
                    >
                      Select
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Pass updated selectedPlan to YourStay */}
      <div className="w-full lg:w-1/4">
        <YourStay rooms={rooms} />
      </div>

      {isModalOpen && (
        <RoomDetailsModal roomType={selectedRoom} onClose={closeModal} />
      )}
    </div>
  );
};

export default RoomSelection;
