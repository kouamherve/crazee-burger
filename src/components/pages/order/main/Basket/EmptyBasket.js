import React from "react";
import { BASKET_MESSAGE } from "../../../../../enum/product";

export default function EmptyBasket({ isLoading }) {
  return (
    <div className="h-[84%] bg-background_white text-greyBlue shadow-basket overflow-y-auto flex items-center justify-center text-4xl leading-[72px]">
      <span>{isLoading ? BASKET_MESSAGE.LOADING : BASKET_MESSAGE.EMPTY}</span>
    </div>
  );
}
