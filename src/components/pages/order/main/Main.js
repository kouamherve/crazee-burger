import React, { useContext } from "react";
import Menu from "./Admin/Menu/Menu";
import Admin from "./Admin/Admin";
import OrderContext from "../../../../context/OrderContext";
import Basket from "./Basket/Basket";

export default function Main() {
  const { isModeAdmin } = useContext(OrderContext);

  return (
    <div className="flex flex-col rounded-b-2xl overflow-y-hidden w-full">
      <div className="flex h-[85vh] w-full bg-white">
        <Basket />
        <div className="relative w-3/4 grid">
          <Menu />
          {isModeAdmin && <Admin />}
        </div>
      </div>
    </div>
  );
}
