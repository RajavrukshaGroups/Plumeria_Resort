import React, { useState, forwardRef, useImperativeHandle } from "react";
import YourStay from "../YourStay/YourStay";
import { useSelector } from "react-redux";
import { useBookingContext } from "../BookingForm/BookingContext";

const PersonalDetails = forwardRef(({ onNext, selectedPlan }, ref) => {
  const selectedRooms = useSelector((state) => state.booking.rooms);
    const { roomsList, checkInDate, checkOutDate, setBookingData } =
      useBookingContext();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    gstNumber: "",
    specialRequests: "",
    agreeTerms: false,
  });

  console.log("checkIn",checkInDate);
  console.log("checkOut",checkOutDate);
  console.log("roomslist",roomsList);

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.firstName.trim())
      newErrors.firstName = "First Name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    if (!formData.phone.trim()) newErrors.phone = "Phone Number is required.";
    if (!formData.agreeTerms)
      newErrors.agreeTerms = "You must agree to the terms.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Expose validateForm to the parent component
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
                value={formData.firstName}
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
              value={formData.lastName}
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
                value={formData.email}
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
                value={formData.phone}
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
            value={formData.specialRequests}
            onChange={handleChange}
            className="border p-2 rounded w-full h-20"
            maxLength={500}
          />
          <p className="text-right text-gray-500 text-sm">0/500</p>

          <div className="flex items-center">
            <input
              type="checkbox"
              name="agreeTerms"
              checked={formData.agreeTerms}
              onChange={handleChange}
              className="mr-2"
            />
            <label className="text-gray-700 text-sm">
              I have read and agree to the{" "}
              <span className="text-yellow-600 cursor-pointer">
                Privacy Policy
              </span>{" "}
              and{" "}
              <span className="text-yellow-600 cursor-pointer">
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
