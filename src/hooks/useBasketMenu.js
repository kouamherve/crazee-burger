import { useState } from "react";
import { findIndexById, removedObjetById } from "../utils/array";
import { setLocalStorage } from "../utils/window";

export const useBasketMenu = () => {
  const [basketMenu, setBasketMenu] = useState([]);

  const handleAddToBasket = (productToAdd, username) => {
    const existingProductIndex = findIndexById(productToAdd.id, basketMenu);
    if (existingProductIndex !== -1) {
      const nextBasketMenu = [...basketMenu];
      nextBasketMenu[existingProductIndex].quantity += 1;
      setBasketMenu(nextBasketMenu);
      setLocalStorage(username, nextBasketMenu);
    } else {
      const newProductToAdd = {
        ...productToAdd,
        id: productToAdd.id,
        quantity: 1,
      };
      setBasketMenu([newProductToAdd, ...basketMenu]);
      setLocalStorage(username, newProductToAdd);
    }
  };

  const handleDeletedBasketCard = (productId) => {
    const nextBasketMenu = removedObjetById(productId, basketMenu);
    setBasketMenu(nextBasketMenu);
  };

  return { basketMenu, handleAddToBasket, handleDeletedBasketCard };
};
