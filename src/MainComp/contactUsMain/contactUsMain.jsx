import React from "react";
import { Helmet } from "react-helmet-async";
import ContactUs from "../../Components/ContactUs/contactUs";
import ContactMap from "../../Components/ContactUs/contactMap";
import HeaderComponent from "../../Components/HeaderComp/header";
import Footer from "../../Components/Footer/footer";

function ContactUsMain() {
  return (
    <div>
      <Helmet>
        {/* 🔹 SEO Optimized Title */}
        <title>
          Contact Us - Plumeria Resort | Get in Touch for Bookings & Inquiries
        </title>

        {/* 🔹 SEO Meta Description */}
        <meta
          name="description"
          content="Contact Plumeria Resort in Coorg for bookings, inquiries, and special reservations. Reach us via phone, email, or visit our resort location."
        />

        {/* 🔹 Keywords for SEO Ranking */}
        <meta
          name="keywords"
          content="Plumeria Resort contact, Coorg resort booking, luxury stay in Coorg, resort inquiry, Plumeria Resort location, contact details"
        />

        {/* 🔹 Open Graph (OG) Meta Tags for Social Media */}
        <meta
          property="og:title"
          content="Contact Plumeria Resort - Book Your Stay Today!"
        />
        <meta
          property="og:description"
          content="Have questions about Plumeria Resort? Contact us for booking assistance, resort details, or any inquiries."
        />
        {/* <meta property="og:image" content="/plumeria-contact.png" /> */}
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* Page Content */}
      <HeaderComponent />
      <ContactUs />
      <Footer />
      {/* <ContactMap /> */}
    </div>
  );
}

export default ContactUsMain;
