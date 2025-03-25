import React, { useState } from "react";
import RoomModal from "./roommodal";
import DatePicker from "react-datepicker";
import { useNavigate } from "react-router-dom";
import "./booking.css";
import "react-datepicker/dist/react-datepicker.css";

const BookingSection = ({
  accommodation,
  initialCheckIn,
  initialCheckOut,
  initialRooms,
}) => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rooms, setRooms] = useState(
    initialRooms || [{ id: 1, persons: 1, adults: 0, children: 0 }]
  );

  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  const [checkInDate, setCheckInDate] = useState(initialCheckIn || today);
  const [checkOutDate, setCheckOutDate] = useState(initialCheckOut || tomorrow);

  const handleCheckInChange = (date) => {
    setCheckInDate(date);
    if (checkOutDate <= date) {
      const nextDay = new Date(date);
      nextDay.setDate(date.getDate() + 1);
      setCheckOutDate(nextDay);
    }
  };

  const handleBookNow = () => {
    const bookingParams = new URLSearchParams(location.search);

    let currentStep = parseInt(bookingParams.get("step")) || 1;

    // Ensure step does not skip backward or jump to personal details prematurely
    if (currentStep > rooms.length) {
      currentStep = rooms.length; // Adjust step to the correct room count
    }

    bookingParams.set("checkIn", checkInDate.toISOString().split("T")[0]);
    bookingParams.set("checkOut", checkOutDate.toISOString().split("T")[0]);
    bookingParams.set(
      "rooms",
      rooms.map((r) => `${r.persons}-${r.adults}-${r.children}`).join(",")
    );
    bookingParams.set("step", currentStep); // Keep step consistent

    navigate(`/book-now?${bookingParams.toString()}`);
  };

  return (
    <div className="flex justify-center mt-8 main-div">
      <div className="relative bg-white p-6 rounded-lg shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-4 w-full max-w-6xl">
        {/* Check-in */}
        <div className="w-full md:w-1/4">
          <label className="block text-gray-700 text-sm font-semibold mb-1">
            Check-in
          </label>
          <DatePicker
            selected={checkInDate}
            onChange={handleCheckInChange}
            minDate={today}
            dateFormat="dd MMMM yyyy"
            className="w-full border p-3 text-gray-700 text-sm rounded-md text-center"
          />
        </div>

        {/* Check-out */}
        <div className="w-full md:w-1/4">
          <label className="block text-gray-700 text-sm font-semibold mb-1">
            Check-out
          </label>
          <DatePicker
            selected={checkOutDate}
            onChange={(date) => setCheckOutDate(date)}
            minDate={new Date(checkInDate.getTime() + 24 * 60 * 60 * 1000)}
            dateFormat="dd MMMM yyyy"
            className="w-full border p-3 text-gray-700 text-sm rounded-md text-center"
          />
        </div>

        {/* Guests & Rooms */}
        <div className="w-full md:w-1/4 flex flex-col">
          <label className="block text-gray-700 text-sm font-semibold mb-1">
            Guests & Rooms
          </label>
          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full border p-3 text-gray-700 text-sm rounded-md flex items-center justify-center"
          >
            <span className="font-semibold text-black">
              {rooms.reduce(
                (total, room) =>
                  total + room.persons + room.adults + room.children,
                0
              )}
            </span>
            <span className="mx-1 text-gray-600">Guests,</span>
            <span className="font-semibold text-black">{rooms.length}</span>
            <span className="mx-1 text-gray-600">Room</span>
          </button>
        </div>

        {/* Book Now / Update Button */}
        <div className="w-full md:w-1/4 flex items-center justify-center mt-6">
          <button
            className="bg-[#FFC107] hover:bg-[#A77A3A] text-white px-6 py-3 text-sm font-semibold rounded-lg shadow-md transition-all"
            onClick={handleBookNow}
          >
            {accommodation ? "UPDATE" : "BOOK NOW"}
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <RoomModal
          rooms={rooms}
          setRooms={setRooms}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </div>
  );
};

export default BookingSection;
