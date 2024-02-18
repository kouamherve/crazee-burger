import React, { useContext } from "react";
import BasketCard from "./BasketCard";
import OrderContext from "../../../../../context/OrderContext";
import { findObjectById } from "../../../../../utils/array";
import { productIsSelected } from "./helper";

export default function BasketProducts() {
  const {
    isModeAdmin,
    currentTabSelected,
    productSelected,
    handleProductSelected,
    handleDeletedBasketCard,
    basketMenu,
    menu,
  } = useContext(OrderContext);

  return basketMenu.map((product) => {
    const menuProduct = findObjectById(product.id, menu);
    const updatedMenuProduct = {
      ...menuProduct,
      quantity: product.quantity,
    };

    if (menuProduct) {
      return (
        <BasketCard
          product={updatedMenuProduct}
          key={product.id}
          onDeleted={() => handleDeletedBasketCard(product.id)}
          isClickable={isModeAdmin}
          isSelected={productIsSelected(
            isModeAdmin,
            currentTabSelected,
            productSelected,
            menuProduct
          )}
          onClick={
            isModeAdmin ? () => handleProductSelected(menuProduct) : null
          }
        />
      );
    }
    return null;
  });
}
