import React, { useState, useEffect, useRef } from "react";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import RoomSelection from "../RoomSelection/RoomSelection";
import "./BookingDetailsComponent.css";
import { useSelector, useDispatch } from "react-redux";
import PersonalDetails from "../PersonnelDetails/personnelDetail";
import { setErrors } from "../../store/bookingSlice";
import PaymentDetails from "../PaymentDetails/paymentDetails";
import "react-toastify/dist/ReactToastify.css";

const BookingDetailsComponent = ({ rooms }) => {
  const dispatch = useDispatch();
  const selectedRooms = useSelector((state) => state.booking.rooms);
  const totalAmount = selectedRooms.reduce((total, room) => {
    return total + (room.roomPrice || 0) + (room.extraAdultPrice || 0);
  }, 0); // Reassign room IDs sequentially
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const totalSteps = rooms.length + 2; // Room selections + Personal Details + Payment
  const currentStep = parseInt(queryParams.get("step")) || 1;
  const totalGuests = rooms.reduce((acc, room) => {
    return acc + room.persons + room.adults + room.children;
  }, 0);
  const selectedPlan = useSelector((state) => state.booking.selectedPlan);
  const personnelDetailRef = useRef();
  const guestDetails = useSelector((state) => state.booking.personalDetails);
  const isPastRoomSelection = currentStep > rooms.length;
  // const [isRoomsSelected, setIsRoomSelected] = useState(false);
  // console.log("personnel details", guestDetails);
  const advancePayment = useSelector((state) => state.booking.advancePayment);
  const remainingAmount = useSelector((state) => state.booking.remainingAmount);

  const handleNextStep = () => {
    if (currentStep === 1) {
      // Check if planName is missing or roomPrice is 0
      if (!selectedRooms[0]?.planName) {
        // alert("Please select a plan for the first room before proceeding.");
        toast.error(
          "Please select a plan for the first room before proceeding."
        );
        return;
      }

      if (
        selectedRooms[0]?.roomPrice === 0 ||
        selectedRooms[0]?.roomPrice == null
      ) {
        // alert(
        //   "The room price for the first room cannot be zero. Please select a valid plan."
        // );
        toast.error(
          "The room price for the first room cannot be zero. Please select a valid plan."
        );
        return;
      }
    }

    if (currentStep === 2 && rooms.length > 1) {
      // Check if planName is missing or roomPrice is 0 for the second room
      if (!selectedRooms[1]?.planName) {
        // alert("Please select a plan for the second room before proceeding.");
        toast.error(
          "Please select a plan for the second room before proceeding."
        );
        return;
      }

      if (
        selectedRooms[1]?.roomPrice === 0 ||
        selectedRooms[1]?.roomPrice == null
      ) {
        // alert(
        //   "The room price for the second room cannot be zero. Please select a valid plan."
        // );
        toast.error(
          "The room price for the second room cannot be zero. Please select a valid plan."
        );
        return;
      }
    }

    if (currentStep === totalSteps - 1) {
      if (!personnelDetailRef.current?.validateForm()) {
        return;
      }
    }

    // Proceed to the next step
    queryParams.set("step", currentStep + 1);
    navigate(`?${queryParams.toString()}`, { replace: true });
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      dispatch(setErrors({}));
      queryParams.set("step", currentStep - 1);
      navigate(`?${queryParams.toString()}`, { replace: true });
    }
  };

  const handleProceedToCheckout = async () => {
    try {
      // Load Razorpay script dynamically (if not already loaded)
      if (!window.Razorpay) {
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.async = true;
        script.onload = () => handlePayment();
        document.body.appendChild(script);
      } else {
        handlePayment();
      }
    } catch (error) {
      console.error("Error loading Razorpay:", error);
      // alert("❌ Failed to initiate payment.");
      toast.error("Failed to initiate payment.");
    }
  };

  const handlePayment = async () => {
    try {
      const amountToPay = advancePayment > 0 ? advancePayment : totalAmount;
      // Create an order from your backend
      const { data } = await axios.post(
        "http://localhost:3000/payments/create-order",
        {
          // amount: {totalAmount},
          amount: amountToPay,
          currency: "INR",
        }
      );

      const options = {
        key: "rzp_test_yb7RLsIfkH5SIq", // Replace with your Razorpay Key
        amount: data.amount,
        currency: data.currency,
        name: "Plumeria Resort",
        description: "Booking Payment",
        order_id: data.id,
        handler: async (response) => {
          // Verify payment with backend
          const verifyRes = await axios.post(
            "http://localhost:3000/payments/verify-payment",
            {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            }
          );

          if (verifyRes.data.success) {
            // alert("✅ Payment Successful!");
            toast.success("Payment Successful!");
            navigate("/booking-success"); // Redirect after success
          } else {
            // alert("❌ Payment Verification Failed!");
            toast.error("Payment Verification Failed!");
          }
        },
        prefill: {
          name: `${guestDetails.firstName} ${guestDetails.lastName}`,
          email: `${guestDetails.email}`,
          contact: `${guestDetails.phone}`,
        },
        theme: {
          color: "#A77A3A",
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error("Payment Error:", error);
      // alert("❌ Error processing payment");
      toast.error("Error processing payment");
    }
  };

  return (
    <div className="booking-container">
      {/* Step Indicator */}
      <ToastContainer position="top-right" autoClose={3000} />
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

      {currentStep <= rooms.length ? (
        <RoomSelection
          rooms={rooms}
          currentStep={currentStep}
          totalGuests={totalGuests}
        />
      ) : currentStep === totalSteps - 1 ? (
        <PersonalDetails
          onNext={handleNextStep}
          selectedPlan={selectedPlan}
          ref={personnelDetailRef}
        />
      ) : (
        <div>
          <PaymentDetails selectedPlan={selectedPlan} offer={true} />
        </div>
      )}

      <div className="navigation-buttons">
        {currentStep > 1 && (
          <button onClick={handlePrevStep} className="prev-step-button">
            Previous
          </button>
        )}
        {currentStep < totalSteps ? (
          <button onClick={handleNextStep} className="next-step-button">
            Next
          </button>
        ) : (
          <button onClick={handleProceedToCheckout} className="checkout-button">
            Proceed to Checkout
          </button>
        )}
      </div>
    </div>
  );
};

export default BookingDetailsComponent;
