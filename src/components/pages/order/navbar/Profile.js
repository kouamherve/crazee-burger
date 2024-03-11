import clsx from "clsx";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import OrderContext from "../../../../context/OrderContext";

export default function Profile() {
  const { username } = useContext(OrderContext);

  const btnClassName = clsx(
    "text-[10px] leading-[13.62px] font-openSans",
    "hover:underline hover:underline-offset-4"
  );

  return (
    <div className=" flex flex-col -space-y-1.5">
      <span className=" text-right">
        Hey, <b className=" text-primary">{username}</b>
      </span>
      <Link to="/" className="text-start text-base">
        <span className={btnClassName}>Se déconnecter</span>
      </Link>
    </div>
  );
}
