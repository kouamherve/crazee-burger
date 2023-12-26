import clsx from "clsx";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import OrderContext from "../../../../context/OrderContext";

export default function Profile() {
  const { username } = useContext(OrderContext);

  const btnClassName = clsx(
    "text-[10px] leading-[14px] font-normal",
    "hover:underline hover:underline-offset-4"
  );

  return (
    <div className=" flex flex-col ">
      <h1 className="text-base">
        Hey, <b className=" text-primary">{username}</b>
      </h1>
      <Link to="/" className="text-end">
        <button className={btnClassName}>Se déconnecter</button>
      </Link>
    </div>
  );
}
