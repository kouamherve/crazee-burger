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
      const nextBasketMenu = [newProductToAdd, ...basketMenu];
      setBasketMenu(nextBasketMenu);
      setLocalStorage(username, nextBasketMenu);
    }
  };

  const handleDeletedBasketCard = (productId, username) => {
    const nextBasketMenu = removedObjetById(productId, basketMenu);
    setBasketMenu(nextBasketMenu);
    setLocalStorage(username, nextBasketMenu);
  };

  return {
    basketMenu,
    setBasketMenu,
    handleAddToBasket,
    handleDeletedBasketCard,
  };
};
