import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import plumerialogo from "../../assets/plumeriaresortimages/plumeriaresort_logo.png";
import RRPL_logo from "../../assets/plumeriaresortimages/RRPL_logo.webp";
import "./header.css";

const HeaderComponent = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleClickContactUs = () => {
    navigate("/contact-us");
  };

  const handleClickHome=()=>{
    navigate("/")
  }

  return (
    <header className="header">
      <div className="logo" onClick={handleClickHome}>
        <img src={plumerialogo} alt="Plumeria Logo" />
        {/* <p>A venture of Rajavruksha Realtors Private Limited</p> */}
      </div>
      {/* <div className="logo">
        <img src={RRPL_logo} alt="RRPL Logo" />
      </div> */}

      {/* Desktop Navigation */}
      <nav className={`nav-links ${isOpen ? "open" : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/about-us">About Us</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/facilities">Facilities</Link>
        <button className="book-now" onClick={handleClickContactUs}>
          Contact NOW
        </button>
      </nav>

      {/* Mobile Menu Button */}
      <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
    </header>
  );
};

export default HeaderComponent;
