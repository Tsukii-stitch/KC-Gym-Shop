import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import LoginModal from "./LoginModal";
import "./Navbar.css";

function Navbar() {
  const { user, logout } = useAuth();
  const [showLogin, setShowLogin] = useState(false);

  return (
    <header className="navbar">
      {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}

      <Link to="/" className="navbar-logo">
        <span className="navbar-logo-mark">KC</span>
        <span className="navbar-logo-text">Gym Shop</span>
      </Link>

      <div className="navbar-status">
        {user ? (
          <div className="navbar-user">
            <span>Signed in via {user.provider}</span>
            <button className="navbar-logout" onClick={logout}>
              Log out
            </button>
          </div>
        ) : (
          <button className="navbar-login" onClick={() => setShowLogin(true)}>
            Login
          </button>
        )}
      </div>
    </header>
  );
}

export default Navbar;