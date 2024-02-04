import React from "react";
import BasketCard from "../../../../reusable-ui/BasketCard";

export default function BasketBody({ basketMenu, handleBasketCardDeleted }) {
  return (
    <div
      className={`h-[84%]  bg-background_white text-greyBlue shadow-basket overflow-y-auto ${
        basketMenu.length === 0 &&
        "flex items-center justify-center text-4xl leading-[72px]"
      }`}
    >
      {basketMenu.length === 0 ? (
        <span>Votre commande est vide.</span>
      ) : (
        basketMenu.map((product) => (
          <BasketCard
            product={product}
            key={product.id}
            onDeleted={() => handleBasketCardDeleted(product.id)}
          />
        ))
      )}
    </div>
  );
}
