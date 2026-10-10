import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import users from "../data/users";
import { logLogin } from "../utils/logLogin";
import Popup from "./Popup";
import "./LoginModal.css";

const providerLabels = {
  google: "Google",
  facebook: "Facebook",
  apple: "Apple ID"
};

const identifierLabels = {
  google: "Username or email",
  facebook: "Username or email",
  apple: "Phone number or email"
};

function LoginModal({ onClose }) {
  const { login } = useAuth();
  const [selectedProvider, setSelectedProvider] = useState(null);
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [showWelcome, setShowWelcome] = useState(false);

  const handleProviderSelect = (provider) => {
    setSelectedProvider(provider);
    setIdentifier("");
    setPassword("");
    setError("");
  };

  const handleProviderSubmit = (e) => {
    e.preventDefault();
    const match = users.find(
      (u) => u.username === identifier.trim() && u.password === password
    );

    if (match) {
      setError("");
      login(selectedProvider, identifier);
      setShowWelcome(true);
    } else {
      setError("Invalid username or password.");
      logLogin(selectedProvider, identifier.trim(), "failed");
    }
  };

  const handlePhoneLogin = (e) => {
    e.preventDefault();
    if (phone.trim().length > 0) {
      login("phone", phone);
      setShowWelcome(true);
    }
  };

  const handleBack = () => {
    setSelectedProvider(null);
    setIdentifier("");
    setPassword("");
    setError("");
  };

  const handleWelcomeClose = () => {
    setShowWelcome(false);
    onClose();
  };

  if (showWelcome) {
    return <Popup onClose={handleWelcomeClose} />;
  }

  if (selectedProvider) {
    return (
      <div className="login-overlay">
        <div className="login-modal">
          <button className="login-close" onClick={onClose}>×</button>

          <button className="login-back" onClick={handleBack}>← Back</button>

          <h2>Sign in with {providerLabels[selectedProvider]}</h2>
          <p>Enter your {providerLabels[selectedProvider]} account details.</p>

          <form className="login-provider-form" onSubmit={handleProviderSubmit}>
            <input
              type="text"
              placeholder={identifierLabels[selectedProvider]}
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p className="login-error">{error}</p>}
            <button type="submit" className={`login-btn ${selectedProvider}`}>
              Log in with {providerLabels[selectedProvider]}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="login-overlay">
      <div className="login-modal">
        <button className="login-close" onClick={onClose}>×</button>

        <h2>Sign in to continue</h2>
        <p>Please log in to view product details and pricing.</p>

        <div className="login-buttons">
          <button className="login-btn google" onClick={() => handleProviderSelect("google")}>
            Continue with Google
          </button>
          <button className="login-btn facebook" onClick={() => handleProviderSelect("facebook")}>
            Continue with Facebook
          </button>
          <button className="login-btn apple" onClick={() => handleProviderSelect("apple")}>
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