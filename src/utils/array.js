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
