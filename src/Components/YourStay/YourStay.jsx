import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./YourStay.css";
import { useSelector } from "react-redux";

const YourStay = ({ rooms }) => {
  console.log("Rooms array:", rooms);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const currentStep = parseInt(queryParams.get("step")) || 1;
  const currentRoomIndex = currentStep - 1;
  const selectedPlan = useSelector((state) => state.booking.selectedPlan);

  if (
    !rooms ||
    rooms.length === 0 ||
    currentRoomIndex < 0 ||
    currentRoomIndex >= rooms.length
  ) {
    return null;
  }

  const currentRoom = rooms[currentRoomIndex] || {}; // Ensure it's an object
  console.log("Current Room:", currentRoom);
  console.log("Current Room Type:", currentRoom?.type);
  if (!currentRoom) {
    console.log("Current Room is undefined:", currentRoom);
    return null;
  }

  //   const roomKey = Object.keys(selectedPlan)[0] || null;
  //   const currentRoomPlan = roomKey ? selectedPlan[roomKey] : null;
  const roomKey = `${currentRoom.type}${currentRoom.id}`;
  const currentRoomPlan = selectedPlan[roomKey] || null;

  return (
    <div className="your-stay-container shadow-lg rounded-lg p-5 bg-white">
      <h3 className="your-stay-title text-lg font-bold text-[#a77a3a] border-b pb-2 mb-3">
        YOUR STAY
      </h3>

      <div className="stay-details space-y-2">
        <p className="text-gray-700 text-sm font-medium flex flex-wrap items-center gap-x-2">
          <span>Room {currentRoom?.id}:</span>
          <span className="font-semibold text-gray-900">
            {currentRoom?.persons} Persons, {currentRoom?.adults} Extra Adults,{" "}
            {currentRoom?.children} Children
          </span>
        </p>

        {/* Corrected price selection */}
        <div className="stay-price text-gray-800 text-base font-semibold flex justify-between items-center">
          <span className="text-gray-600">Price:</span>
          <span className="text-[#a77a3a]">
            ₹ {currentRoomPlan ? currentRoomPlan.price : "0.00"}
          </span>
        </div>

        <div className="stay-taxes text-gray-800 text-base font-semibold flex justify-between items-center">
          <span className="text-gray-600">Taxes and Fees:</span>
          <span className="text-red-500">₹ 0.00</span>
        </div>

        <div className="stay-total text-lg font-bold flex justify-between items-center border-t pt-2">
          <span className="text-gray-700">Total Amount:</span>
          <span className="text-[#a77a3a]">
            ₹ {currentRoomPlan ? currentRoomPlan.price : "0.00"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default YourStay;
