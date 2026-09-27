import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import products from "../data/products";
import { useAuth } from "../context/AuthContext";
import LoginModal from "../components/LoginModal";
import Button from "../components/Button";
import "./ProductPage.css";

function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [showLogin, setShowLogin] = useState(!user);
  const [isExiting, setIsExiting] = useState(false);

  const product = products.find((p) => p.id === id);

  const handleBack = (e) => {
    e.preventDefault();
    setIsExiting(true);
    setTimeout(() => navigate("/equipment"), 300);
  };

  if (!product) {
    return (
      <div className="product-page">
        <p>Product not found.</p>
        <a href="/equipment" onClick={handleBack}>Back to Equipment</a>
      </div>
    );
  }

  const inStock = product.stock > 0;

  return (
    <div className={`product-page ${isExiting ? "page-exit" : ""}`}>
      {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}

      <a href="/equipment" className="back-link" onClick={handleBack}>
        <span className="back-arrow">←</span>
        <span className="back-text">Back to shop</span>
      </a>

      {!user && !showLogin && (
        <button className="reopen-login" onClick={() => setShowLogin(true)}>
          Sign in to view this product
        </button>
      )}

      <div className={!user ? "product-content blurred" : "product-content"}>
        <div className="product-main">
          <div className="product-frame-wrap">
            <div className="product-frame">
              <img src={product.image} alt={product.name} />
            </div>
          </div>

          <div className="product-info">
            <h1>{product.name}</h1>

            <span className={inStock ? "stock-badge in-stock" : "stock-badge pre-order"}>
              {inStock ? `${product.stock} on hand` : "Pre-order"}
            </span>

            <p className="product-description">{product.longDescription}</p>

            <ul className="product-specs">
              {product.specs.map((spec, index) => (
                <li key={index}>{spec}</li>
              ))}
            </ul>

            <div className="product-price">₱{product.price.toLocaleString()}</div>

            <div className="payment-methods">
              <h3>Payment Methods</h3>
              <div className="payment-options">
                <span>GCash</span>
                <span>PayPal</span>
                <span>Credit/Debit Card</span>
                <span>Cash on Delivery</span>
              </div>
            </div>

            <div className="product-actions">
              <Button variant="primary">
                {inStock ? "Add to Cart" : "Pre-order Now"}
              </Button>

              {inStock && (
                <Button variant="buy">
                  Buy Now
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;