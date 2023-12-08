import React from "react";
import { BsPersonCircle } from "react-icons/bs";
import Profile from "./Profile";

export default function NavbarRightSide({ username }) {
  return (
    <div className="text-greyBlue flex items-center justify-center gap-[10px] pr-[50px]">
      <Profile username={username} />
      <BsPersonCircle className=" w-9 h-9" />
    </div>
  );
}
