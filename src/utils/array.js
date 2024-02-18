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
