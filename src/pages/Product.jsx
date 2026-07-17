import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";
import { formatPrice } from "../utils/formatPrice";

export default function Product() {
  const { slug } = useParams();
  const { addToCart } = useCart();

  const product = products.find(
    (item) => item.slug === slug
  );

  const firstVariant = product?.variants?.[0];

  const [selectedVariantId, setSelectedVariantId] = useState(
    firstVariant?.id || ""
  );

  const [selectedImageIndex, setSelectedImageIndex] =
    useState(0);

  const [selectedSize, setSelectedSize] = useState(
    firstVariant?.sizes?.[0] || "M"
  );

  const selectedVariant = useMemo(() => {
    if (!product) {
      return null;
    }

    return (
      product.variants.find(
        (variant) => variant.id === selectedVariantId
      ) || product.variants[0]
    );
  }, [product, selectedVariantId]);

  if (!product || !selectedVariant) {
    return (
      <section className="page-shell not-found">
        <p className="eyebrow">
          Produit introuvable
        </p>

        <h1>
          Retour à zéro.
        </h1>

        <Link
          className="primary-button"
          to="/shop"
        >
          Retour au shop
        </Link>
      </section>
    );
  }

  const selectedImage =
    selectedVariant.gallery[selectedImageIndex] ||
    selectedVariant.gallery[0];

  const selectedSizeAvailable =
    selectedVariant.stock?.[selectedSize] !== false;

  const getImageUrl = (image, index) => {
    return `${image}?variant=${selectedVariant.id}&view=${index}`;
  };

  const changeVariant = (variantId) => {
    const newVariant = product.variants.find(
      (variant) => variant.id === variantId
    );

    if (!newVariant) {
      return;
    }

    setSelectedVariantId(newVariant.id);
    setSelectedImageIndex(0);
    setSelectedSize(newVariant.sizes[0]);
  };

  const handleAddToCart = () => {
    if (!selectedSizeAvailable) {
      return;
    }

    addToCart(
      product,
      selectedSize,
      1,
      selectedVariant
    );
  };

  return (
    <section className="product-page page-shell">
      <div
        className="product-gallery"
        key={`gallery-${selectedVariant.id}`}
      >
        <div className="product-gallery-main">
          <img
            key={`main-${selectedVariant.id}-${selectedImageIndex}`}
            src={getImageUrl(
              selectedImage,
              selectedImageIndex
            )}
            alt={`${product.name} - ${selectedVariant.color}`}
          />
        </div>

        <div className="product-thumbnails">
          {selectedVariant.gallery.map(
            (image, index) => (
              <button
                type="button"
                key={`thumbnail-${selectedVariant.id}-${index}`}
                className={
                  selectedImageIndex === index
                    ? "active"
                    : ""
                }
                onClick={() =>
                  setSelectedImageIndex(index)
                }
                aria-label={`Afficher la vue ${
                  index + 1
                } en ${selectedVariant.color}`}
              >
                <img
                  src={getImageUrl(image, index)}
                  alt={`${product.name} ${
                    selectedVariant.color
                  } - vue ${index + 1}`}
                />
              </button>
            )
          )}
        </div>
      </div>

      <aside className="product-info">
        <p className="eyebrow">
          {product.chapter} / {product.category}
        </p>

        <h1>
          {product.name}
        </h1>

        <p className="product-price">
          {formatPrice(
            product.price,
            product.currency
          )}
        </p>

        <p className="product-description">
          {product.description}
        </p>

        <div className="variant-selector">
          <div className="selection-heading">
            <span>
              Couleur
            </span>

            <strong>
              {selectedVariant.color}
            </strong>
          </div>

          <div className="variant-options">
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
                  changeVariant(variant.id)
                }
                aria-label={`Choisir la couleur ${variant.color}`}
              >
                <span
                  className="variant-color-swatch"
                  style={{
                    backgroundColor:
                      variant.colorValue,
                  }}
                />

                <span>
                  {variant.color}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="selection-block">
          <div className="selection-heading">
            <span>
              Sélectionner une taille
            </span>

            <button type="button">
              Guide des tailles
            </button>
          </div>

          <div className="size-grid">
            {selectedVariant.sizes.map((size) => {
              const available =
                selectedVariant.stock?.[size] !== false;

              return (
                <button
                  type="button"
                  key={size}
                  disabled={!available}
                  className={[
                    selectedSize === size
                      ? "active"
                      : "",
                    !available
                      ? "unavailable"
                      : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  onClick={() => {
                    if (available) {
                      setSelectedSize(size);
                    }
                  }}
                >
                  {size}
                </button>
              );
            })}
          </div>
        </div>

        <button
          type="button"
          className="primary-button primary-button--full"
          onClick={handleAddToCart}
          disabled={!selectedSizeAvailable}
        >
          {selectedSizeAvailable
            ? "Ajouter au panier"
            : "Taille indisponible"}
        </button>

        <div className="product-accordions">
          <details open>
            <summary>
              Description
            </summary>

            <p>
              {product.longDescription}
            </p>
          </details>

          <details>
            <summary>
              Détails du produit
            </summary>

            <ul>
              {product.details.map((detail) => (
                <li key={detail}>
                  {detail}
                </li>
              ))}
            </ul>
          </details>

          <details>
            <summary>
              Coupe et taille
            </summary>

            <ul>
              {product.fit.map((item) => (
                <li key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </details>

          <details>
            <summary>
              Composition
            </summary>

            <ul>
              {product.composition.map((item) => (
                <li key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </details>

          <details>
            <summary>
              Conseils d’entretien
            </summary>

            <ul>
              {product.care.map((item) => (
                <li key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </details>

          <details>
            <summary>
              Livraison internationale
            </summary>

            <p>
              Les frais et délais sont confirmés sur
              WhatsApp selon la destination.
            </p>
          </details>

          <details>
            <summary>
              Validation de la commande
            </summary>

            <p>
              La disponibilité, les frais de livraison
              et le paiement sont confirmés directement
              avec Atelier Zéro sur WhatsApp.
            </p>
          </details>
        </div>
      </aside>
    </section>
  );
}