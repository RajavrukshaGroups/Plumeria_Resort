import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setPaymentAmounts } from "../../store/bookingSlice";
import "./YourStay.css";
import { useSelector } from "react-redux";
import { FaCheckCircle } from "react-icons/fa";
import { BsCircle } from "react-icons/bs";
import { AiOutlineInfoCircle } from "react-icons/ai";

const YourStay = ({ selectedPlan, offer }) => {
  const dispatch = useDispatch();
  const [paymentOption, setPaymentOption] = useState("full"); // 'partial' or 'full'
  const [advancePayment, setAdvancePayment] = useState(0);
  const [remainingAmount, setRemainingAmount] = useState(0);
  const selectedRooms = useSelector((state) => state.booking.rooms);
  const totalAmount = selectedRooms.reduce((total, room) => {
    return total + (room.roomPrice || 0) + (room.extraAdultPrice || 0);
  }, 0); // Reassign room IDs sequentially

  useEffect(() => {
    const advance = paymentOption === "full" ? totalAmount : totalAmount / 2;
    const remaining = paymentOption === "full" ? 0 : totalAmount / 2;

    setAdvancePayment(advance);
    setRemainingAmount(remaining);

    // Dispatch updated values to Redux
    dispatch(setPaymentAmounts({ advance, remaining }));
  }, [paymentOption, totalAmount, dispatch]);

  return (
    <div className="your-stay-container shadow-lg rounded-lg p-5 bg-white">
      <h3 className="your-stay-title text-lg font-bold text-[#a77a3a] border-b pb-2 mb-3">
        YOUR STAY
      </h3>

      {selectedRooms.map((room, index) => (
        <div key={index} className="stay-details space-y-2 border-b pb-3 mb-3">
          <p className="text-gray-700 text-sm font-medium flex flex-wrap items-center gap-x-2 bg-yellow-100 p-2 rounded-lg shadow-md room-head">
            <span className="font-bold text-[#a77a3a]">
              Room {room.roomId}:
            </span>
            <span className="font-semibold text-[#333]">
              {room.persons} Persons, {room.adults} Extra Adults,{" "}
              {room.children} Children
            </span>
          </p>

          <div className="stay-price text-gray-800 text-base font-semibold flex justify-between items-center">
            <span className="text-gray-600">Plan:</span>
            <span className="text-[#a77a3a] capitalize">{room.planName}</span>
          </div>

          <div className="stay-price text-gray-800 text-base font-semibold flex justify-between items-center">
            <span className="text-gray-600">Room Type:</span>
            <span className="text-[#a77a3a]">{room.roomType}</span>
          </div>

          <div className="stay-price text-gray-800 text-base font-semibold flex justify-between items-center">
            <span className="text-gray-600">Room Price:</span>
            <span className="text-[#a77a3a]">₹ {room.roomPrice || "0.00"}</span>
          </div>

          <div className="stay-price text-gray-800 text-base font-semibold flex justify-between items-center">
            <span className="text-gray-600">Extra Adult Price:</span>
            <span className="text-[#a77a3a]">
              ₹ {room.extraAdultPrice || "0.00"}
            </span>
          </div>

          <div className="stay-taxes flex items-center custom-info-text">
            <AiOutlineInfoCircle className="info-icon" />
            <span>Price is inclusive of all taxes.</span>
          </div>
        </div>
      ))}

      <div className="stay-total text-lg font-bold flex justify-between items-center border-t pt-3">
        <span className="text-gray-700">Total Amount:</span>
        <span className="text-[#a77a3a]">₹ {totalAmount}</span>
      </div>
      {paymentOption === "partial" && (
        <>
          <div className="stay-total text-base font-semibold flex justify-between items-center">
            <span className="text-gray-600">Advance Payment:</span>
            <span className="text-[#a77a3a]">₹ {advancePayment}</span>
          </div>
          <div className="stay-total text-sm font-medium flex justify-between items-center">
            <span className="text-gray-600">Pay at Check-out:</span>
            <span className="text-red-500">₹ {remainingAmount}</span>
          </div>
        </>
      )}

      {offer && (
        <div className="payment-options mt-6 flex flex-col md:flex-row gap-4">
          <div
            className={`flex-1 border rounded-md p-4 cursor-pointer transition duration-200 ${
              paymentOption === "full"
                ? "bg-[#f9f6ef] border-[#a77a3a]"
                : "border-gray-300"
            }`}
            onClick={() => setPaymentOption("full")}
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="text-[#a77a3a] font-bold">PAY FULL</span>
              </div>
              {paymentOption === "full" ? (
                <FaCheckCircle className="text-[#a77a3a]" />
              ) : (
                <BsCircle className="text-[#a77a3a]" />
              )}
            </div>
            <p className="text-sm text-gray-700 mt-2">
              Pay 100% amount now for faster check-in.
            </p>
          </div>
          <div
            className={`flex-1 border rounded-md p-4 cursor-pointer transition duration-200 ${
              paymentOption === "partial"
                ? "bg-[#f9f6ef] border-[#a77a3a]"
                : "border-gray-300"
            }`}
            onClick={() => setPaymentOption("partial")}
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="text-[#a77a3a] font-bold">PAY HALF</span>
              </div>
              {paymentOption === "partial" ? (
                <FaCheckCircle className="text-[#a77a3a]" />
              ) : (
                <BsCircle className="text-[#a77a3a]" />
              )}
            </div>
            <p className="text-sm text-gray-700 mt-2">
              Make 50% advance payment to confirm your booking.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default YourStay;
