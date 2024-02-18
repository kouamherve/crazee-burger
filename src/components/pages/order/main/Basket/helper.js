import { findObjectById } from "../../../../../utils/array";
import { formatPrice } from "../../../../../utils/maths";

export const calculateSumToPay = (menu) => {
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

export const productIsSelected = (
  isModeAdmin,
  currentTabSelected,
  productSelected,
  product
) => {
  return (
    isModeAdmin && currentTabSelected === "edit" && productSelected === product
  );
};
