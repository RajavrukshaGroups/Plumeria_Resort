import { useState } from "react";
import { Link } from "react-router-dom";
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
        <Link to="/">Home</Link>
        <Link to="/about-us">About Us</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/facilities">Facilities</Link>
        <button className="book-now">Contact NOW</button>
      </nav>

      {/* Mobile Menu Button */}
      <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
    </header>
  );
};

export default HeaderComponent;
