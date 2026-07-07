import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar({ onLogin }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      <div className="container nav-container">

        <h2 className="logo">HealthCare+</h2>

        <ul className={menuOpen ? "nav-links active" : "nav-links"}>
          <li>
            <a href="#">Home</a>
          </li>

          <li>
            <a href="#doctors">Doctors</a>
          </li>

          <li>
            <a href="#why-us">Why Us</a>
          </li>

          <li>
            <a href="#appointments">Appointments</a>
          </li>

          <li>
            <a href="#contact">Contact</a>
          </li>

          <li>
            <button
              className="login-nav-btn"
              onClick={onLogin}
            >
              Login
            </button>
          </li>
        </ul>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

    </nav>
  );
}

export default Navbar;