import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import Profile from "./Profile";

export default function NavbarRightSide({ username }) {
  return (
    <div className=" text-greyMedium flex items-center justify-center gap-[10px] pr-[50px]">
      <Profile username={username} />
      <FaRegUserCircle className=" w-9 h-9" />
    </div>
  );
}
