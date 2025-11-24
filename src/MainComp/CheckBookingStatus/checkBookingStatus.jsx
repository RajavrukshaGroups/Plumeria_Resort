import React from "react";
import HeaderComponent from "../../Components/HeaderComp/header";
import Footer from "../../Components/Footer/footer";
import CheckBookingCompStatus from "../../Components/CheckBookingSuccess/CheckBooking";
import SeoHelmet from "../../seo/SeoHelmet";

function CheckBookingStatus() {
  return (
    <div>
      <SeoHelmet page="bookingStatus" />
      <HeaderComponent />
      <CheckBookingCompStatus />
      <Footer />
    </div>
  );
}

export default CheckBookingStatus;
