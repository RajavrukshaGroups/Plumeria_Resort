import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import contact from "../../assets/plumeriaresortimages/contact-us-new.jpeg";
import Loader from "../../Utils/loader"; // Import the Loader component
import "./contact.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    phone: "",
    email: "",
    subject: "",
    notes: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false); // State for loader

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Remove the error message as the user types
    setErrors((prevErrors) => {
      if (prevErrors[name]) {
        const newErrors = { ...prevErrors };
        delete newErrors[name];
        return newErrors;
      }
      return prevErrors;
    });
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.notes.trim()) newErrors.notes = "Notes cannot be empty";

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be exactly 10 digits";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true); // Show loader when submitting

    try {
      const response = await fetch(
        "https://servermain.rajavrukshagroup.in/plumeriacontact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({
          name: "",
          lastName: "",
          phone: "",
          email: "",
          subject: "",
          notes: "",
        });
        setErrors({});
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      alert("An error occurred. Please try again later.");
    } finally {
      setLoading(false); // Hide loader after response
    }
  };

  return (
    <div className="overflow-hidden">
      {" "}
      {/* Prevent unwanted scrolling */}
      {loading && <Loader />} {/* Show Loader when loading is true */}
      {/* Hero Section */}
      <div className="w-full h-[460px] relative overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={contact}
          alt="contact"
        />
        <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-60">
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            CONTACT US
          </h1>
        </div>
      </div>
      {/* Contact Details & Form */}
      <div className="bg-white text-black py-12 px-6 md:px-20 lg:px-40">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="contact-us space-y-6">
            <h2 className="text-2xl md:text-3xl font-semibold">
              Contact Us --
            </h2>
            <h1 className="text-4xl md:text-5xl font-bold">Get In Touch</h1>
            <p className="text-gray-700">
              "We’d love to hear from you! Whether you have inquiries, need
              details, or are ready to book your stay, feel free to get in
              touch."
            </p>

            <div className="flex items-center space-x-4">
              <FaPhoneAlt className="text-yellow-500 text-2xl" />
              <a
                href="tel:+916366930172"
                className="text-lg font-semibold text-black hover:text-yellow-500"
              >
                +91 63669 30172
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-yellow-500 text-2xl" />
              <a
                href="mailto:plumeriaresort92@gmail.com"
                className="text-lg font-semibold text-black hover:text-yellow-500"
              >
                plumeriaresort92@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-yellow-500 text-2xl" />
              <p className="text-lg font-semibold">
                SH-91 Theppadakandi, Basavanahalli, Kushalnagar
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-6 shadow-lg rounded-lg border border-yellow-500">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="First Name"
                    className="w-full p-3 border border-yellow-500 rounded-md focus:outline-none"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm">{errors.name}</p>
                  )}
                </div>
                <div>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                    className="w-full p-3 border border-yellow-500 rounded-md focus:outline-none"
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-sm">{errors.lastName}</p>
                  )}
                </div>
              </div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full p-3 border border-yellow-500 rounded-md focus:outline-none"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone}</p>
              )}

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full p-3 border border-yellow-500 rounded-md focus:outline-none"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}

              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full p-3 border border-yellow-500 rounded-md focus:outline-none"
              />
              {errors.subject && (
                <p className="text-red-500 text-sm">{errors.subject}</p>
              )}

              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                placeholder="Notes"
                className="w-full p-3 border border-yellow-500 rounded-md focus:outline-none"
                rows="4"
              ></textarea>
              {errors.notes && (
                <p className="text-red-500 text-sm">{errors.notes}</p>
              )}

              <button
                type="submit"
                className="w-full p-3 bg-black text-white rounded-md font-semibold hover:bg-yellow-600 transition"
                disabled={loading}
              >
                {loading ? "Submitting..." : "SUBMIT"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
