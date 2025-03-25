import React, { useState } from "react";
import { Link } from "react-router-dom";

const RoomDetailsModal = ({ roomData, onClose }) => {
  console.log("room-data", roomData);
  const [activeTab, setActiveTab] = useState("details");

  if (!roomData) return null; // Handle case where no data is passed

  const sections = {
    details: (
      <p className="text-sm text-gray-700">{roomData.roomInfo.description}</p>
    ),
    amenities: (
      <ul className="text-sm text-gray-600 space-y-1">
        {roomData.roomInfo.amenities.map((amenity, index) => (
          <li key={index}>📌{amenity}</li>
        ))}
      </ul>
    ),
    terms: (
      <ul className="text-sm text-gray-600 space-y-1">
        {roomData.roomInfo.terms.map((term, index) => (
          <li key={index}>📌{term}</li>
        ))}
        <li>
          📌 For more details, visit{" "}
          <Link
            to="/terms-conditions"
            className="text-[#a77a3a] font-semibold hover:underline"
          >
            Terms and Conditions page
          </Link>
        </li>
      </ul>
    ),
    bed: <p className="text-sm text-gray-700">{roomData.roomInfo.bed}</p>,
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4 sm:p-6 mt-5">
      <div className="bg-white w-full max-w-lg sm:max-w-xl md:max-w-2xl p-5 sm:p-6 rounded-lg shadow-lg">
        {/* Modal Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg sm:text-xl font-bold">
            {roomData.roomType} Details
          </h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-900 text-2xl"
          >
            &times;
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap border-b border-gray-300 mb-4">
          {["details", "amenities", "terms", "bed"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 text-center py-2 text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeTab === tab
                  ? "border-b-4 border-[#a77a3a] text-[#a77a3a]"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab === "details"
                ? "Room Details"
                : tab === "amenities"
                ? "Amenities"
                : tab === "terms"
                ? "T&C"
                : tab === "bed"
                ? "Bed Type"
                : ""}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="mt-2 max-h-60 sm:max-h-72 overflow-y-auto transition-all duration-300">
          {sections[activeTab]}
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-[#a77a3a] text-white rounded w-full"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default RoomDetailsModal;
