import React from "react";
import BasketCard from "./BasketCard";

export default function BasketProducts({
  handleDeletedBasketCard,
  basketMenu,
  isClickable,
  menu,
}) {
  return basketMenu.map((product) => {
    const menuProduct = menu.find((item) => item.id === product.id);
    const updatedMenuProduct = { ...menuProduct, quantity: product.quantity };
    if (menuProduct) {
      return (
        <BasketCard
          product={updatedMenuProduct}
          key={product.id}
          onDeleted={() => handleDeletedBasketCard(product.id)}
          isClickable={isClickable}
        />
      );
    }
    return null;
  });
}
