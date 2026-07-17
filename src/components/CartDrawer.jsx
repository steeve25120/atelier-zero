import { formatPrice } from "../utils/formatPrice";
import { useState } from "react";
import { useCart } from "../context/CartContext";
import { buildWhatsAppOrder } from "../utils/whatsapp";

const initialCustomer = {
  name: "",
  country: "",
  city: "",
  address: ""
};

export default function CartDrawer() {
  const {
    items,
    total,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity
  } = useCart();

  const [customer, setCustomer] = useState(initialCustomer);
  const [error, setError] = useState("");

  const handleChange = (event) => {
    setCustomer((current) => ({
      ...current,
      [event.target.name]: event.target.value
    }));
  };

  const checkout = (event) => {
    event.preventDefault();
    setError("");

    if (!items.length) {
      setError("Ajoute au moins un article.");
      return;
    }

    const hasMissingField = Object.values(customer).some((value) => !value.trim());

    if (hasMissingField) {
      setError("Complète toutes les informations de livraison.");
      return;
    }

    const url = buildWhatsAppOrder(items, customer, total);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <button
        className={`drawer-backdrop ${isCartOpen ? "drawer-backdrop--visible" : ""}`}
        onClick={() => setIsCartOpen(false)}
        aria-label="Fermer le panier"
      />

      <aside className={`cart-drawer ${isCartOpen ? "cart-drawer--open" : ""}`}>
        <div className="drawer-header">
          <div>
            <p className="eyebrow">Votre sélection</p>
            <h2>Panier</h2>
          </div>
          <button onClick={() => setIsCartOpen(false)} aria-label="Fermer">×</button>
        </div>

        <div className="drawer-content">
          {!items.length ? (
            <div className="empty-cart">
              <p>Le panier est encore vide.</p>
              <button className="text-link" onClick={() => setIsCartOpen(false)}>
                Continuer la visite
              </button>
            </div>
          ) : (
            items.map((item) => (
              <article className="cart-item" key={item.key}>
                <img src={item.image} alt={item.name} />
                <div className="cart-item-info">
                  <div>
                    <h3>{item.name}</h3>
                    <p>{item.size} · {item.color}</p>
                  </div>
                 <p>
  {formatPrice(
    item.price * item.quantity,
    item.currency
  )}
</p>
                  <div className="quantity-control">
                    <button onClick={() => updateQuantity(item.key, item.quantity - 1)}>−</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.key, item.quantity + 1)}>+</button>
                  </div>
                  <button className="remove-link" onClick={() => removeFromCart(item.key)}>
                    Supprimer
                  </button>
                </div>
              </article>
            ))
          )}
        </div>

        <form className="checkout-form" onSubmit={checkout}>
          <div className="checkout-total">
            <span>Sous-total</span>
            <strong>
  {formatPrice(
    total,
    items[0]?.currency || "FCFA"
  )}
</strong>
          </div>

          <p className="checkout-note">
            Les frais de livraison seront confirmés sur WhatsApp.
          </p>

          <div className="form-grid">
            <input name="name" placeholder="Nom complet" value={customer.name} onChange={handleChange} />
            <input name="country" placeholder="Pays" value={customer.country} onChange={handleChange} />
            <input name="city" placeholder="Ville" value={customer.city} onChange={handleChange} />
            <input name="address" placeholder="Adresse" value={customer.address} onChange={handleChange} />
          </div>

          {error && <p className="form-error">{error}</p>}

          <button className="primary-button primary-button--full" type="submit">
            Commander sur WhatsApp
          </button>
        </form>
      </aside>
    </>
  );
}
