import { useState } from "react";
import "./Popup.css";

function Popup({ onClose }) {
  const [showPrank, setShowPrank] = useState(false);

  if (showPrank) {
    return (
      <div className="welcome-overlay">
        <div className="welcome-modal">
          <div className="welcome-badge">😂</div>
          <h2>Gotcha!</h2>
          <p>Issa prank pero thank you padin sa pag login.</p>

          <button className="welcome-close" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="welcome-overlay">
      <div className="welcome-modal">
        <div className="welcome-badge">🎉</div>
        <h2>Thank you for logging in!</h2>
        <p>Eto para sayo.</p>

        <button
          className="voucher-card voucher-clickable"
          onClick={() => setShowPrank(true)}
        >
          <span className="voucher-label">Voucher</span>
          <span className="voucher-amount">₱100 OFF</span>
          <span className="voucher-note">Valid on your next purchase</span>
        </button>

        <button className="welcome-close" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default Popup;