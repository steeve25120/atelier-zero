import { useEffect } from "react";
import { Link } from "react-router-dom";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const featuredProducts = products
    .filter((product) => product.featured)
    .slice(0, 3);

  const heroProduct =
    products.find(
      (product) => product.slug === "zero-is-not-cheap-tee"
    ) ||
    featuredProducts[0] ||
    products[0];

  const heroVariant = heroProduct?.variants?.[0];
  const heroBackImage =
    heroVariant?.gallery?.[2] ||
    heroVariant?.gallery?.[1] ||
    heroVariant?.image;

  useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal]");

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => {
        element.classList.add("is-visible");
      });

      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -55px 0px",
      }
    );

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="soft-home modern-home">
      <div className="home-announcement">
        <Link className="home-announcement__track" to="/shop">
          <div className="home-announcement__group">
            <span>ZERO II ASCENSION — NEW DROP AVAILABLE</span>
            <span>ATELIER ZÉRO</span>
            <span>SHOP NOW →</span>
            <span>ZERO II ASCENSION — NEW DROP AVAILABLE</span>
            <span>ATELIER ZÉRO</span>
            <span>SHOP NOW →</span>
          </div>

          <div
            className="home-announcement__group"
            aria-hidden="true"
          >
            <span>ZERO II ASCENSION — NEW DROP AVAILABLE</span>
            <span>ATELIER ZÉRO</span>
            <span>SHOP NOW →</span>
            <span>ZERO II ASCENSION — NEW DROP AVAILABLE</span>
            <span>ATELIER ZÉRO</span>
            <span>SHOP NOW →</span>
          </div>
        </Link>
      </div>

      <section className="soft-hero soft-hero--video modern-hero">
        <div className="soft-video-panel modern-hero__video">
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

          <div className="modern-hero__index" aria-hidden="true">
            002
          </div>

          <div className="soft-video-panel__content">
            <p className="soft-video-panel__kicker">
              DROP 002 / ZERO II ASCENSION
            </p>

            <h1>
              FROM ZERO.
              <br />
              WE ASCEND.
            </h1>

            <p>
              Une nouvelle phase Atelier Zéro. Plus brute, plus affirmée,
              construite pour dépasser le point de départ.
            </p>

            <div className="soft-video-panel__actions">
              <a
                className="soft-video-button soft-video-button--white"
                href="#drop-002"
              >
                Discover Drop 002
              </a>

              <Link
                className="soft-video-button soft-video-button--glass"
                to="/shop"
              >
                Shop all
              </Link>
            </div>
          </div>

          <span className="soft-video-panel__bottom">
            ATELIER ZÉRO — OCTOBER 2026
          </span>
        </div>

        {heroProduct && heroVariant && (
          <Link
            className="soft-hero__product modern-hero-product"
            to={`/product/${heroProduct.slug}`}
          >
            <div className="soft-hero__image modern-hero-product__image">
              <img
                src={heroVariant.image}
                alt={heroProduct.name}
              />

              <span className="soft-hero__badge">
                HERO PIECE / DROP 002
              </span>

              <span className="modern-hero-product__number">
                01 / 03
              </span>
            </div>

            <div className="soft-hero__product-info modern-hero-product__info">
              <div>
                <span>Featured piece</span>
                <h2>{heroProduct.name}</h2>
              </div>

              <span>View product ↗</span>
            </div>
          </Link>
        )}
      </section>

      <section
        id="drop-002"
        className="drop-showcase"
      >
        <header className="drop-showcase__header" data-reveal>
          <div className="drop-showcase__label">
            <span>DROP</span>
            <strong>002</strong>
          </div>

          <div className="drop-showcase__title">
            <p>NEW RELEASE / OCTOBER 2026</p>
            <h2>
              ZERO II
              <br />
              ASCENSION
            </h2>
          </div>

          <div className="drop-showcase__meta">
            <div>
              <span>PIECES</span>
              <strong>03</strong>
            </div>

            <div>
              <span>CHAPTER</span>
              <strong>01</strong>
            </div>

            <Link to="/shop">
              View collection →
            </Link>
          </div>
        </header>

        <div className="product-grid product-grid--home drop-showcase__grid">
          {featuredProducts.map((product, index) => (
            <div
              className="drop-showcase__product"
              key={product.id}
              data-reveal
              style={{ "--reveal-delay": `${index * 110}ms` }}
            >
              <div className="drop-showcase__product-index">
                0{index + 1}
              </div>

              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </section>

      <section className="drop-editorial">
        <div className="drop-editorial__visual" data-reveal>
          {heroBackImage && (
            <img
              src={heroBackImage}
              alt={`${heroProduct.name} - back view`}
              loading="lazy"
            />
          )}

          <span>ZERO II / 002</span>
        </div>

        <div className="drop-editorial__content" data-reveal>
          <p className="drop-editorial__eyebrow">
            THE SECOND MOVEMENT
          </p>

          <h2>
            ZERO WAS
            <br />
            NEVER EMPTY.
          </h2>

          <p>
            ZERO II ASCENSION marque le passage du point de départ à
            l’affirmation. Trois pièces, une identité plus radicale et la même
            mentalité : construire quelque chose à partir de rien.
          </p>

          <div className="drop-editorial__links">
            <Link to="/shop">Shop Drop 002 →</Link>
            <Link to="/about">Our story →</Link>
          </div>
        </div>
      </section>

      <section className="modern-manifesto">
        <div className="modern-manifesto__number" aria-hidden="true">
          Ø
        </div>

        <div className="modern-manifesto__copy" data-reveal>
          <p>ATELIER ZÉRO / MANIFESTO</p>

          <h2>
            FROM ZERO,
            <br />
            YOU CHOSE.
          </h2>

          <div className="modern-manifesto__bottom">
            <p>
              Le zéro n’est pas une absence. C’est l’endroit où tout peut
              recommencer.
            </p>

            <Link to="/about">Discover Atelier Zéro ↗</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
