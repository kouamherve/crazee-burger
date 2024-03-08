import React, { useContext } from "react";
import Header from "../../../../reusable-ui/Header";
import { calculateTotalPrice } from "./helper";
import OrderContext from "../../../../../context/OrderContext";
import { formatPrice } from "../../../../../utils/maths";

export default function Total() {
  const { basketMenu, menu } = useContext(OrderContext);

  const sumToPay = calculateTotalPrice(basketMenu, menu);

  return (
    <Header>
      <div className="text-4xl px-4 w-full flex justify-between">
        <span className="text-primary/90">total</span>
        <span className="text-primary font-bold">{formatPrice(sumToPay)}</span>
      </div>
    </Header>
  );
}
