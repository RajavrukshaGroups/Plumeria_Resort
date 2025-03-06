import "./footer.css";
import RRPL_logo from "../../assets/plumeriaresortimages/RRPL_logo.webp";
import { Link } from "react-router-dom";
import logo from "../../assets/plumeriaresortimages/plumeriaresort_logo.png";
import RRPL_Group from "../../assets/plumeriaresortimages/Logo_RRPL_New.png";
import {
  FaXTwitter,
  FaYoutube,
  FaFacebookF,
  FaInstagram,
  FaBed,
  FaImages,
  FaFileContract,
  FaBellConcierge,
  FaEnvelope,
} from "react-icons/fa6";
import { FaPhoneAlt, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo-section">
          <img src={logo} alt="Plumeria Resort Logo" className="footer-logo" />
          <p className="footer-description">
            A luxurious getaway offering world-class amenities and a serene
            experience in nature. Enjoy privacy, comfort, and an escape from the
            ordinary.
          </p>
          <div className="social-icons">
            <a
              href="https://www.facebook.com/profile.php?id=61573651893436"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.youtube.com/@plumeria_Resort"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.instagram.com/plumeria_resorts/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        <div className="footer-links">
          <h3>Information Links</h3>
          <ul>
            <li>
              <FaBed className="footer-link-icon" /> Accommodations
            </li>
            <li>
              <FaImages className="footer-link-icon" />
              <Link to="/gallery">Photos & Videos</Link>
            </li>
            <li>
              <FaBellConcierge className="footer-link-icon" />
              <Link to="/facilities">Services & Amenities</Link>
            </li>
            <li>
              <FaFileContract className="footer-link-icon" /> Terms & Conditions
            </li>
            <li>
              <FaEnvelope className="footer-link-icon" />
              <Link to="/contact-us">Contact Us</Link>
            </li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Get in Touch</h3>
          <p>
            <FaPhoneAlt className="footer-icon" />
            <a
              href="tel:+916366930172"
              className="text-white hover:text-yellow-500"
            >
              +91 63669 30172
            </a>
          </p>
          <p>
            <FaEnvelope className="footer-icon" />
            <a
              href="mailto:plumeriaresort92@gmail.com"
              className="text-white hover:text-yellow-500"
            >
              plumeriaresort92@gmail.com
            </a>
          </p>
          <p>
            <FaMapMarkerAlt className="footer-icon" /> SH-91 Theppadakandi,
            Basavanahalli, Kushalnagar
          </p>
          <p>
            <FaClock className="footer-icon" /> Check-in: 1 PM
          </p>
          <p>
            <FaClock className="footer-icon" /> Check-out: 11 AM
          </p>
        </div>
      </div>

      {/* Centered Group Logo */}
      <div className="footer-group-logo-container">
        <img
          src={RRPL_Group}
          alt="Rajavruksha Group Logo"
          className="group-logo"
        />
        <p className="footer-group-text">A venture of Rajavruksha Group</p>
      </div>

      <div className="footer-bottom">
        <p>Copyright © 2025 All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
