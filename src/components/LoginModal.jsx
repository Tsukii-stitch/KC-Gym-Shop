import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import "./LoginModal.css";

function LoginModal({ onClose }) {
  const { login } = useAuth();
  const [phone, setPhone] = useState("");

  const handleProviderLogin = (provider) => {
    login(provider, provider);
    onClose();
  };

  const handlePhoneLogin = (e) => {
    e.preventDefault();
    if (phone.trim().length > 0) {
      login("phone", phone);
      onClose();
    }
  };

  return (
    <div className="login-overlay">
      <div className="login-modal">
        <button className="login-close" onClick={onClose}>×</button>

        <h2>Sign in to continue</h2>
        <p>Please log in to view product details and pricing.</p>

        <div className="login-buttons">
          <button className="login-btn google" onClick={() => handleProviderLogin("google")}>
            Continue with Google
          </button>
          <button className="login-btn facebook" onClick={() => handleProviderLogin("facebook")}>
            Continue with Facebook
          </button>
          <button className="login-btn apple" onClick={() => handleProviderLogin("apple")}>
            Continue with Apple ID
          </button>
        </div>

        <div className="login-divider">or</div>

        <form className="login-phone-form" onSubmit={handlePhoneLogin}>
          <input
            type="tel"
            placeholder="Enter phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <button type="submit" className="login-btn phone">
            Continue with Number
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginModal;