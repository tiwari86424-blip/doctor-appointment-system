import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer" id="contact">

      <div className="container footer-container">

        <div className="footer-about">
          <h2>HealthCare+</h2>
          <p>
            Making healthcare appointments simple,
            secure and convenient for everyone.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>

          <a href="#">Home</a>
          <a href="#doctors">Doctors</a>
          <a href="#appointments">Appointments</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>

          <p>📧 support@healthcare.com</p>

          <p>📞 +91 9876543210</p>

          <p>📍 New Delhi, India</p>
        </div>

        <div className="footer-social">

          <h3>Follow Us</h3>

          <div className="social-icons">

            <a href="#">
              <FaFacebookF />
            </a>

            <a href="#">
              <FaInstagram />
            </a>

            <a href="#">
              <FaLinkedinIn />
            </a>

            <a href="#">
              <FaGithub />
            </a>

          </div>

        </div>

      </div>

      <div className="copyright">
        © 2026 HealthCare+. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;