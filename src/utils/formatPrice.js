const FCFA_PER_EURO = 655.957;

const fcfaFormatter = new Intl.NumberFormat("fr-FR", {
  maximumFractionDigits: 0,
});

const euroFormatter = new Intl.NumberFormat("fr-FR", {
  style: "currency",
  currency: "EUR",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

export function formatPrice(price, currency = "FCFA") {
  const numericPrice = Number(price);

  if (!Number.isFinite(numericPrice)) {
    return `0 ${currency}`;
  }

  const formattedPrice = `${fcfaFormatter.format(
    numericPrice
  )} ${currency}`;

  if (currency !== "FCFA") {
    return formattedPrice;
  }

  const euroEquivalent = Math.ceil(
    numericPrice / FCFA_PER_EURO
  );

  return `${formattedPrice} (≈ ${euroFormatter.format(
    euroEquivalent
  )})`;
}