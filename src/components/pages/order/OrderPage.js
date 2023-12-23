import React, { useState } from "react";
import Main from "./main/Main";
import clsx from "clsx";
import { refreshPage } from "../../../utils/utils";
import Navbar from "./navbar/Navbar";
import OrderContext from "../../../context/OrderContext";

export default function OrderPage() {
  const [isModeAdmin, setIsModeAdmin] = useState(true);

  const orderContextValue = { isModeAdmin, setIsModeAdmin };

  const orderPageClassName = clsx(
    "flex flex-col items-center",
    "bg-primary h-screen p-6 font-openSans"
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
