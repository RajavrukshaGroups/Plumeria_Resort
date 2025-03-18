import { useLocation } from "react-router-dom";
import AccommodationComp from "../../Components/Accommodation/accommodation";
import BookingSection from "../../Components/BookingForm";
import Footer from "../../Components/Footer/footer";
import HeaderComponent from "../../Components/HeaderComp/header";
import "../../Components/BookingForm/booking.css";
import BookingDetailsComponent from "../../Components/BookingDetailsPage/bookingDetailsPage";

const AccommodationMain = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  // Get check-in & check-out dates
  const checkIn = queryParams.get("checkIn")
    ? new Date(queryParams.get("checkIn"))
    : new Date();
  const checkOut = queryParams.get("checkOut")
    ? new Date(queryParams.get("checkOut"))
    : new Date(new Date().setDate(new Date().getDate() + 1));

  // Decode room format (e.g., "3-0,2-1" => [{adults: 3, children: 0}, {adults: 2, children: 1}])
  const rooms = queryParams.get("rooms")
    ? queryParams
        .get("rooms")
        .split(",")
        .map((r, index) => {
          const [persons, adults, children] = r.split("-").map(Number);
          return { id: index + 1, persons, adults, children };
        })
    : [{ id: 1, persons: 1, adults: 0, children: 0 }];

console.log("rooms-accommodate",rooms)

  return (
    <div>
      <HeaderComponent />
      <AccommodationComp />
      <BookingSection
        accommodation={true}
        initialCheckIn={checkIn}
        initialCheckOut={checkOut}
        initialRooms={rooms}
      />
      <BookingDetailsComponent rooms={rooms}/>
      <Footer />
    </div>
  );
};

export default AccommodationMain;
