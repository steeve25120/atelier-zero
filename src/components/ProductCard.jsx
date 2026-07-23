import { useState } from "react";
import { Link } from "react-router-dom";
import { formatPrice } from "../utils/formatPrice";

export default function ProductCard({ product }) {
  const [selectedVariantId, setSelectedVariantId] =
    useState(product.variants[0].id);

  const selectedVariant =
    product.variants.find(
      (variant) => variant.id === selectedVariantId
    ) || product.variants[0];

  return (
    <article
      className={`product-card ${
        product.soldOut ? "product-card--sold-out" : ""
      }`}
    >
      <Link
        className="product-image-wrap"
        to={`/product/${product.slug}`}
      >
        <img
          src={selectedVariant.image}
          alt={`${product.name} - ${selectedVariant.color}`}
          loading="lazy"
        />

        <span className="product-chapter">
          {product.chapter}
        </span>

        {product.soldOut && (
          <span className="product-sold-out">
            Sold out
          </span>
        )}

        <span className="product-view">
          Voir le produit
        </span>
      </Link>

      <div className="product-meta">
        <div className="product-meta__main">
          <p>{product.collection}</p>

          <h3>
            <Link to={`/product/${product.slug}`}>
              {product.name}
            </Link>
          </h3>

          <div className="product-card-colors">
            {product.variants.map((variant) => (
              <button
                type="button"
                key={variant.id}
                className={
                  selectedVariant.id === variant.id
                    ? "active"
                    : ""
                }
                onClick={() =>
                  setSelectedVariantId(variant.id)
                }
                aria-label={`Afficher la couleur ${variant.color}`}
              >
                <span
                  style={{
                    backgroundColor: variant.colorValue,
                  }}
                />

                <span className="sr-only">
                  {variant.color}
                </span>
              </button>
            ))}

            <span className="product-card-color-name">
              {selectedVariant.color}
            </span>
          </div>
        </div>

        <strong>
          {formatPrice(
            product.price,
            product.currency
          )}
        </strong>
      </div>
    </article>
  );
}