import React, { useContext } from "react";
import BasketCard from "./BasketCard";
import OrderContext from "../../../../../context/OrderContext";
import { findObjectById } from "../../../../../utils/array";

export default function BasketProducts({
  handleDeletedBasketCard,
  basketMenu,
  isClickable,
  menu,
}) {
  const {
    isModeAdmin,
    currentTabSelected,
    productSelected,
    handleProductSelected,
  } = useContext(OrderContext);

  return basketMenu.map((product) => {
    const menuProduct = findObjectById(product.id, menu);
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
          onClick={isModeAdmin ? () => handleProductSelected(product) : null}
        />
      );
    }
    return null;
  });
}
