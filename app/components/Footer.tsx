import "../style/style.css";



import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Left Section */}
        <div className="footer-col">
          <h3 className="footer-logo">
            <span className="footer-icon">🚗</span> Auto Emporium
          </h3>
          <p className="footer-text">
            Your journey to the perfect drive starts here.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4 className="footer-heading">Quick Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">New Cars</a></li>
            <li><a href="#">Used Cars</a></li>
            <li><a href="#">Sell Your Car</a></li>
          </ul>
        </div>

        {/* About Us */}
        <div className="footer-col">
          <h4 className="footer-heading">About Us</h4>
          <ul>
            <li><a href="#">Our Dealership</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>

        {/* Social */}
        <div className="footer-col">
          <h4 className="footer-heading">Follow Us</h4>
          <div className="footer-social">
            <FaFacebookF className="social-icon" />
            <FaInstagram className="social-icon" />
            <FaTwitter className="social-icon" />
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© 2024 Auto Emporium. All Rights Reserved.</p>

        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
