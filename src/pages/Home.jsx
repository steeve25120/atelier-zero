import { Link } from "react-router-dom";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const latestProduct = products[0];

  const featuredProducts = products
    .filter((product) => product.featured)
    .slice(0, 8);

  return (
    <div className="soft-home">
      {/* BANDE DÉFILANTE */}
      <div className="home-announcement">
        <Link
          className="home-announcement__track"
          to="/shop"
        >
          <div className="home-announcement__group">
            <span>
              PROJECT GENESIS — NEW DROP AVAILABLE
            </span>

            <span>
              ATELIER ZÉRO
            </span>

            <span>
              SHOP NOW →
            </span>

            <span>
              PROJECT GENESIS — NEW DROP AVAILABLE
            </span>

            <span>
              ATELIER ZÉRO
            </span>

            <span>
              SHOP NOW →
            </span>
          </div>

          <div
            className="home-announcement__group"
            aria-hidden="true"
          >
            <span>
              PROJECT GENESIS — NEW DROP AVAILABLE
            </span>

            <span>
              ATELIER ZÉRO
            </span>

            <span>
              SHOP NOW →
            </span>

            <span>
              PROJECT GENESIS — NEW DROP AVAILABLE
            </span>

            <span>
              ATELIER ZÉRO
            </span>

            <span>
              SHOP NOW →
            </span>
          </div>
        </Link>
      </div>

      {/* HERO VIDÉO + DERNIER PRODUIT */}
      {latestProduct && (
        <section className="soft-hero soft-hero--video">
          {/* PARTIE VIDÉO */}
          <div className="soft-video-panel">
            <video
              className="soft-video-panel__media"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            >
              <source
                src="/assets/videos/hero-atelier-zero.mp4"
                type="video/mp4"
              />

              Votre navigateur ne prend pas en charge la vidéo.
            </video>

            <div
              className="soft-video-panel__overlay"
              aria-hidden="true"
            />

            <div className="soft-video-panel__content">
              <p className="soft-video-panel__kicker">
                PROJECT GENESIS / 001
              </p>

              <h1>
                From zero.
                <br />
                Become everything.
              </h1>

              <p>
                Atelier Zéro présente sa nouvelle collection.
              </p>

              <div className="soft-video-panel__actions">
                <Link
                  className="soft-video-button soft-video-button--white"
                  to="/shop"
                >
                  Shop the drop
                </Link>

                <Link
                  className="soft-video-button soft-video-button--glass"
                  to="/about"
                >
                  Discover
                </Link>
              </div>
            </div>

            <span className="soft-video-panel__bottom">
              ATELIER ZÉRO — 2026
            </span>
          </div>

          {/* DERNIER PRODUIT */}
          <Link
            className="soft-hero__product"
            to={`/product/${latestProduct.slug}`}
          >
            <div className="soft-hero__image">
              <img
                src={latestProduct.variants[0].image}
                alt={latestProduct.name}
              />

              <span className="soft-hero__badge">
                New
              </span>
            </div>

            <div className="soft-hero__product-info">
              <div>
                <span>
                  Latest release
                </span>

                <h2>
                  {latestProduct.name}
                </h2>
              </div>

              <span>
                Discover →
              </span>
            </div>
          </Link>
        </section>
      )}

      {/* PRODUITS */}
      <section
        className="home-products"
        id="new-drop"
      >
        <div className="home-products__heading">
          <div>
            <p className="soft-kicker">
              CURRENT DROP
            </p>

            <h2>
              New arrivals
            </h2>
          </div>

          <Link to="/shop">
            View all products →
          </Link>
        </div>

        <div className="product-grid product-grid--home">
          {featuredProducts.map((product) => (
            <ProductCard
              product={product}
              key={product.id}
            />
          ))}
        </div>
      </section>

      {/* IDENTITÉ DE MARQUE */}
      <section className="home-message">
        <p>
          ATELIER ZÉRO / 00
        </p>

        <h2>
          FROM ZERO
          <br />
          TO EVERYTHING.
        </h2>

        <div>
          <p>
            Streetwear conçu autour d’une idée simple :
            repartir de zéro pour construire quelque chose
            de nouveau.
          </p>

          <Link to="/about">
            Discover Atelier Zéro →
          </Link>
        </div>
      </section>
    </div>
  );
}