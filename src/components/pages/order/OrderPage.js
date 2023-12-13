import React from "react";
import { useParams } from "react-router-dom";
import Main from "./main/Main";
import clsx from "clsx";
import { refreshPage } from "../../../utils/utils";
import Navbar from "./navbar/Navbar";

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
