import React, { useContext } from "react";
import Total from "./Total";
import Footer from "./Footer";
import BasketBody from "./BasketBody";
import OrderContext from "../../../../../context/OrderContext";
import { formatPrice } from "../../../../../utils/maths";
import { findObjectById } from "../../../../../utils/array";

export default function Basket() {
  const { basketMenu, handleDeletedBasketCard, isModeAdmin, menu } =
    useContext(OrderContext);

  const sumToPay = (basketMenu) => {
    let total = 0;
    basketMenu.map((basketProduct) => {
      const menuProduct = findObjectById(menu, basketProduct.id);
      if (!isNaN(menuProduct.price)) {
        total = total + menuProduct.price * basketProduct.quantity;
      }
      return null;
    });
    return formatPrice(total);
  };

  const amountToPay = sumToPay(basketMenu);

  return (
    <div className="w-1/4 shadow-strong">
      <div className=" text-background_white flex flex-col h-[100%] font-amatic ">
        <Total amountToPay={amountToPay} />
        <BasketBody
          basketMenu={basketMenu}
          handleDeletedBasketCard={handleDeletedBasketCard}
          isClickable={isModeAdmin}
          menu={menu}
        />
        <Footer />
      </div>
    </div>
  );
}
