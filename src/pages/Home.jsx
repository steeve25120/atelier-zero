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
  const featuredProducts = products
    .filter((product) => product.featured)
    .slice(0, 3);

  return (
    <>
      <section className="video-hero">
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

        <div className="video-hero__overlay" />

        <div className="video-hero__topline">
          <span>Atelier Ø — Paris</span>
          <span>Project Genesis / V.1.0</span>
        </div>

        <div className="video-hero__content">
          <p className="eyebrow">Chapter 0 — Genesis</p>

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
          <span>Scroll to enter ↓</span>
        </div>
      </section>

      <Marquee />

      <section className="current-chapter">
        <div className="current-chapter__number">
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
        <header className="chapter-section__heading">
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
          {chapters.map((chapter) => (
            <Link
              className="chapter-card"
              to={chapter.link}
              key={chapter.id}
            >
              <img
                className="chapter-card__image"
                src={chapter.image}
                alt={chapter.title}
              />

              <div className="chapter-card__overlay" />

              <span className="chapter-card__number">
                Chapter {chapter.id}
              </span>

              <div className="chapter-card__content">
                <p>{chapter.subtitle}</p>

                <h3>{chapter.title}</h3>

                <span>{chapter.description}</span>
              </div>

              <span className="chapter-card__arrow">↗</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="featured-section section-light">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Drop 001</p>
            <h2>Shop the Genesis drop</h2>
          </div>

          <Link className="text-link" to="/shop">
            View all pieces →
          </Link>
        </div>

        <div className="product-grid">
          {featuredProducts.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </section>

      <section className="image-manifesto">
        <img
          className="image-manifesto__media"
          src="/assets/visual-hand-zero.png"
          alt=""
        />

        <div className="image-manifesto__overlay" />

        <div className="image-manifesto__content">
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
        <div className="zero-circle__heading">
          <p className="eyebrow">Private access</p>

          <h2>
            Enter the
            <br />
            Zero Circle.
          </h2>
        </div>

        <div className="zero-circle__content">
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