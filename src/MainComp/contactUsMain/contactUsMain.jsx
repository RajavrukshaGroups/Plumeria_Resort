import React from "react";
import ContactUs from "../../Components/ContactUs/contactUs";
import HeaderComponent from "../../Components/HeaderComp/header";
import Footer from "../../Components/Footer/footer";
import SeoHelmet from "../../seo/SeoHelmet";

function ContactUsMain() {
  return (
    <div>
      <SeoHelmet page="contact" />

      {/* Page Content */}
      <HeaderComponent />
      <ContactUs />
      <Footer />
      {/* <ContactMap /> */}
    </div>
  );
}

export default ContactUsMain;
