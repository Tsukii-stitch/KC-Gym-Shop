import { useState, useMemo } from "react";
import Card from "../components/Card";
import products from "../data/products";
import "./Equipment.css";

function Equipment() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = useMemo(() => {
    const unique = [...new Set(products.map((item) => item.category))];
    return ["All", ...unique];
  }, []);

  const visibleProducts =
    activeCategory === "All"
      ? products
      : products.filter((item) => item.category === activeCategory);

  return (
    <div className="equipment-page page-enter-home">
      <section className="products">
        <div className="products-header">
          <h2>Featured Equipment</h2>
          <p>Twelve pieces, zero excuses.</p>
        </div>

        <div className="category-tabs">
          {categories.map((category) => (
            <button
              key={category}
              className={activeCategory === category ? "tab active" : "tab"}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="cards">
          {visibleProducts.map((item, index) => (
            <Card key={item.id} index={index + 1} {...item} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Equipment;