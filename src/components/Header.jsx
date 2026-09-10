import { useState } from "react";
import {
  Link,
  NavLink,
} from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Header() {
  const [
    mobileOpen,
    setMobileOpen,
  ] = useState(false);

  const {
    itemCount,
    setIsCartOpen,
  } = useCart();

  const closeMenu = () => {
    setMobileOpen(false);
  };

  return (
    <header className="header header--soft">
      <Link
        className="brand"
        to="/"
        onClick={closeMenu}
      >
        <img
          src="/assets/logo-white.png"
          alt="Atelier Zéro"
        />
      </Link>

      <nav
        className={`nav ${
          mobileOpen ? "nav--open" : ""
        }`}
      >
        <NavLink
          to="/"
          onClick={closeMenu}
        >
          Accueil
        </NavLink>

        <NavLink
          to="/shop"
          onClick={closeMenu}
        >
          Shop
        </NavLink>

        <NavLink
          to="/about"
          onClick={closeMenu}
        >
          À propos
        </NavLink>
      </nav>

      <div className="header-actions">
        <Link
          className="header-shop-link"
          to="/shop"
        >
          Shop
        </Link>

        <button
          className="cart-button"
          type="button"
          onClick={() =>
            setIsCartOpen(true)
          }
          aria-label="Ouvrir le panier"
        >
          Panier

          <span>
            {String(itemCount).padStart(
              2,
              "0"
            )}
          </span>
        </button>

        <button
          className="menu-button"
          type="button"
          onClick={() =>
            setMobileOpen(
              (open) => !open
            )
          }
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