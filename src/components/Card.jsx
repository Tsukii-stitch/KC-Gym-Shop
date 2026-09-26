import { Link } from "react-router-dom";
import "./Card.css";

function Card({ id, index, name, image, description, price }) {
  return (
    <Link to={`/product/${id}`} className="tag-card">
      <span className="tag-card-number">No. {String(index).padStart(2, "0")}</span>
      <div className="tag-card-hole"></div>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <div className="tag-card-footer">
        <span className="tag-card-price">₱{price.toLocaleString()}</span>
        <span className="tag-card-cta">View Product</span>
      </div>
    </Link>
  );
}

export default Card;