import { useState } from "react";
import { findIndexById, removedObjetById } from "../utils/array";

export const useBasketMenu = () => {
  const [basketMenu, setBasketMenu] = useState([]);

  const handleAddToBasket = (productToAdd) => {
    const existingProductIndex = findIndexById(basketMenu, productToAdd.id);
    if (existingProductIndex !== -1) {
      const nextBasketMenu = [...basketMenu];
      nextBasketMenu[existingProductIndex].quantity += 1;
      setBasketMenu(nextBasketMenu);
    } else {
      const newProductToAdd = {
        ...productToAdd,
        id: productToAdd.id,
        quantity: 1,
      };
      setBasketMenu([newProductToAdd, ...basketMenu]);
    }
  };

  const handleDeletedBasketCard = (productId) => {
    const nextBasketMenu = removedObjetById(basketMenu, productId);
    setBasketMenu(nextBasketMenu);
  };

  return { basketMenu, handleAddToBasket, handleDeletedBasketCard };
};
