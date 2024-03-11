import { findObjectById } from "../../../../../utils/array";

export const calculateTotalPrice = (basketMenu, menu) => {
  return basketMenu.reduce((total, basketProduct) => {
    const menuProduct = findObjectById(basketProduct.id, menu);
    if (menuProduct && !isNaN(menuProduct.price)) {
      return total + menuProduct.price * basketProduct.quantity;
    }
    return total;
  }, 0);
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
