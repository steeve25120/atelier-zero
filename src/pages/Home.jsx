import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import Marquee from "../components/Marquee";

const chapters = [
  {
    id: "01",
    title: "Void",
    subtitle: "Le point de départ.",
    description:
      "L’espace où le bruit disparaît, où l’ego s’efface et où la création peut recommencer.",
    image: "/assets/teaser-chapter-0.png",
    link: "/about",
  },
  {
    id: "02",
    title: "Impact",
    subtitle: "La rupture nécessaire.",
    description:
      "L’énergie cinétique qui permet de briser les anciennes habitudes et de provoquer le changement.",
    image: "/assets/teaser-chapter-1.png",
    link: "/shop",
  },
  {
    id: "03",
    title: "Structure",
    subtitle: "La reconstruction.",
    description:
      "La discipline transforme le vide en fondation, puis la fondation en identité.",
    image: "/assets/visual-nothing-everything.png",
    link: "/about",
  },
];

export default function Home() {
  const heroRef = useRef(null);

  const featuredProducts = products
    .filter((product) => product.featured)
    .slice(0, 3);

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
        threshold: 0.12,
        rootMargin: "0px 0px -70px 0px",
      }
    );

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);


  useEffect(() => {
    const hero = heroRef.current;

    if (!hero || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }

    const handlePointerMove = (event) => {
      const bounds = hero.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width - 0.5;
      const y = (event.clientY - bounds.top) / bounds.height - 0.5;

      hero.style.setProperty("--hero-x", `${x * 18}px`);
      hero.style.setProperty("--hero-y", `${y * 12}px`);
    };

    const resetParallax = () => {
      hero.style.setProperty("--hero-x", "0px");
      hero.style.setProperty("--hero-y", "0px");
    };

    hero.addEventListener("pointermove", handlePointerMove);
    hero.addEventListener("pointerleave", resetParallax);

    return () => {
      hero.removeEventListener("pointermove", handlePointerMove);
      hero.removeEventListener("pointerleave", resetParallax);
    };
  }, []);

  return (
    <>
      <section className="video-hero" ref={heroRef}>
        <video
          className="video-hero__media"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/assets/visual-hand-zero.png"
        >
          <source
            src="/assets/videos/hero-atelier-zero.mp4"
            type="video/mp4"
          />

          Votre navigateur ne prend pas en charge la vidéo.
        </video>

        <div className="video-hero__overlay" aria-hidden="true" />

        <div className="video-hero__topline">
          <span>Atelier Ø — Paris</span>
          <span>Project Genesis / V.1.0</span>
        </div>

        <div className="video-hero__content">
          <div className="video-hero__status">
            <span className="video-hero__status-dot" aria-hidden="true" />
            Drop 001 — Available now
          </div>

          <p className="eyebrow video-hero__eyebrow">
            Chapter 0 — Genesis
          </p>

          <h1>
            Project
            <br />
            Genesis
          </h1>

          <p className="video-hero__subtitle">
            Start from nothing. Become everything.
          </p>

          <div className="video-hero__actions">
            <Link className="primary-button" to="/shop">
              Shop the collection
            </Link>

            <Link className="secondary-button" to="/about">
              Discover the mindset
            </Link>
          </div>
        </div>

        <div className="video-hero__bottom">
          <span>Streetwear engineered for resilience</span>

          <a className="video-hero__scroll" href="#current-chapter">
            <span>Scroll to enter</span>
            <span className="video-hero__scroll-arrow" aria-hidden="true">
              ↓
            </span>
          </a>
        </div>
      </section>

      <Marquee />

      <section
        id="current-chapter"
        className="current-chapter"
        data-reveal
      >
        <div className="current-chapter__number" aria-hidden="true">
          <span>00</span>
        </div>

        <div className="current-chapter__content">
          <p className="eyebrow">The current chapter</p>

          <h2>
            Project
            <br />
            Genesis
          </h2>

          <p className="current-chapter__description">
            Atelier Zéro ne considère pas le vêtement comme une simple pièce
            textile. Chaque création devient une structure, une protection et
            le symbole d’un nouveau départ.
          </p>

          <Link className="text-link" to="/about">
            Discover our foundation →
          </Link>
        </div>
      </section>

      <section className="chapter-section">
        <header className="chapter-section__heading" data-reveal>
          <div>
            <p className="eyebrow">The Zero Mindset</p>
            <h2>Three foundations</h2>
          </div>

          <p>
            Du vide à l’impact. De l’impact à la structure. Trois étapes pour
            reconstruire une nouvelle version de soi.
          </p>
        </header>

        <div className="chapter-cards">
          {chapters.map((chapter, index) => (
            <Link
              className="chapter-card"
              to={chapter.link}
              key={chapter.id}
              data-reveal
              style={{ "--reveal-delay": `${index * 120}ms` }}
            >
              <img
                className="chapter-card__image"
                src={chapter.image}
                alt={chapter.title}
                loading="lazy"
              />

              <div
                className="chapter-card__overlay"
                aria-hidden="true"
              />

              <span className="chapter-card__number">
                Chapter {chapter.id}
              </span>

              <div className="chapter-card__content">
                <p>{chapter.subtitle}</p>

                <h3>{chapter.title}</h3>

                <span>{chapter.description}</span>
              </div>

              <span className="chapter-card__arrow" aria-hidden="true">
                ↗
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="featured-section section-light">
        <div className="section-heading" data-reveal>
          <div>
            <p className="eyebrow">Drop 001</p>
            <h2>Shop the Genesis drop</h2>
          </div>

          <Link className="text-link" to="/shop">
            View all pieces →
          </Link>
        </div>

        <div className="product-grid">
          {featuredProducts.map((product, index) => (
            <div
              key={product.id}
              data-reveal
              style={{ "--reveal-delay": `${index * 120}ms` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </section>

      <section className="image-manifesto">
        <img
          className="image-manifesto__media"
          src="/assets/visual-hand-zero.png"
          alt=""
          loading="lazy"
        />

        <div
          className="image-manifesto__overlay"
          aria-hidden="true"
        />

        <div className="image-manifesto__content" data-reveal>
          <p className="eyebrow">Atelier Zéro</p>

          <h2>
            We don’t sell clothing.
            <br />
            We engineer resilience.
          </h2>

          <Link
            className="primary-button primary-button--light"
            to="/about"
          >
            Read the manifesto
          </Link>
        </div>
      </section>

      <section className="zero-circle">
        <div className="zero-circle__heading" data-reveal>
          <p className="eyebrow">Private access</p>

          <h2>
            Enter the
            <br />
            Zero Circle.
          </h2>
        </div>

        <div className="zero-circle__content" data-reveal>
          <p>
            Accès anticipé aux prochains drops, éditions limitées et contenus
            privés Atelier Zéro.
          </p>

          <form
            className="zero-circle__form"
            onSubmit={(event) => event.preventDefault()}
          >
            <label htmlFor="newsletter-email">
              Votre adresse e-mail
            </label>

            <div>
              <input
                id="newsletter-email"
                type="email"
                placeholder="email@exemple.com"
                autoComplete="email"
                required
              />

              <button type="submit">
                Enter
              </button>
            </div>
          </form>

          <small>
            Aucun spam. Seulement les nouveaux chapitres Atelier Zéro.
          </small>
        </div>
      </section>
    </>
  );
}