import React, { useContext } from "react";
import Total from "./Total";
import Footer from "./Footer";
import { formatPrice } from "../../../../../utils/maths";
import BasketBody from "./BasketBody";
import OrderContext from "../../../../../context/OrderContext";

export default function Basket() {
  const { basketMenu, setBasketMenu } = useContext(OrderContext);

  const findTotal = () => {
    let t = 0;
    basketMenu.map(({ price }) => (t = t + price));
    return formatPrice(t);
  };
  const total = findTotal();

  return (
    <div className="w-1/4 shadow-strong">
      <div className=" text-background_white flex flex-col h-[100%] font-amatic ">
        <Total amountToPay={total} />
        <BasketBody basketMenu={basketMenu} setBasketMenu={setBasketMenu} />
        <Footer />
      </div>
    </div>
  );
}
