import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { itemCount, setIsCartOpen } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "header--solid" : ""}`}>
      <Link className="brand" to="/" onClick={() => setMobileOpen(false)}>
        <img src="/assets/logo-white.png" alt="Atelier Zéro" />
      </Link>

      <nav className={`nav ${mobileOpen ? "nav--open" : ""}`}>
        <NavLink to="/" onClick={() => setMobileOpen(false)}>Accueil</NavLink>
        <NavLink to="/shop" onClick={() => setMobileOpen(false)}>Shop</NavLink>
        <NavLink to="/about" onClick={() => setMobileOpen(false)}>Mentalité Zéro</NavLink>
      </nav>

      <div className="header-actions">
        <button
          className="cart-button"
          onClick={() => setIsCartOpen(true)}
          aria-label="Ouvrir le panier"
        >
          Panier <span>{String(itemCount).padStart(2, "0")}</span>
        </button>

        <button
          className="menu-button"
          onClick={() => setMobileOpen((open) => !open)}
          aria-label="Ouvrir le menu"
          aria-expanded={mobileOpen}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
