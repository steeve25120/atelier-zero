import {
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  Link,
  useParams,
} from "react-router-dom";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";
import { formatPrice } from "../utils/formatPrice";
import ProductCard from "../components/ProductCard";

export default function Product() {
  const { slug } = useParams();

  const product = products.find(
    (item) => item.slug === slug
  );

  const { addToCart } = useCart();

  const [
    selectedVariantId,
    setSelectedVariantId,
  ] = useState("");

  const [
    selectedImageIndex,
    setSelectedImageIndex,
  ] = useState(0);

  const [
    selectedSize,
    setSelectedSize,
  ] = useState("");

  const selectedVariant = useMemo(() => {
    if (!product) {
      return null;
    }

    return (
      product.variants.find(
        (variant) =>
          variant.id === selectedVariantId
      ) || product.variants[0]
    );
  }, [product, selectedVariantId]);

  useEffect(() => {
    if (!product) {
      return;
    }

    const firstVariant = product.variants[0];

    setSelectedVariantId(firstVariant.id);
    setSelectedImageIndex(0);
    setSelectedSize(firstVariant.sizes[0]);
  }, [product]);

  const relatedProducts = useMemo(() => {
    if (!product) {
      return [];
    }

    return products
      .filter(
        (item) => item.id !== product.id
      )
      .slice(0, 3);
  }, [product]);

  if (!product || !selectedVariant) {
    return (
      <section className="page-shell not-found">
        <p className="eyebrow">
          Produit introuvable
        </p>

        <h1>Retour à zéro.</h1>

        <Link
          className="primary-button"
          to="/shop"
        >
          Retour au shop
        </Link>
      </section>
    );
  }

  const isSoldOut =
    product.soldOut === true;

  const selectedImage =
    selectedVariant.gallery[
      selectedImageIndex
    ] || selectedVariant.gallery[0];

  const selectedSizeAvailable =
    !isSoldOut &&
    selectedVariant.stock?.[
      selectedSize
    ] !== false;

  const handleVariantChange = (
    variantId
  ) => {
    const newVariant =
      product.variants.find(
        (variant) =>
          variant.id === variantId
      );

    if (!newVariant) {
      return;
    }

    setSelectedVariantId(newVariant.id);
    setSelectedImageIndex(0);
    setSelectedSize(newVariant.sizes[0]);
  };

  const handleAddToCart = () => {
    if (
      isSoldOut ||
      !selectedSizeAvailable
    ) {
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
    <>
      <section className="product-page page-shell">
        <div
          className="product-gallery"
          key={selectedVariant.id}
        >
          <div className="product-gallery-main">
            <img
              key={`${selectedVariant.id}-${selectedImageIndex}`}
              src={selectedImage}
              alt={`${product.name} - ${selectedVariant.color}`}
            />

            {isSoldOut && (
              <span className="product-page-sold-out">
                Sold out
              </span>
            )}
          </div>

          <div className="product-thumbnails">
            {selectedVariant.gallery.map(
              (image, index) => (
                <button
                  type="button"
                  key={`${selectedVariant.id}-${image}`}
                  className={
                    selectedImageIndex === index
                      ? "active"
                      : ""
                  }
                  onClick={() =>
                    setSelectedImageIndex(index)
                  }
                  aria-label={`Afficher l’image ${
                    index + 1
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${selectedVariant.color} - vue ${
                      index + 1
                    }`}
                  />
                </button>
              )
            )}
          </div>
        </div>

        <aside className="product-info">
          <p className="eyebrow">
            {product.chapter} /{" "}
            {product.category}
          </p>

          <h1>{product.name}</h1>

          {isSoldOut && (
            <p className="product-sold-out-message">
              Ce produit est actuellement
              épuisé.
            </p>
          )}

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
              <span>Couleur</span>

              <strong>
                {selectedVariant.color}
              </strong>
            </div>

            <div className="variant-options">
              {product.variants.map(
                (variant) => (
                  <button
                    type="button"
                    key={variant.id}
                    className={
                      selectedVariant.id ===
                      variant.id
                        ? "active"
                        : ""
                    }
                    onClick={() =>
                      handleVariantChange(
                        variant.id
                      )
                    }
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
                )
              )}
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
              {selectedVariant.sizes.map(
                (size) => {
                  const available =
                    !isSoldOut &&
                    selectedVariant.stock?.[
                      size
                    ] !== false;

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
                }
              )}
            </div>
          </div>

          <button
            className="primary-button primary-button--full"
            type="button"
            onClick={handleAddToCart}
            disabled={
              isSoldOut ||
              !selectedSizeAvailable
            }
          >
            {isSoldOut
              ? "Sold out"
              : selectedSizeAvailable
                ? "Ajouter au panier"
                : "Taille indisponible"}
          </button>

          <div className="product-accordions">
            <details open>
              <summary>Description</summary>

              <p>{product.longDescription}</p>
            </details>

            <details>
              <summary>
                Détails du produit
              </summary>

              <ul>
                {product.details.map(
                  (detail) => (
                    <li key={detail}>
                      {detail}
                    </li>
                  )
                )}
              </ul>
            </details>

            <details>
              <summary>
                Coupe et taille
              </summary>

              <ul>
                {product.fit.map(
                  (item) => (
                    <li key={item}>
                      {item}
                    </li>
                  )
                )}
              </ul>
            </details>

            <details>
              <summary>Composition</summary>

              <ul>
                {product.composition.map(
                  (item) => (
                    <li key={item}>
                      {item}
                    </li>
                  )
                )}
              </ul>
            </details>

            <details>
              <summary>
                Conseils d’entretien
              </summary>

              <ul>
                {product.care.map(
                  (item) => (
                    <li key={item}>
                      {item}
                    </li>
                  )
                )}
              </ul>
            </details>

            <details>
              <summary>
                Livraison internationale
              </summary>

              <p>
                Les frais et délais de
                livraison sont confirmés sur
                WhatsApp selon le pays et la
                ville de destination.
              </p>
            </details>
          </div>
        </aside>
      </section>

      {relatedProducts.length > 0 && (
        <section className="related-section section-light">
          <div className="section-heading">
            <div>
              <p className="eyebrow">
                Continue the chapter
              </p>

              <h2>
                Vous aimerez aussi
              </h2>
            </div>
          </div>

          <div className="product-grid">
            {relatedProducts.map(
              (item) => (
                <ProductCard
                  product={item}
                  key={item.id}
                />
              )
            )}
          </div>
        </section>
      )}
    </>
  );
}