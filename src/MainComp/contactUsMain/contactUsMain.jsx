import React from "react";
import ContactUs from "../../Components/ContactUs/contactUs";
import ContactMap from "../../Components/ContactUs/contactMap";
import HeaderComponent from "../../Components/HeaderComp/header";
import Footer from "../../Components/Footer/footer";

function ContactUsMain() {
  return (
    <div>
      <HeaderComponent />
      <ContactUs />
      <Footer />
      {/* <ContactMap /> */}
    </div>
  );
}

export default ContactUsMain;
