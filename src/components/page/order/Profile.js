import clsx from "clsx";
import React from "react";
import { Link } from "react-router-dom";

export default function Profile({ username }) {
  const btnClassName = clsx(
    "text-[10px] leading-[14px] font-normal",
    "hover:underline hover:underline-offset-4"
  );

  return (
    <div className=" ">
      <h1 className=" text-[16px] leading-[22px]">
        Hey, <b className=" text-primary">{username}</b>
      </h1>
      <Link to="/">
        <button className={btnClassName}>Déconnexion</button>
      </Link>
    </div>
  );
}
