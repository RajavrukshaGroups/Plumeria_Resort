import React from "react";
import "./YourStay.css";
import { useSelector } from "react-redux";

const YourStay = ({ selectedPlan }) => {
  console.log(selectedPlan,'seleteeeeeeeeeeeeeeeeeeeeee')
  const selectedPlansArray = Object.entries(selectedPlan);
  const selectedRooms = useSelector((state) => state.booking.rooms);
  console.log(selectedRooms, 'selectedRoomsssssssss'); // Logs the updated room details

  const totalAmount = selectedRooms.reduce((total, room) => {
    return total + (room.roomPrice || 0) + (room.extraAdultPrice || 0);
  }, 0);

  return (
    <div className="your-stay-container shadow-lg rounded-lg p-5 bg-white">
      <h3 className="your-stay-title text-lg font-bold text-[#a77a3a] border-b pb-2 mb-3">
        YOUR STAY
      </h3>

      {selectedRooms.map((room, index) => (
        <div key={index} className="stay-details space-y-2 border-b pb-3 mb-3">
          <p className="text-gray-700 text-sm font-medium flex flex-wrap items-center gap-x-2">
            <span>Room {room.roomId}:</span>
            <span className="font-semibold text-gray-900">
              {room.persons} Persons, {room.adults} Extra Adults, {room.children} Children
            </span>
          </p>

          <div className="stay-price text-gray-800 text-base font-semibold flex justify-between items-center">
            <span className="text-gray-600">Plan:</span>
            <span className="text-[#a77a3a]">{room.planName}</span>
          </div>

          <div className="stay-price text-gray-800 text-base font-semibold flex justify-between items-center">
            <span className="text-gray-600">Room Type:</span>
            <span className="text-[#a77a3a]">{room.roomType}</span>
          </div>

          <div className="stay-price text-gray-800 text-base font-semibold flex justify-between items-center">
            <span className="text-gray-600">Room Price:</span>
            <span className="text-[#a77a3a]">₹ {room.roomPrice || "0.00"}</span>
          </div>

          <div className="stay-price text-gray-800 text-base font-semibold flex justify-between items-center">
            <span className="text-gray-600">Extra Adult Price:</span>
            <span className="text-[#a77a3a]">₹ {room.extraAdultPrice || "0.00"}</span>
          </div>

          <div className="stay-taxes text-gray-800 text-base font-semibold flex justify-between items-center">
            <span className="text-gray-600">Taxes and Fees:</span>
            <span className="text-red-500">₹ 0.00</span>
          </div>
        </div>
      ))}

      <div className="stay-total text-lg font-bold flex justify-between items-center border-t pt-3">
        <span className="text-gray-700">Total Amount:</span>
        <span className="text-[#a77a3a]">₹ {totalAmount}</span>
      </div>
    </div>
  );
};

export default YourStay;
