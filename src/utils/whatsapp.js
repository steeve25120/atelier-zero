import { formatPrice } from "./formatPrice";

const WHATSAPP_NUMBER = "2290197664068";

export function buildWhatsAppOrder(
  items,
  customer,
  total
) {
  if (!items.length) {
    throw new Error("Le panier est vide.");
  }

  const currency = items[0]?.currency || "FCFA";

  const productsText = items
    .map((item, index) => {
      const itemTotal =
        item.price * item.quantity;

      return `${index + 1}. ${item.name}
Taille : ${item.size}
Couleur : ${item.color}
Quantité : ${item.quantity}
Prix : ${formatPrice(itemTotal, item.currency)}`;
    })
    .join("\n\n");

  const message = `Bonjour Atelier Zéro,

Je souhaite confirmer cette commande :

${productsText}

TOTAL : ${formatPrice(total, currency)}

INFORMATIONS CLIENT

Nom : ${customer.name}
Pays : ${customer.country}
Ville : ${customer.city}
Adresse : ${customer.address}

Merci de me confirmer la disponibilité, les frais de livraison et le moyen de paiement.`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message
  )}`;
}