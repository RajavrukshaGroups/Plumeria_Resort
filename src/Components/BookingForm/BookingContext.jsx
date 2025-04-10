import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setDates, setRoom } from "../../store/bookingSlice"; // Import Redux actions

export const BookingContext = createContext();

export const useBookingContext = () => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error("useBookingContext must be used within a BookingProvider");
   }
  return context;
 };

export const BookingProvider = ({ children }) => {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  // Load from localStorage or fallback to default
  const storedCheckIn = localStorage.getItem("checkInDate");
  const storedCheckOut = localStorage.getItem("checkOutDate");
  // const [checkInDate, setCheckInDate] = useState(today);
  // const [checkOutDate, setCheckOutDate] = useState(tomorrow);
  const [checkInDate, setCheckInDate] = useState(
    storedCheckIn ? new Date(storedCheckIn) : today
  );
  const [checkOutDate, setCheckOutDate] = useState(
    storedCheckOut ? new Date(storedCheckOut) : tomorrow
  );

  const [roomsData, setRoomsData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [availabilityMessage, setAvailabilityMessage] = useState("");
  const [isRoomsSelected, setIsRoomSelected] = useState(false);
  const [invalidRooms, setInvalidRooms] = useState([]);


  useEffect(() => {
  localStorage.setItem("checkInDate", checkInDate);
  localStorage.setItem("checkOutDate", checkOutDate);
}, [checkInDate, checkOutDate]);
  // **Load roomsList from localStorage or use default**
  const getStoredRoomsList = () => {
    const storedRooms = localStorage.getItem("roomsList");
    return storedRooms ? JSON.parse(storedRooms) : [{ id: 1, selectedRoom: null, persons: 1, adults: 0, children: 0 }];
  };
  const [roomsList, setRoomsList] = useState(getStoredRoomsList);
  const [bookingData, setBookingData] = useState({
    checkIn: today,
    checkOut: tomorrow,
    rooms: roomsList,
  });

  console.log("rooms-list12", roomsList);

  useEffect(() => {
    const fetchRoomsData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/rooms");
        // const response = await axios.get("https://server.plumeriaresort.in/rooms");
        setRoomsData(response.data.data);
      } catch (err) {
        console.error("Error fetching rooms data", err);
      }
    };
    fetchRoomsData();
  }, []);

  // **Update localStorage whenever roomsList changes**
  useEffect(() => {
    localStorage.setItem("roomsList", JSON.stringify(roomsList));
  }, [roomsList]);

  const handleCheckInChange = (date) => {
    setCheckInDate(date);
    if (checkOutDate <= date) {
      const nextDay = new Date(date);
      nextDay.setDate(date.getDate() + 1);
      setCheckOutDate(nextDay);
    }
  };

  return (
    <BookingContext.Provider
      value={{
        checkInDate,
        checkOutDate,
        setCheckInDate: handleCheckInChange,
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
        bookingData,
        setBookingData,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};


