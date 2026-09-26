import { Link } from "react-router-dom";
import "./Button.css";

function Button({ children, to, href, onClick, variant = "primary", type = "button" }) {
  const className = variant === "primary" ? "btn-primary" : "btn-secondary";

  if (to) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={className} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;