import { formatPrice } from "./maths";

export const deepClone = (array) => {
  return JSON.parse(JSON.stringify(array));
};

export const findAmountToPay = (array) => {
  let t = 0;
  // eslint-disable-next-line array-callback-return
  array.map(({ price, quantity }) => {
    if (!isNaN(price)) {
      t = t + price * quantity;
    }
  });
  return formatPrice(t);
};

export const findIndexById = (array, productId) => {
  return array.findIndex((item) => item.id === productId);
};

export const removedObjetById = (array, productId) => {
  return array.filter((prod) => prod.id !== productId);
};

export const isEmpty = (array) => {
  return array.length === 0;
};
