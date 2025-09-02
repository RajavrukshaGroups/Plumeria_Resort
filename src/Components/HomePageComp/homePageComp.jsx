import { Link } from "react-router-dom";
import HeaderComponent from "../HeaderComp/header";
import "./homepage.css";
import BookingForm from "../BookingForm/newBookingForm";

const HomePageComponent = () => {
  return (
    <div className="home">
      <HeaderComponent />
      <section className="hero">
        <div className="hero-overlay">
          <h1 className="fade-in">
            Home Away from Home with Added Comfort at Our{" "}
            <span>Luxury Resort</span>
          </h1>
          <p className="fade-in">
            Nestled in the heart of breathtaking nature, our resort offers a
            truly enchanting experience that caters to every aspect of your
            stay.
          </p>
          {/* <BookingForm /> */}
        </div>
      </section>
    </div>
  );
};

export default HomePageComponent;
