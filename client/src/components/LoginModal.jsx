import { useState } from "react";

function LoginModal({ onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      alert("Please fill in all fields.");
      return;
    }

    alert("Login Successful! (Frontend Demo)");
    onClose();
  };

  return (
    <div className="modal-overlay">

      <div className="login-modal">

        <button
          className="close-btn"
          onClick={onClose}
        >
          ×
        </button>

        <h2>Welcome Back 👋</h2>

        <p className="login-subtitle">
          Login to manage your appointments
        </p>

        <label>Email</label>

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password</label>

        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="login-options">

          <label className="remember">
            <input type="checkbox" />
            Remember Me
          </label>

          <a href="#">Forgot Password?</a>

        </div>

        <button
          className="login-btn"
          onClick={handleLogin}
        >
          Login
        </button>

      </div>

    </div>
  );
}

export default LoginModal;