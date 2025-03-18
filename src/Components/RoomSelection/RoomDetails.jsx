import React, { useState } from "react";
import { Link } from "react-router-dom";

const RoomDetailsModal = ({ roomType, onClose }) => {
  const [activeTab, setActiveTab] = useState("details");

  const roomDescriptions = {
    deluxe: (
      <p className="text-sm text-gray-700">
        Our Spacious <strong>Deluxe Rooms</strong> offer an elevated experience
        with generous space, elegant décor, and premium amenities, designed to
        provide ultimate comfort and relaxation. These rooms feature{" "}
        <strong>
          larger living areas, luxurious furnishings, and stunning views
        </strong>
        , making them the perfect choice for those seeking extra comfort and
        sophistication.
      </p>
    ),
    villa: (
      <p className="text-sm text-gray-700">
        The <strong>Individual Villa Rooms</strong> provide a private and
        intimate experience, nestled within beautifully landscaped surroundings.
        Each villa is designed with its own unique charm, featuring{" "}
        <strong>
          spacious interiors, modern amenities, and private outdoor spaces
        </strong>
        , ensuring a tranquil retreat for guests who value both{" "}
        <strong>luxury and privacy.</strong> Our Individual Villa Rooms also
        include a charming <strong>portico</strong>, perfect for relaxing and
        enjoying the refreshing breeze.
      </p>
    ),
  };

  const sections = {
    details:
      roomType.toLowerCase() === "deluxe"
        ? roomDescriptions.deluxe
        : roomDescriptions.villa,
    amenities: (
      <ul className="text-sm text-gray-600 space-y-1">
        <li>🏨 Free Wi-Fi</li>
        <li>🛏️ King-size bed</li>
        <li>🍽️ 24-hour room service</li>
        <li>🌅 Private balcony (subject to availability)</li>
        <li>☕ Tea and coffee maker</li>
      </ul>
    ),
    terms: (
      <ul className="text-sm text-gray-600 space-y-1">
        <li>📌 Check-in: 1:00 PM | Check-out: 11:00 AM</li>
        <li>📌 Alcohol consumption is allowed only in designated areas</li>
        <li>📌 Illegal drugs and substances are strictly prohibited</li>
        <li>📌 Pets are not allowed</li>
        <li>📌 Cancellation policy applies</li>
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
    bed: (
      <p className="text-sm text-gray-700">
        This room features a <strong>king-size bed</strong> with high-quality
        linens and plush pillows to ensure maximum comfort during your stay.
      </p>
    ),
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4 sm:p-6 mt-5">
      <div className="bg-white w-full max-w-lg sm:max-w-xl md:max-w-2xl p-5 sm:p-6 rounded-lg shadow-lg">
        {/* Modal Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg sm:text-xl font-bold">
            {roomType} Room Details
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
                : "Bed Type"}
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
