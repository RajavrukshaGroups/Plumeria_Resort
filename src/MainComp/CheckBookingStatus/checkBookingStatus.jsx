import React from "react";
import HeaderComponent from "../../Components/HeaderComp/header";
import Footer from "../../Components/Footer/footer";
import CheckBookingCompStatus from "../../Components/CheckBookingSuccess/CheckBooking";

function CheckBookingStatus() {
  return (
    <div>
      <HeaderComponent />
      <CheckBookingCompStatus />
      <Footer />
    </div>
  );
}

export default CheckBookingStatus;
