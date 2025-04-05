import React from "react";
import { Helmet } from "react-helmet-async";
import ContactUs from "../../Components/ContactUs/contactUs";
import ContactMap from "../../Components/ContactUs/contactMap";
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
