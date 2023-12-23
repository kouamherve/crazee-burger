import clsx from "clsx";
import React from "react";
import { Link, useParams } from "react-router-dom";

export default function Profile() {
  const { username } = useParams();

  const btnClassName = clsx(
    "text-[10px] leading-[14px] font-normal",
    "hover:underline hover:underline-offset-4"
  );

  return (
    <div className=" flex flex-col ">
      <h1 className="text-[16px] leading-[22px]">
        Hey, <b className=" text-primary">{username}</b>
      </h1>
      <Link to="/" className=" text-end">
        <button className={btnClassName}>Se déconnecter</button>
      </Link>
    </div>
  );
}
