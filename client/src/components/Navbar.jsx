import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container nav-container">
        <div className="logo">
          🏥 <span>HealthCare+</span>
        </div>

        <nav className={menuOpen ? "nav-links active" : "nav-links"}>
          <a href="#">Home</a>
          <a href="#doctors">Doctors</a>
          <a href="#whyus">Why Us</a>
          <a href="#appointments">Appointments</a>
          <a href="#footer">Contact</a>

          <button className="btn btn-primary login-btn">
            Login
          </button>
        </nav>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  );
}

export default Navbar;