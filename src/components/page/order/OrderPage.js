import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Main from "./Main";
import { refreshPage } from "../../../utils";
import clsx from "clsx";

export default function OrderPage() {
  const orderPageClassName = clsx(
    "font-openSans",
    "flex flex-col items-center",
    "bg-primary  h-screen  p-6"
  );
  const { username } = useParams();
  return (
    <div className={orderPageClassName}>
      <div className="w-full ">
        <Navbar username={username} onClick={refreshPage} />
        <Main />
      </div>
    </div>
  );
}
