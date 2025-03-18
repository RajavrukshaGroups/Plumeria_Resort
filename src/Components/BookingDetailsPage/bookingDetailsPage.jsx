import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import RoomSelection from "../RoomSelection/RoomSelection";
import "./BookingDetailsComponent.css";

const BookingDetailsComponent = ({ rooms }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);

  const totalSteps = rooms.length + 2; // Room selections + Personal Details + Payment
  const currentStep = parseInt(queryParams.get("step")) || 1;

  const selectedPlan = JSON.parse(queryParams.get("selectedPlan") || "{}");
  

  const handleRoomPlanSelection = (roomId, plan) => {
    const updatedPlans = { ...selectedPlan, [roomId]: plan };
    queryParams.set("selectedPlan", JSON.stringify(updatedPlans));
    navigate(`?${queryParams.toString()}`, { replace: true });
  };

  const handleNextStep = () => {
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

      <RoomSelection
        // key={location.search}
        key={currentStep}  // Ensure re-render when step changes
        rooms={rooms}
        onRoomSelect={handleRoomPlanSelection}
        // selectedPlan={selectedPlan}
        selectedPlan={selectedPlan} // Pass only the relevant step’s plan

      />

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
