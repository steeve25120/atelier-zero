import { useMemo, useState } from "react";
import ProductCard from "../components/ProductCard";
import { categories, products } from "../data/products";

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = useMemo(() => {
    if (activeCategory === "All") return products;
    return products.filter((product) => product.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="shop-page page-shell">
      <header className="page-intro">
        <p className="eyebrow">Collection / Project Genesis</p>
        <h1>Shop all</h1>
        <p>
          Pièces streetwear et performance pensées comme des outils de
          reconstruction.
        </p>
      </header>

      <div className="shop-toolbar">
        <div className="category-list">
          {categories.map((category) => (
            <button
              key={category}
              className={activeCategory === category ? "active" : ""}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <span>{filteredProducts.length} pièces</span>
      </div>

      <div className="product-grid product-grid--shop">
        {filteredProducts.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </section>
  );
}
