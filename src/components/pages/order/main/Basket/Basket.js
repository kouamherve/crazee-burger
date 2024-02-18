import React, { useContext } from "react";
import Total from "./Total";
import Footer from "./Footer";
import BasketBody from "./BasketBody";
import OrderContext from "../../../../../context/OrderContext";
import { calculateSumToPay } from "./helper";

export default function Basket() {
  const { basketMenu, menu } = useContext(OrderContext);

  const sumToPay = calculateSumToPay(menu);
  const amountToPay = sumToPay(basketMenu);

  return (
    <div className="w-1/4 shadow-strong">
      <div className=" text-background_white flex flex-col h-[100%] font-amatic ">
        <Total amountToPay={amountToPay} />
        <BasketBody basketMenu={basketMenu} />
        <Footer />
      </div>
    </div>
  );
}
