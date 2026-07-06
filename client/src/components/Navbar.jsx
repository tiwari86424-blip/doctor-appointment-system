import { useState } from "react";
import { FaBars, FaTimes, FaUserCircle } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="container nav-container">

        <a href="#" className="logo">
          <span className="logo-icon">+</span>
          <span className="logo-text">HealthCare+</span>
        </a>

        <nav className={menuOpen ? "nav-links active" : "nav-links"}>
          <a href="#" onClick={closeMenu}>Home</a>
          <a href="#doctors" onClick={closeMenu}>Doctors</a>
          <a href="#whyus" onClick={closeMenu}>Why Us</a>
          <a href="#appointments" onClick={closeMenu}>Appointments</a>
          <a href="#footer" onClick={closeMenu}>Contact</a>

          <button className="login-btn">
            <FaUserCircle />
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