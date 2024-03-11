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
      <div className="text-4xl text-primary  tracking-wider px-4 w-full h-full flex items-center justify-between">
        <span className="font-thin">
          <span className="text-[41px]">t</span>otal
        </span>
        <span className="font-bold">{formatPrice(sumToPay)}</span>
      </div>
    </Header>
  );
}
