import React from "react";
import Footer from "./Footer";

import BasketBody from "./BasketBody/BasketBody";
import BasketHeader from "./BasketHeader/BasketHeader";

export default function Basket() {
  return (
    <div className="w-1/4 shadow-strong">
      <div className=" text-background_white flex flex-col h-[100%] font-amatic ">
        <BasketHeader />
        <BasketBody />
        <Footer />
      </div>
    </div>
  );
}
