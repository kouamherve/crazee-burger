import React, { useContext } from "react";
import Menu from "./Menu";
import Admin from "./Admin/Admin";
import OrderContext from "../../../../context/OrderContext";

export default function Main() {
  const { isModeAdmin } = useContext(OrderContext);

  return (
    <div className="flex flex-col rounded-b-2xl overflow-y-hidden">
      <div className="flex h-[85vh] w-full">
        {/* <div className=" bg-sky-500 w-1/4">Basket-menu</div> */}
        <div className="relative w-full grid">
          <Menu />
          {isModeAdmin && <Admin />}
        </div>
      </div>
    </div>
  );
}
