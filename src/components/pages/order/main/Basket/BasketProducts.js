import React, { useContext } from "react";
import BasketCard from "./BasketCard";
import OrderContext from "../../../../../context/OrderContext";

export default function BasketProducts({
  handleDeletedBasketCard,
  basketMenu,
  isClickable,
  menu,
}) {
  const { isModeAdmin, currentTabSelected, productSelected, handleClick } =
    useContext(OrderContext);
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
          isSelected={
            isModeAdmin &&
            currentTabSelected === "edit" &&
            productSelected === product
          }
          onClick={() => handleClick(product)}
        />
      );
    }
    return null;
  });
}
