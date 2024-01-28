import React from "react";
import Total from "./Total";
import Footer from "./Footer";
import { formatPrice } from "../../../../../utils/maths";
import BasketBody from "./BasketBody";

export default function Basket() {
  return (
    <div className="w-1/4 shadow-strong">
      <div className=" text-background_white flex flex-col h-[100%] font-amatic ">
        <Total amountToPay={formatPrice(0)} />
        <BasketBody />
        <Footer />
      </div>
    </div>
  );
}
