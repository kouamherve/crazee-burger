import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import Main from "./main/Main";
import clsx from "clsx";
import { refreshPage } from "../../../utils/utils";
import Navbar from "./navbar/Navbar";
import OrderContext from "../../../context/OrderContext";

export default function OrderPage() {
  const [isModeAdmin, setIsModeAdmin] = useState(true);

  const orderContextValue = { isModeAdmin, setIsModeAdmin };
  const { username } = useParams();

  const orderPageClassName = clsx(
    "flex flex-col items-center",
    "bg-primary h-screen p-6 font-openSans"
  );

  return (
    <OrderContext.Provider value={orderContextValue}>
      <div className={orderPageClassName}>
        <div className="w-full ">
          <Navbar username={username} onClick={refreshPage} />
          <Main />
        </div>
      </div>
    </OrderContext.Provider>
  );
}
