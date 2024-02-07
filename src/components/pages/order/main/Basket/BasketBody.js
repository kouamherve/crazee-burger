import React from "react";
import EmptyBasket from "./EmptyBasket";
import BasketProducts from "./BasketProducts";

export default function BasketBody({
  basketMenu,
  handleDeletedBasketCard,
  isHoverable,
}) {
  const isEmptyBasket = basketMenu.length === 0;
  return (
    <div
      className={`h-[84%]  bg-background_white text-greyBlue shadow-basket overflow-y-auto ${
        isEmptyBasket &&
        "flex items-center justify-center text-4xl leading-[72px]"
      }`}
    >
      {isEmptyBasket ? (
        <EmptyBasket />
      ) : (
        <BasketProducts
          basketMenu={basketMenu}
          handleDeletedBasketCard={handleDeletedBasketCard}
          isHoverable={isHoverable}
        />
      )}
    </div>
  );
}
