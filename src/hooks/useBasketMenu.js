import { useState } from "react";

export const useBasketMenu = () => {
  const [basketMenu, setBasketMenu] = useState([]);

  const handleAddToBasket = (event, product) => {
    event.stopPropagation();
    const existingProductIndex = basketMenu.findIndex(
      (item) => item.id === product.id
    );
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
    setBasketMenu(basketMenu.filter((prod) => prod.id !== productId));
  };

  return { basketMenu, handleAddToBasket, handleDeletedBasketCard };
};
