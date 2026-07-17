import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <img src="/assets/logo-white.png" alt="Atelier Zéro" />

        <div>
          <p className="eyebrow">ATELIER Ø</p>
          <h2>Start from nothing.<br />Become everything.</h2>
        </div>

        <div className="footer-links">
          <Link to="/shop">Shop</Link>
          <Link to="/about">La marque</Link>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
          <a href="mailto:contact@atelierzero.com">Contact</a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Atelier Zéro</span>
        <span>France — Worldwide</span>
        <span>Version 01</span>
      </div>
    </footer>
  );
}
