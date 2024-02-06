import React from "react";
import BasketCard from "./BasketCard";

export default function BasketProducts({
  handleDeletedBasketCard,
  basketMenu,
  isHovarable,
}) {
  return basketMenu.map((product) => (
    <BasketCard
      product={product}
      key={product.id}
      onDeleted={() => handleDeletedBasketCard(product.id)}
      isHovarable={isHovarable}
    />
  ));
}
