import React from "react";
import Logo from "../../../reusable-ui/Logo";
import NavbarRightSide from "./NavbarRightSide";
import clsx from "clsx";

export default function Navbar({ onClick }) {
  const navClassName = clsx(
    "px-5 h-24 w-full rounded-t-2xl",
    "bg-white flex items-center justify-between border"
  );

  return (
    <nav className={navClassName}>
      <button onClick={onClick}>
        <Logo />
      </button>
      <NavbarRightSide />
    </nav>
  );
}
