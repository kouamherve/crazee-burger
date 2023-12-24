import React, { useState } from "react";
import Main from "./main/Main";
import clsx from "clsx";
import { refreshPage } from "../../../utils/utils";
import Navbar from "./navbar/Navbar";
import OrderContext from "../../../context/OrderContext";

export default function OrderPage() {
  const [isModeAdmin, setIsModeAdmin] = useState(false);
  const [isCollapse, setIsCollapse] = useState(false);
  const [isAddSelected, setIsAddSelected] = useState(true);
  const [isEditSelected, setIsEditSelected] = useState(false);
  const [currentTabSelected, setCurrentTabSelected] = useState("add");

  const orderContextValue = {
    isModeAdmin,
    setIsModeAdmin,
    isCollapse,
    setIsCollapse,
    isAddSelected,
    setIsAddSelected,
    isEditSelected,
    setIsEditSelected,
    currentTabSelected,
    setCurrentTabSelected,
  };

  const orderPageClassName = clsx(
    "flex flex-col items-center ",
    "h-screen p-6 font-openSans"
  );

  return (
    <OrderContext.Provider value={orderContextValue}>
      <div className={orderPageClassName}>
        <div className="w-full ">
          <Navbar onClick={refreshPage} />
          <Main />
        </div>
      </div>
    </OrderContext.Provider>
  );
}
