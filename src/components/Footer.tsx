import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // Import social media icons
import './Footer.css';
function Footer() {
  return (
      <footer className="site-footer">
        <div className="footer-container">
          <div className="footer-section about-section">
            <h3>About Us</h3>
            <p>
              We are a leading online store providing high-quality products to our valued customers.
            </p>
          </div>
          <div className="footer-section contact-section">
            <h3>Contact Details</h3>
            <p>Email: contact@example.com</p>
            <p>Phone: +94 (91) 456-7890</p>
          </div>
          <div className="footer-section other-links">
            <h3>Other Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/Store">Shop</a></li>
              <li><a href="/About">About</a></li>
              <li><a href="/login">Admin Login</a></li>
            </ul>
          </div>
          <div className="footer-section social-media">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="#"><FaFacebook /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaInstagram /></a>
            </div>
          </div>
        </div>
      </footer>
  );
}

export default Footer;
