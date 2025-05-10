import React, { useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaUsers, FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { setPlan, setRoom } from "../../store/bookingSlice";
import RoomDetailsModal from "./RoomDetails";
import YourStay from "../YourStay/YourStay";
import PricingDetailsModal from "./PricingDetailsModal";
import { BookingContext } from "../BookingForm/BookingContext";

const RoomSelection = ({ rooms, currentStep }) => {
  const { checkInDate, checkOutDate } = useContext(BookingContext);
  const dispatch = useDispatch();
  const selectedPlan = useSelector((state) => state.booking.selectedPlan);
  const [roomImageIndex, setRoomImageIndex] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [isPricingModalOpen, setIsPricingModalOpen] = useState(false);
  const [selectedPlanForPricing, setSelectedPlanForPricing] = useState(null);
  const [selectedPlanNameForPricing, setSelectedPlanNameForPricing] =
    useState(null);

  const stayDuration = (checkInDate, checkOutDate) => {
    return Math.round(
      (new Date(checkOutDate) - new Date(checkInDate)) / (1000 * 60 * 60 * 24)
    );
  };

  const handleImageChange = (roomId, direction) => {
    setRoomImageIndex((prev) => {
      const currentIndex = prev[roomId] || 0;
      const room = rooms.find((r) => r.id === roomId);
      const images = room.selectedRoom.images;
      const newIndex =
        direction === "next"
          ? (currentIndex + 1) % images.length
          : (currentIndex - 1 + images.length) % images.length;

      return { ...prev, [roomId]: newIndex };
    });
  };

  const handleRoomSelect = (roomId, planName, plan, duration) => {
    let selectedRoomData = {};
    rooms.forEach((val) => {
      if (roomId === val.id) {
        let extraAdultPrice =
          val.adults > 0
            ? val.adults * plan.price.extraAdult.withGst * duration
            : 0;
        let roomType = val.selectedRoom.roomType;
        let roomPrice = duration * plan.price.twoGuests.withGst;

        selectedRoomData = {
          roomId,
          planName,
          roomType,
          roomPrice,
          extraAdultPrice,
          persons: val.persons,
          adults: val.adults,
          children: val.children,
          duration,
        };
      }
    });
    dispatch(setRoom(selectedRoomData));
    dispatch(setPlan({ roomId, plan }));
  };

  const openModal = (room) => {
    setSelectedRoom(room);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedRoom(null);
  };

  const roomIndex = currentStep - 1;
  if (roomIndex < 0 || roomIndex >= rooms.length) return null;
  const room = rooms[roomIndex];
  const currentRoomGuests = room.persons + room.adults + room.children;
  const openPricingModal = (plan, planName) => {
    setSelectedPlanForPricing(plan);
    setSelectedPlanNameForPricing(planName);
    setIsPricingModalOpen(true);
  };

  const closePricingModal = () => {
    setIsPricingModalOpen(false);
    setSelectedPlanForPricing(null);
    setSelectedPlanNameForPricing(null);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6 w-full p-4">
      <div className="flex flex-col gap-6 w-full lg:w-3/4">
        <div
          key={room.id}
          className="flex flex-col md:flex-row gap-4 bg-white p-6 rounded-lg shadow-lg border border-gray-200"
        >
          <div className="relative w-full md:w-1/3 bg-white p-3 rounded-lg shadow-md">
            <div className="relative">
              <img
                src={
                  room.selectedRoom.images[roomImageIndex[room.id]] ||
                  room.selectedRoom.images[0]
                }
                alt={`${room.selectedRoom.roomType} Room`}
                className="w-full h-[250px] md:h-[280px] rounded-lg object-cover transition-transform duration-300 ease-in-out"
              />
              <button
                onClick={() => handleImageChange(room.id, "prev")}
                className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black/60 p-2 rounded-full text-white text-lg hover:bg-black/80"
              >
                <FaChevronLeft />
              </button>
              <button
                onClick={() => handleImageChange(room.id, "next")}
                className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black/60 p-2 rounded-full text-white text-lg hover:bg-black/80"
              >
                <FaChevronRight />
              </button>
            </div>

            <div className="mt-4 bg-gray-100 p-3 rounded-lg text-center">
              <div className="flex items-center justify-center gap-3 text-lg font-semibold text-gray-800">
                <FaUsers className="text-[#a77a3a]" />
                <span>{currentRoomGuests} Guests</span>
              </div>
            </div>

            <button
              onClick={() => openModal(room)}
              className="mt-3 w-full text-center text-[#a77a3a] font-bold text-sm border border-[#a77a3a] rounded-lg py-2 hover:bg-[#a77a3a] hover:text-white transition-all duration-300"
            >
              VIEW ROOM DETAILS
            </button>
          </div>

          <div className="w-full md:w-2/3">
            <h2 className="text-lg font-bold text-[#a77a3a] mb-3">
              {room.selectedRoom.roomType}
            </h2>

            {room.selectedRoom.plans.map((plan, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row justify-between items-center border border-gray-300 p-3 rounded-lg bg-white shadow-sm mb-3"
              >
                <div className="w-full md:w-2/3">
                  <h3 className="text-lg font-semibold text-[#a77a3a] bg-[#f8f1e3] px-3 py-1 rounded-md">
                    {plan.name} {/* Access the proper plan name */}
                  </h3>
                  <ul className="text-xs text-gray-700 mt-1">
                    {plan.complimentary.length > 0 ? (
                      plan.complimentary.map((desc, i) => (
                        <li
                          key={i}
                          className="text-base font-medium flex items-center gap-2"
                        >
                          <span className="text-[#a77a3a]">➤</span> {desc}
                        </li>
                      ))
                    ) : (
                      <li className="text-gray-500 italic">No complimentary</li>
                    )}
                  </ul>
                </div>
                <div className="w-full md:w-1/3 text-center mt-2 md:mt-0">
                  <div className="text-sm font-bold mb-1 text-gray-900">
                    ₹ {plan.price.twoGuests.withGst} /night
                  </div>
                  <button
                    onClick={() =>
                      handleRoomSelect(
                        room.id,
                        plan.name,
                        plan,
                        stayDuration(checkInDate, checkOutDate)
                      )
                    }
                    className="bg-[#a77a3a] text-white py-2 px-4 rounded text-xs hover:bg-[#8c5f2a] transition-all duration-300"
                  >
                    Select
                  </button>
                  <button
                    onClick={() => openPricingModal(plan, plan.name)}
                    className="mt-2 w-full bg-transparent text-[#a77a3a] border border-[#a77a3a] py-2 px-4 rounded text-xs hover:bg-[#a77a3a] hover:text-white transition-all duration-300"
                  >
                    View Price
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/4">
        <YourStay selectedPlan={selectedPlan} />
      </div>

      {isModalOpen && (
        <RoomDetailsModal
          roomData={selectedRoom?.selectedRoom}
          onClose={closeModal}
        />
      )}

      {isPricingModalOpen && (
        <PricingDetailsModal
          plan={selectedPlanForPricing}
          planName={selectedPlanNameForPricing}
          onClose={closePricingModal}
        />
      )}
    </div>
  );
};

export default RoomSelection;
