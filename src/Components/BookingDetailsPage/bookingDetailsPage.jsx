import React, { useState, useEffect, useRef, useContext } from "react";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import RoomSelection from "../RoomSelection/RoomSelection";
import { BookingContext } from "../BookingForm/BookingContext";
import "./BookingDetailsComponent.css";
import { useSelector, useDispatch } from "react-redux";
import PersonalDetails from "../PersonnelDetails/personnelDetail";
import { setErrors } from "../../store/bookingSlice";
import PaymentDetails from "../PaymentDetails/paymentDetails";
import Loader from "../../Utils/loader";
import "react-toastify/dist/ReactToastify.css";

const BookingDetailsComponent = ({ rooms }) => {
  const dispatch = useDispatch();
  const selectedRooms = useSelector((state) => state.booking.rooms);
  const roomSelectionRef = useRef();
  const personalDetailsRef = useRef();
  const paymentDetailsRef = useRef();

  const {
    checkInDate,
    checkOutDate,
    setCheckInDate,
    setCheckOutDate,
    roomsData,
    roomsList,
    setRoomsList,
    loading,
    setLoading,
    availabilityMessage,
    setAvailabilityMessage,
    isRoomsSelected,
    setIsRoomSelected,
    invalidRooms,
    setInvalidRooms,
  } = useContext(BookingContext);
  useEffect(() => {
    // If the user reloads on step Personal Details or Payment Confirmation, redirect to step 1
    if (currentStep > rooms.length) {
      queryParams.set("step", "1");
      navigate(`?${queryParams.toString()}`, { replace: true });
    }
    // Only run this once when component mounts
  }, []);
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
  const advancePayment = useSelector((state) => state.booking.advancePayment);
  const remainingAmount = useSelector(
    (state) => state.booking.remainingPayment
  );
  const [isProcessingBooking, setIsProcessingBooking] = useState(false);

  useEffect(() => {
    scrollToCurrentSection();
  }, [currentStep]);

  // console.log("checkInDate for post", checkInDate);
  // console.log("checkOutDate for post", checkOutDate);
  // console.log("guestDetails for post", guestDetails);
  // console.log("selectedPlan for post", selectedPlan);
  // console.log("selectedRooms for post", selectedRooms);
  // console.log("advancepayment for post", advancePayment);
  // console.log("remainingamount for post", remainingAmount);
  // console.log("total guests", totalGuests);
  // console.log("total amount", totalAmount);

  const scrollToWithOffset = (ref, offset = 400) => {
    if (ref.current) {
      const elementPosition =
        ref.current.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const scrollToCurrentSection = () => {
    if (currentStep <= rooms.length) {
      scrollToWithOffset(roomSelectionRef);
    } else if (currentStep === totalSteps - 1) {
      scrollToWithOffset(personalDetailsRef);
    } else {
      scrollToWithOffset(paymentDetailsRef);
    }
  };

  const handleNextStep = () => {
    window.scrollTo(0, 0);
    if (currentStep === 1) {
      if (!selectedRooms[0]?.planName) {
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

    setTimeout(() => {
      scrollToCurrentSection();
    }, 100);
  };

  const handlePrevStep = () => {
    window.scrollTo(0, 0);

    if (currentStep > 1) {
      dispatch(setErrors({}));
      queryParams.set("step", currentStep - 1);
      navigate(`?${queryParams.toString()}`, { replace: true });

      setTimeout(() => {
        scrollToCurrentSection();
      }, 100);
    }
  };

  const handleProceedToCheckout = async () => {
    setIsProcessingBooking(true);
    try {
      // Load Razorpay script dynamically (if not already loaded)
      const checkRoomsAvailability = await axios.post(
        "https://server.plumeriaresort.in/rooms/check-availability",
        // "http://localhost:3000/rooms/check-availability",
        {
          checkInDate,
          checkOutDate,
          rooms: selectedRooms,
        }
      );
      if (checkRoomsAvailability.data?.message) {
        console.log("Availability Response ✅", checkRoomsAvailability.data);
      }
      if (!window.Razorpay) {
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.async = true;
        script.onload = () => {
          setIsProcessingBooking(false);
          handlePayment();
        };
        document.body.appendChild(script);
      } else {
        setIsProcessingBooking(false);
        handlePayment();
      }
    } catch (error) {
      console.error("Room Availability Error ❌", error);
      const errMessage =
        error.response?.data?.error ||
        "Rooms are not available. Please try different dates.";
      toast.error(errMessage);
      setIsProcessingBooking(false);
    }
  };

  const handlePayment = async () => {
    try {
      const amountToPay = advancePayment > 0 ? advancePayment : totalAmount;

      const { data } = await axios.post(
        // "http://localhost:3000/payments/create-order",
        "https://server.plumeriaresort.in/payments/create-order",
        {
          amount: amountToPay,
          currency: "INR",
        }
      );

      const options = {
        key: "rzp_test_yb7RLsIfkH5SIq",
        amount: data.amount,
        currency: data.currency,
        name: "Plumeria Resort",
        description: "Booking Payment",
        order_id: data.id,
        handler: async (response) => {
          try {
            const verifyRes = await axios.post(
              // "http://localhost:3000/payments/verify-payment",
              "https://server.plumeriaresort.in/payments/verify-payment",
              {
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
              }
            );

            if (verifyRes.data.success) {
              setIsProcessingBooking(true); // show loader
              // await axios.post("http://localhost:3000/rooms/booking", {
                await axios.post("https://server.plumeriaresort.in/rooms/booking", {
                checkInDate,
                checkOutDate,
                selectedRooms,
                selectedPlan,
                totalGuests,
                guestDetails,
                advancePayment,
                remainingAmount,
                totalAmount,
                amountToPay,
              });
              navigate("/booking-success");
            } else {
              toast.error("Payment Verification Failed!");
            }
          } catch (err) {
            console.error("Booking Save Error:", err);
            toast.error("Failed to complete booking. Please try again.");
          } finally {
            setIsProcessingBooking(false); // hide loader
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
      toast.error("Error processing payment");
    }
  };

  // 👇 Show loader during booking save
  if (isProcessingBooking) {
    return <Loader />;
  }

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
        <div ref={roomSelectionRef}>
          <RoomSelection
            rooms={rooms}
            currentStep={currentStep}
            totalGuests={totalGuests}
          />
        </div>
      ) : currentStep === totalSteps - 1 ? (
        <div ref={personalDetailsRef}>
          <PersonalDetails
            onNext={handleNextStep}
            selectedPlan={selectedPlan}
            ref={personnelDetailRef}
          />
        </div>
      ) : (
        <div ref={paymentDetailsRef}>
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
