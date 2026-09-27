import { Link } from "react-router-dom";
import "./Button.css";

function Button({ children, to, href, onClick, variant = "primary", type = "button" }) {
  const classMap = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    buy: "btn-buy"
  };

  const className = classMap[variant] || "btn-primary";

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