import "./footer.css";
import logo from "../../assets/plumeriaresortimages/plumeriaresort_logo.png";
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
              <FaImages className="footer-link-icon" /> Photos & Videos
            </li>
            <li>
              <FaBellConcierge className="footer-link-icon" /> Services &
              Amenities
            </li>
            <li>
              <FaFileContract className="footer-link-icon" /> Terms & Conditions
            </li>
            <li>
              <FaEnvelope className="footer-link-icon" /> Contact Us
            </li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Get in Touch</h3>
          <p>
            <FaPhoneAlt className="footer-icon" /> (+91) 63669 30172
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

      <div className="footer-bottom">
        <p>Copyright © 2025 All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
