import { useState } from "react";
import contact from "../../assets/plumeriaresortimages/contact-us-new.jpeg";

const CheckBookingCompStatus = () => {
  const [bookingId, setBookingId] = useState("");
  const [status, setStatus] = useState(null);
  const [bookingDetails, setBookingDetails] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!bookingId.trim()) {
      setStatus("❌ Please enter a valid Booking ID.");
      setBookingDetails(null);
      return;
    }

    setStatus("🔄 Fetching booking details...");
    setBookingDetails(null);

    try {
      const response = await fetch(
        `http://localhost:3000/bookings/check-status/${bookingId}`
      );
      const data = await response.json();

      if (response.ok) {
        setStatus(`✅ Booking found for ID: ${bookingId}`);
        setBookingDetails(data.booking);
      } else {
        setStatus(`❌ ${data.message}`);
      }
    } catch (error) {
      setStatus("❌ Error fetching booking. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="w-full h-[460px] relative overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={contact}
          alt="contact"
        />
        <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-60">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-wider">
            Check Booking Status
          </h1>
        </div>
      </div>

      {/* Form Section */}
      <div className="max-w-lg mx-auto mt-12 px-4 sm:px-6 lg:px-8 mb-6">
        <div className="bg-white shadow-xl rounded-3xl p-8 border border-[#a68a64]">
          <h2 className="text-lg font-bold text-center text-[#a77a3a] mb-6">
            Booking ID Lookup
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              value={bookingId}
              onChange={(e) => setBookingId(e.target.value)}
              placeholder="Enter Booking ID"
              className="w-full px-5 py-3 border border-[#d4c2a2] rounded-xl text-lg text-black focus:outline-none focus:ring-2 focus:ring-[#a68a64]"
            />
            <button
              type="submit"
              className="mt-2 w-full bg-transparent text-[#a77a3a] border border-[#a77a3a] py-2 px-4 rounded text-lg font-semibold hover:bg-[#a77a3a] hover:text-white transition-all duration-300"
            >
              Check Status
            </button>
          </form>

          {status && (
            <div className="mt-6 text-center text-[#333] font-medium bg-[#fff8ef] p-4 rounded-xl border border-[#e5d0b0]">
              {status}
            </div>
          )}

          {bookingDetails && (
            <div className="mt-6 text-sm text-[#222] bg-[#faf6f1] border border-[#e4d1b5] rounded-2xl p-6 space-y-5 shadow-md">
              {/* Customer Info */}
              <div>
                <h3 className="text-[#a77a3a] font-bold text-lg mb-2">
                  👤 Guest Details
                </h3>
                <p>
                  <strong>Name:</strong> {bookingDetails.customerName}
                </p>
                <p>
                  <strong>Email:</strong> {bookingDetails.contactInfo.email}
                </p>
                <p>
                  <strong>Phone:</strong> {bookingDetails.contactInfo.phone}
                </p>
              </div>

              {/* Booking Info */}
              <div>
                <h3 className="text-[#a77a3a] font-bold text-lg mb-2">
                  🏨 Booking Information
                </h3>
                <p>
                  <strong>Check-in:</strong> {bookingDetails.checkInDate}
                </p>
                <p>
                  <strong>Check-out:</strong> {bookingDetails.checkOutDate}
                </p>
                <p>
                  <strong>Room Type(s):</strong>{" "}
                  {bookingDetails.roomTypes.join(", ")}
                </p>
              </div>

              {/* Guests Breakdown */}
              <div>
                <h3 className="text-[#a77a3a] font-bold text-lg mb-2">
                  🧑‍🤝‍🧑 Guest Breakdown
                </h3>
                <div className="grid grid-cols-1 gap-2">
                  {bookingDetails.totalGuests.map((g, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-[#fff8ef] rounded-xl border border-[#e3cba9] shadow-sm"
                    >
                      <p className="font-medium">Room {idx + 1}</p>
                      <p>
                        {g.persons} Person(s), {g.adult} Adult(s), {g.children}{" "}
                        Child(ren)
                      </p>
                    </div>
                  ))}
                </div>
                <p className="mt-3 font-semibold text-[#a77a3a]">
                  Total Guests:{" "}
                  {bookingDetails.totalGuests.reduce(
                    (total, g) =>
                      total +
                      (g.persons || 0) +
                      (g.adult || 0) +
                      (g.children || 0),
                    0
                  )}
                </p>
              </div>

              {/* Payment Info */}
              <div>
                <h3 className="text-[#a77a3a] font-bold text-lg mb-2">
                  💳 Payment Details
                </h3>
                <p>
                  <strong>Total Cost:</strong> ₹{bookingDetails.totalCost}
                </p>
                <p>
                  <strong>Amount Due:</strong> ₹
                  {bookingDetails.payment.balanceDue}
                </p>
                <p>
                  <strong>Method:</strong> {bookingDetails.payment.method}
                </p>
              </div>

              {/* Booking Status */}
              <div>
                <p className="mt-4">
                  <strong>Status:</strong>{" "}
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                      bookingDetails.bookingStatus === "Confirmed"
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {bookingDetails.bookingStatus}
                  </span>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckBookingCompStatus;
