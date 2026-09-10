import { useState } from "react";
import { Link } from "react-router-dom";
import { formatPrice } from "../utils/formatPrice";

function hasStock(variant) {
  return variant.sizes.some((size) => {
    const value =
      variant.stock?.[size];

    if (typeof value === "boolean") {
      return value;
    }

    return Number(value) > 0;
  });
}

export default function ProductCard({
  product,
}) {
  const [
    selectedVariantId,
    setSelectedVariantId,
  ] = useState(
    product.variants[0].id
  );

  const selectedVariant =
    product.variants.find(
      (variant) =>
        variant.id ===
        selectedVariantId
    ) || product.variants[0];

  const productAvailable =
    !product.soldOut &&
    product.variants.some(
      (variant) =>
        hasStock(variant)
    );

  const selectedVariantAvailable =
    hasStock(selectedVariant);

  const hoverImage =
    selectedVariant.gallery?.[1] ||
    selectedVariant.image;

  return (
    <article
      className={`product-card product-card--soft ${
        !productAvailable
          ? "product-card--sold-out"
          : ""
      }`}
    >
      <Link
        className="product-image-wrap"
        to={`/product/${product.slug}`}
      >
        <div className="product-card__image-stack">
          <img
            className="product-card__image product-card__image--main"
            src={selectedVariant.image}
            alt={`${product.name} - ${selectedVariant.color}`}
            loading="lazy"
          />

          {hoverImage !==
            selectedVariant.image && (
            <img
              className="product-card__image product-card__image--hover"
              src={hoverImage}
              alt=""
              loading="lazy"
            />
          )}
        </div>

        <span
          className={`product-card__badge ${
            !productAvailable
              ? "product-card__badge--sold"
              : ""
          }`}
        >
          {productAvailable
            ? product.badge || "New"
            : "Sold out"}
        </span>

        <span className="product-card__quick">
          Voir le produit
        </span>
      </Link>

      <div className="product-card__details">
        <div className="product-card__top">
          <div>
            <p className="product-card__collection">
              {product.collection}
            </p>

            <h3>
              <Link
                to={`/product/${product.slug}`}
              >
                {product.name}
              </Link>
            </h3>
          </div>

          <strong>
            {formatPrice(
              product.price,
              product.currency
            )}
          </strong>
        </div>

        <div className="product-card__options">
          <div className="product-card-colors">
            {product.variants.map(
              (variant) => {
                const available =
                  hasStock(variant);

                return (
                  <button
                    type="button"
                    key={variant.id}
                    className={[
                      selectedVariant.id ===
                      variant.id
                        ? "active"
                        : "",
                      !available
                        ? "sold-out"
                        : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                    onClick={() =>
                      setSelectedVariantId(
                        variant.id
                      )
                    }
                    aria-label={`Afficher ${variant.color}`}
                  >
                    <span
                      style={{
                        backgroundColor:
                          variant.colorValue,
                      }}
                    />

                    <span className="sr-only">
                      {variant.color}
                    </span>
                  </button>
                );
              }
            )}

            <span className="product-card-color-name">
              {selectedVariant.color}

              {!selectedVariantAvailable &&
                " — Sold out"}
            </span>
          </div>
        </div>

        <Link
          className="product-card__cta"
          to={`/product/${product.slug}`}
        >
          {productAvailable
            ? "Choisir taille & couleur"
            : "Voir le produit"}
          <span>→</span>
        </Link>
      </div>
    </article>
  );
}