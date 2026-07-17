export function formatPrice(price, currency = "EUR") {
  if (currency === "FCFA") {
    return `${new Intl.NumberFormat("fr-FR").format(price)} FCFA`;
  }

  if (currency === "EUR") {
    return new Intl.NumberFormat("fr-FR", {
      style: "currency",
      currency: "EUR",
    }).format(price);
  }

  return `${new Intl.NumberFormat("fr-FR").format(price)} ${currency}`;
}