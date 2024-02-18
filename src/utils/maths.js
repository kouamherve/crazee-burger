import { findObjectById } from "./array";

export function formatPrice(priceToFormat) {
  let price = priceToFormat;

  // @TODO: perhaps change this to if(!price) return 0
  if (!price) return "0,00 €";
  price = replaceFrenchCommaWithDot(price);

  const formattedPrice = new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
  }).format(price);
  return formattedPrice;
}

export function replaceFrenchCommaWithDot(price) {
  if (typeof price === "string") price = parseFloat(price.replace(",", "."));
  return price;
}

export const calculateTotal = (menu) => {
  return (basketMenu) => {
    let total = 0;
    basketMenu.map((basketProduct) => {
      const menuProduct = findObjectById(basketProduct.id, menu);
      if (!isNaN(menuProduct.price)) {
        total = total + menuProduct.price * basketProduct.quantity;
      }
      return null;
    });
    return formatPrice(total);
  };
};
