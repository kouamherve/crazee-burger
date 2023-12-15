import React from "react";
import { BsPersonCircle } from "react-icons/bs";
import Profile from "./Profile";
import clsx from "clsx";
import ToggleButton from "./ToggleButton";

export default function NavbarRightSide({ username }) {
  const rightSideClassName = clsx(
    "text-greyBlue",
    "gap-[10px] mr-[50px] pl-[50px]",
    "flex items-center justify-center",
  );

  return (
    <div className="flex items-center ">
      <ToggleButton />
      <div className={rightSideClassName}>
        <Profile username={username} />
        <BsPersonCircle className=" w-9 h-9" />
      </div>
    </div>
  );
}
