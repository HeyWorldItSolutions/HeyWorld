import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import location from "../../assets/svg/locationicon.svg";
import email from "../../assets/svg/emailicon.svg";
import call from "../../assets/svg/callicon.svg";
import linkedin from "../../assets/svg/linkedin.svg";

function Footer() {
  return (
    <footer>
      <div class="footer-container">
        <div class="footer-logo">
          <img src="./logo.png" alt="hey world" className="footer-logo-img" />
          <p>
            Let Us build your career together Be the first person to transform
            yourself with our unique & world class corporate level trainings.
          </p>
          <div className="social-links">
            <Link
              to="https://www.facebook.com/profile.php?id=61571470367793"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./facebook.png" alt="facebook" />
            </Link>
            <Link
              to="https://www.instagram.com/heyworldtechnologies?igsh=enY3NWJsMmkxZmNu&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./instagram.png" alt="instagram" />
            </Link>
            <Link
              to="https://www.linkedin.com/in/heyworld-it-solutions-71656133b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} alt="email" />
            </Link>
          </div>
        </div>
        <div class="footer-links">
          <h5>
            Quick <span className="text-highlight">Links</span>
          </h5>
          <ul>
            <li>
              <a href="/">About us</a>
            </li>
            <li>
              <a href="/">Blogs</a>
            </li>
            <li>
              <a href="/">Contact us</a>
            </li>
            <li>
              <a href="/">Courses</a>
            </li>
            <li>
              <a href="/">Testimonials</a>
            </li>
          </ul>
        </div>
        <div class="footer-links">
          <h5>
            Contact <span className="text-highlight">Us</span>
          </h5>
          <div className="footer-contact-section">
            <img src={location} alt="location" />
            <p>
              H.NO 1-68/4 & 1-68/5, Flat No. 201, 2nd Floor, Arunodaya Colony,
              Silicon Valley, Hi-Tech City, Madhapur, Hyderabad, Telangana
              500081
            </p>
          </div>
          <div className="footer-contact-section">
            <img src={email} alt="email" />
            <p>heyworldtechnologies@gmail.com</p>
          </div>
          <div className="footer-contact-section">
            <img src={call} alt="phone" />
            <p>
              +91 9391322822 <br />
              +91 9176140434
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
