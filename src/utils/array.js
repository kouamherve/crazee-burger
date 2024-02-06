import { formatPrice } from "./maths";

export const deepClone = (array) => {
  return JSON.parse(JSON.stringify(array));
};

export const findTotal = (array) => {
  let t = 0;
  // eslint-disable-next-line array-callback-return
  array.map(({ price, quantity }) => {
    if (!isNaN(price)) {
      t = t + price * quantity;
    }
  });
  return formatPrice(t);
};

export const findIndex = (array, productId) => {
  return array.findIndex((item) => item.id === productId);
};

export const filter = (array, productId) => {
  return array.filter((prod) => prod.id !== productId);
};
