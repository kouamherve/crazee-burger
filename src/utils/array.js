export const deepClone = (array) => {
  return JSON.parse(JSON.stringify(array));
};

export const findIndexById = (array, productId) => {
  return array.findIndex((item) => item.id === productId);
};

export const findObjectById = (array, productId) => {
  return array.find((item) => item.id === productId);
};

export const removedObjetById = (array, productId) => {
  return array.filter((prod) => prod.id !== productId);
};

export const isEmpty = (array) => {
  return array.length === 0;
};
