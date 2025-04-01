import React, { useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { useBookingContext } from "../../Components/BookingForm/BookingContext";
import AccommodationComp from "../../Components/Accommodation/accommodation";
import BookingSection from "../../Components/BookingForm";
import Footer from "../../Components/Footer/footer";
import HeaderComponent from "../../Components/HeaderComp/header";
import "../../Components/BookingForm/booking.css";
import BookingDetailsComponent from "../../Components/BookingDetailsPage/bookingDetailsPage";
import NewBookingSection from "../../Components/BookingForm/newBookingForm";

const AccommodationMain = () => {
  const location = useLocation();
  const { roomsList, checkInDate, checkOutDate, setBookingData } =
    useBookingContext();

  const queryParams = new URLSearchParams(location.search);
  const checkIn = queryParams.get("checkIn")
    ? new Date(queryParams.get("checkIn"))
    : checkInDate;
  const checkOut = queryParams.get("checkOut")
    ? new Date(queryParams.get("checkOut"))
    : checkOutDate;

  const roomsFromQuery = queryParams.get("rooms")
    ? queryParams
        .get("rooms")
        .split(",")
        .map((r, index) => {
          const [persons, adults, children] = r.split("-").map(Number);
          return { id: index + 1, persons, adults, children };
        })
    : [];

  // ✅ Memoize the combinedRooms array to prevent unnecessary re-renders
  const combinedRooms = useMemo(
    () => (roomsList.length > 0 ? roomsList : roomsFromQuery),
    [roomsList, roomsFromQuery]
  );

  const currentStep = parseInt(queryParams.get("step")) || 1;
  const isPastRoomSelection = currentStep > combinedRooms.length;

  useEffect(() => {
    setBookingData((prevData) => {
      if (
        prevData.checkIn?.getTime() === checkIn.getTime() &&
        prevData.checkOut?.getTime() === checkOut.getTime() &&
        JSON.stringify(prevData.rooms) === JSON.stringify(combinedRooms)
      ) {
        return prevData; // 🚀 No update needed, preventing infinite re-render!
      }

      return {
        ...prevData,
        checkIn,
        checkOut,
        rooms: combinedRooms,
      };
    });
  }, [checkIn, checkOut, combinedRooms, setBookingData]);

  console.log("Rooms from Query Params:", roomsFromQuery);
  console.log("Rooms from Context:", roomsList);
  console.log("Final Combined Rooms:", combinedRooms);

  return (
    <div>
      <HeaderComponent />
      <AccommodationComp />
      <NewBookingSection disableControls={isPastRoomSelection} />
      {/* <BookingSection/> */}
      <BookingDetailsComponent
        rooms={combinedRooms}
        checkIn={checkIn}
        checkOut={checkOut}
      />
      <Footer />
    </div>
  );
};

export default AccommodationMain;
