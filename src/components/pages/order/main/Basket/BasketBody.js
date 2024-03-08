import React from "react";
import BasketProducts from "./BasketProducts";

export default function BasketBody() {
  return (
    <div
      className={`h-[84%] bg-background_white text-greyBlue shadow-basket overflow-y-auto`}
    >
      <BasketProducts />
    </div>
  );
}
