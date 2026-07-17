import { useState } from "react";
import { Link } from "react-router-dom";
import { formatPrice } from "../utils/formatPrice";

export default function ProductCard({ product }) {
  const firstVariant = product?.variants?.[0] ?? null;

  const [selectedVariantId, setSelectedVariantId] = useState(
    firstVariant?.id ?? ""
  );

  const selectedVariant =
    product?.variants?.find(
      (variant) => variant.id === selectedVariantId
    ) ?? firstVariant;

  if (!product || !selectedVariant) {
    return null;
  }

  const handleVariantChange = (event, variantId) => {
    event.preventDefault();
    event.stopPropagation();

    setSelectedVariantId(variantId);
  };

  return (
    <article className="product-card">
      <Link
        to={`/product/${product.slug}`}
        className="product-image-wrap"
      >
        <img
          key={selectedVariant.id}
          src={selectedVariant.image}
          alt={`${product.name} - ${selectedVariant.color}`}
          loading="lazy"
        />

        <span className="product-chapter">
          {product.badge || product.chapter}
        </span>

        <span className="product-view">
          Voir
        </span>
      </Link>

      <div className="product-meta">
        <div className="product-meta__main">
          <p>
            {product.collection || product.category}
          </p>

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
                onClick={(event) =>
                  handleVariantChange(
                    event,
                    variant.id
                  )
                }
                aria-label={`Afficher ${variant.color}`}
                title={variant.color}
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