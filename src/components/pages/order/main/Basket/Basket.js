import React, { useContext } from "react";
import Total from "./Total";
import Footer from "./Footer";
import OrderContext from "../../../../../context/OrderContext";
import { isEmpty } from "../../../../../utils/array";
import EmptyBasket from "./EmptyBasket";
import BasketBody from "./BasketBody";

export default function Basket() {
  const { basketMenu, menu } = useContext(OrderContext);

  return (
    <div className="w-1/4 shadow-strong">
      <div className=" text-background_white flex flex-col h-[100%] font-amatic ">
        <Total />
        {isEmpty(basketMenu) ? (
          <EmptyBasket isLoading={menu === undefined} />
        ) : (
          <BasketBody />
        )}
        <Footer />
      </div>
    </div>
  );
}
