import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import plumerialogo from "../../assets/plumeriaresortimages/plumeriaresort_logo.png";
import "./header.css";

const HeaderComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo">
        <img src={plumerialogo} alt="Plumeria Logo" />
      </div>

      {/* Desktop Navigation */}
      <nav className={`nav-links ${isOpen ? "open" : ""}`}>
        <a href="#">Home</a>
        <a href="#">About Us</a>
        <a href="#">Rooms</a>
        <a href="#">Services</a>
        <a href="#">Pages</a>
        <button className="book-now">BOOK NOW</button>
      </nav>

      {/* Mobile Menu Button */}
      <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
    </header>
  );
};

export default HeaderComponent;
