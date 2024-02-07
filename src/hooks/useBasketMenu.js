import { useState } from "react";
import { filter, findIndex } from "../utils/array";

export const useBasketMenu = () => {
  const [basketMenu, setBasketMenu] = useState([]);

  const handleAddToBasket = (product) => {
    const existingProductIndex = findIndex(basketMenu, product.id);
    if (existingProductIndex !== -1) {
      const nextBasketMenu = [...basketMenu];
      nextBasketMenu[existingProductIndex].quantity += 1;
      setBasketMenu(nextBasketMenu);
    } else {
      const newProductToAdd = {
        ...product,
        quantity: 1,
      };
      setBasketMenu([newProductToAdd, ...basketMenu]);
    }
  };

  const handleDeletedBasketCard = (productId) => {
    const nextBasketMenu = filter(basketMenu, productId);
    setBasketMenu(nextBasketMenu);
  };

  return { basketMenu, handleAddToBasket, handleDeletedBasketCard };
};
