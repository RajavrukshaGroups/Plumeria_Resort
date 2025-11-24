import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { resetBooking } from "../../store/bookingSlice";
import { useNavigate } from "react-router-dom";
import { useBookingContext } from "../BookingForm/BookingContext";
import "./bookingSuccess.css"; // Make sure to include loader styles here
import SeoHelmet from "../../seo/SeoHelmet";

const BookingSuccess = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    setBookingData,
    setRoomsList,
    setAvailabilityMessage,
    setIsRoomSelected,
    setInvalidRooms,
    setCheckInDate,
    setCheckOutDate,
  } = useBookingContext();

  useEffect(() => {
    // 🧹 Reset Redux state
    dispatch(resetBooking());

    // 🧹 Reset Context state
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    const initialRoom = {
      id: 1,
      selectedRoom: null,
      persons: 1,
      adults: 0,
      children: 0,
    };

    setCheckInDate(today);
    setCheckOutDate(tomorrow);
    setRoomsList([initialRoom]);
    setAvailabilityMessage("");
    setIsRoomSelected(false);
    setInvalidRooms([]);
    setBookingData({
      checkIn: today,
      checkOut: tomorrow,
      rooms: [initialRoom],
    });

    const timeout = setTimeout(() => {
      navigate("/");
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="booking-success-container">
      <SeoHelmet page="bookingSuccess" />
      <h1>🎉 Booking Successful!</h1>
      <p>Thank you for booking with Plumeria Resort.</p>
      <p>Please check your email...</p>
      <div className="loader"></div> {/* 👈 Loader */}
    </div>
  );
};

export default BookingSuccess;
