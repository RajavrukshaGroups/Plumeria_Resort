import React, { useState,useEffect, forwardRef, useImperativeHandle } from "react";
import { useNavigate, Link } from "react-router-dom";
import YourStay from "../YourStay/YourStay";
import { useSelector, useDispatch } from "react-redux";
import { useBookingContext } from "../BookingForm/BookingContext";
import { setErrors, setPersonalDetails } from "../../store/bookingSlice";

const PersonalDetails = forwardRef(({ onNext, selectedPlan }, ref) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const selectedRooms = useSelector((state) => state.booking.rooms);
  const personalDetails = useSelector((state) => state.booking.personalDetails);
  const errors = useSelector((state) => state.booking.personalDetails.errors);
  const { roomsList, checkInDate, checkOutDate } = useBookingContext();

// Detect page refresh and redirect to /plans

  console.log("personaldetails", personalDetails);
  const [formData, setFormData] = useState({
    firstName: personalDetails.firstName || "",
    lastName: personalDetails.lastName || "",
    email: personalDetails.email || "",
    phone: personalDetails.phone || "",
    specialRequests: personalDetails.specialRequests || "",
    agreeTerms: personalDetails.agreeTerms || false,
  });

  const totalGuests = roomsList.reduce(
    (acc, room) => acc + room.persons + room.adults + room.children,
    0
  );

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const updatedFormData = {
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    };
    setFormData(updatedFormData);

    // Dispatch data to Redux store
    dispatch(setPersonalDetails(updatedFormData));
    dispatch(setErrors({ ...errors, [name]: "" }));
  };

  const validateForm = () => {
    let newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/; // Assumes a 10-digit phone number

    if (!formData.firstName.trim())
      newErrors.firstName = "First Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone Number is required.";
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Invalid phone number. Must be 10 digits.";
    }
    if (!formData.agreeTerms)
      newErrors.agreeTerms = "You must agree to the terms.";

    dispatch(setErrors(newErrors));
    return Object.keys(newErrors).length === 0;
  };

  useImperativeHandle(ref, () => ({
    validateForm,
  }));

  return (
    <div className="personal-details-container flex gap-8 p-6">
      <div className="w-2/3 bg-white p-6 shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold">GUEST DETAILS</h2>
        <p className="text-gray-600 mb-4">
          Please fill all relevant fields to proceed further.
        </p>

        <form className="space-y-4">
          <div className="flex gap-4">
            <div className="w-1/2">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName || personalDetails.firstName}
                onChange={handleChange}
                className="border p-2 rounded w-full"
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm">{errors.firstName}</p>
              )}
            </div>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName || personalDetails.lastName}
              onChange={handleChange}
              className="border p-2 rounded w-1/2"
            />
          </div>

          <div className="flex gap-4">
            <div className="w-1/2">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email || personalDetails.email}
                onChange={handleChange}
                className="border p-2 rounded w-full"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>
            <div className="w-1/2">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone || personalDetails.phone}
                onChange={handleChange}
                className="border p-2 rounded w-full"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone}</p>
              )}
            </div>
          </div>

          <textarea
            name="specialRequests"
            placeholder="Special Requests"
            value={formData.specialRequests || personalDetails.specialRequests}
            onChange={handleChange}
            className="border p-2 rounded w-full h-20"
            maxLength={500}
          />
          <p className="text-right text-gray-500 text-sm">0/500</p>

          <div className="flex items-center">
            <input
              type="checkbox"
              name="agreeTerms"
              checked={formData.agreeTerms || personalDetails.agreeTerms}
              onChange={handleChange}
              className="mr-2"
            />
            <label className="text-gray-700 text-sm">
              I have read and agree to the{" "}
              <span
                className="text-yellow-600 cursor-pointer"
                onClick={() => navigate("/privacy-policy")}
              >
                Privacy Policy
              </span>{" "}
              and{" "}
              <span
                className="text-yellow-600 cursor-pointer"
                onClick={() => navigate("/terms-conditions")}
              >
                Terms & Conditions
              </span>
              .
            </label>
          </div>
          {errors.agreeTerms && (
            <p className="text-red-500 text-sm">{errors.agreeTerms}</p>
          )}
        </form>
      </div>
      <YourStay selectedPlan={selectedPlan} />
    </div>
  );
});

export default PersonalDetails;
