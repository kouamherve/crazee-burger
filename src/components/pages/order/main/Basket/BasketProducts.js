import React from "react";
import BasketCard from "./BasketCard";

export default function BasketProducts({
  handleDeletedBasketCard,
  basketMenu,
}) {
  return basketMenu.map((product) => (
    <BasketCard
      product={product}
      key={product.id}
      onDeleted={() => handleDeletedBasketCard(product.id)}
    />
  ));
}
