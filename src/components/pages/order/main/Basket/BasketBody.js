import React from "react";
import EmptyBasket from "./EmptyBasket";
import BasketProducts from "./BasketProducts";
import { isEmpty } from "../../../../../utils/array";

export default function BasketBody({
  basketMenu,
  handleDeletedBasketCard,
  isClickable,
  menu,
}) {
  const isEmptyBasket = isEmpty(basketMenu);
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
          isClickable={isClickable}
          menu={menu}
        />
      )}
    </div>
  );
}
