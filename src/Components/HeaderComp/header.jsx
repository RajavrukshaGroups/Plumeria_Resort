import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import GroupLogo from "../../assets/plumeriaresortimages/RRPL_Group_logo_New.png";
import "./header.css";

const HeaderComponent = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleClickContactUs = () => {
    navigate("/contact-us");
  };

  const handleClickHome = () => {
    navigate("/");
  };

  return (
    <header className="header">
      <div className="logo" onClick={handleClickHome}>
        <img src={GroupLogo} alt="Plumeria Logo" />
      </div>
      {/* Desktop Navigation */}
      <nav className={`nav-links ${isOpen ? "open" : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/about-us">About Us</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/facilities">Facilities</Link>
        {/* <Link to="/booking-status">Booking Status</Link> */}

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
