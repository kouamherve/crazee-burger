import React, { useContext } from "react";
import OrderContext from "../../../../../../context/OrderContext";
import AddPanel from "./AddPanel";
import EditPanel from "./EditPanel";

export default function AdminPanel() {
  const { currentTabSelected } = useContext(OrderContext);

  const tabComponents = {
    add: <AddPanel />,
    edit: <EditPanel />,
  };

  return (
    <div className="h-64 pl-[59px] pt-4 bg-white font-openSans text-base font-normal border border-greyLight shadow-subtle">
      {currentTabSelected && tabComponents[currentTabSelected]}
    </div>
  );
}
