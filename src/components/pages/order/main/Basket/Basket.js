import React, { useContext } from "react";
import Total from "./Total";
import Footer from "./Footer";
import BasketBody from "./BasketBody";
import OrderContext from "../../../../../context/OrderContext";

export default function Basket() {
  const { basketMenu, handleDeletedBasketCard, total, isModeAdmin } =
    useContext(OrderContext);

  return (
    <div className="w-1/4 shadow-strong">
      <div className=" text-background_white flex flex-col h-[100%] font-amatic ">
        <Total amountToPay={total} />
        <BasketBody
          basketMenu={basketMenu}
          handleDeletedBasketCard={handleDeletedBasketCard}
          isHovarable={isModeAdmin}
        />
        <Footer />
      </div>
    </div>
  );
}
