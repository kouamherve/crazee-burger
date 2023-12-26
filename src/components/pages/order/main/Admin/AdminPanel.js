import React, { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";

export default function AdminPanel() {
  const { currentTabSelected } = useContext(OrderContext);

  return (
    <div className="h-[250px] bg-white border-greyLight shadow-subtle font-openSans text-base font-normal pl-5 pt-4">
      {currentTabSelected === "" ? "" : <div>{currentTabSelected}</div>}
    </div>
  );
}
