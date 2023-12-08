import React from "react";
import { BsPersonCircle } from "react-icons/bs";
import Profile from "./Profile";
import clsx from "clsx";

export default function NavbarRightSide({ username }) {
  const rightSideClassName = clsx(
    "text-greyBlue",
    "gap-[10px] pr-[50px]",
    "flex items-center justify-center"
  );

  return (
    <div className={rightSideClassName}>
      <Profile username={username} />
      <BsPersonCircle className=" w-9 h-9" />
    </div>
  );
}
