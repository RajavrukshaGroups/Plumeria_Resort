import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import RoomSelection from "../RoomSelection/RoomSelection";
import "./BookingDetailsComponent.css";
import { useSelector } from "react-redux";

const BookingDetailsComponent = ({ rooms }) => {
  const selectedRooms = useSelector((state) => state.booking.rooms);
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const totalSteps = rooms.length + 2; // Room selections + Personal Details + Payment
  const currentStep = parseInt(queryParams.get("step")) || 1;
  const totalGuests = rooms.reduce((acc, room) => {
    return acc + room.persons + room.adults + room.children;
  }, 0);
  
const handleNextStep = () => {
  if (currentStep === 1) {
    if (!selectedRooms[0]?.planName) {
      alert("Please select a plan for the first room before proceeding.");
      return;
    }
  }

  if (currentStep === 2) {
    if (!selectedRooms[1]?.planName) {
      alert("Please select a plan for the second room before proceeding.");
      return;
    }
  }

  // If validation passes, navigate to the next step
  queryParams.set("step", currentStep + 1);
  navigate(`?${queryParams.toString()}`, { replace: true });
};

  const handlePrevStep = () => {
    if (currentStep > 1) {
      queryParams.set("step", currentStep - 1);
      navigate(`?${queryParams.toString()}`, { replace: true });
    }
  };

  return (
    <div className="booking-container">
      {/* Step Indicator */}
      <div className="steps-container">
        {rooms.map((room, index) => {
          const stepNumber = index + 1;
          return (
            <div key={room.id} className="step">
              <div
                className={`step-circle ${
                  stepNumber === currentStep ? "active" : ""
                }`}
              >
                {stepNumber}
              </div>
              <span
                className={`step-label ${
                  stepNumber === currentStep ? "active-label" : ""
                }`}
              >
                Select Room {stepNumber}
              </span>
            </div>
          );
        })}

        <div className="step">
          <div
            className={`step-circle ${
              totalSteps - 1 === currentStep ? "active" : ""
            }`}
          >
            {totalSteps - 1}
          </div>
          <span
            className={`step-label ${
              totalSteps - 1 === currentStep ? "active-label" : ""
            }`}
          >
            Personal Details
          </span>
        </div>

        <div className="step">
          <div
            className={`step-circle ${
              totalSteps === currentStep ? "active" : ""
            }`}
          >
            {totalSteps}
          </div>
          <span
            className={`step-label ${
              totalSteps === currentStep ? "active-label" : ""
            }`}
          >
            Payment Confirmation
          </span> 
        </div>
      </div>

      <RoomSelection rooms={rooms} currentStep={currentStep} totalGuests={totalGuests}/>
      <div className="navigation-buttons">
        {currentStep > 1 && (
          <button onClick={handlePrevStep} className="prev-step-button">
            Previous
          </button>
        )}
        {currentStep < totalSteps && (
          <button onClick={handleNextStep} className="next-step-button">
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default BookingDetailsComponent;
