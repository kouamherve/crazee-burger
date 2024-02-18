import { formatPrice } from "./maths";

export const deepClone = (array) => {
  return JSON.parse(JSON.stringify(array));
};

export const findIndexById = (productId, array) => {
  return array.findIndex((item) => item.id === productId);
};

export const findObjectById = (productId, array) => {
  return array.find((item) => item.id === productId);
};

export const removedObjetById = (productId, array) => {
  return array.filter((prod) => prod.id !== productId);
};

export const isEmpty = (array) => {
  return array.length === 0;
};

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
