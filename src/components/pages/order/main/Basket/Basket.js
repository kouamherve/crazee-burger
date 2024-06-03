import React from "react";

import BasketBody from "./BasketBody/BasketBody";
import BasketHeader from "./BasketHeader/BasketHeader";
import BasketFooter from "./BasketFooter";

export default function Basket() {
  return (
    <div className="w-1/4 shadow-strong">
      <div className=" text-background_white flex flex-col h-[100%] font-amatic ">
        <BasketHeader />
        <BasketBody />
        <BasketFooter />
      </div>
    </div>
  );
}
