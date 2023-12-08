import React from "react";
import Logo from "../../reusable-ui/Logo";
import NavbarRightSide from "./NavbarRightSide";

export default function Navbar({ username }) {
  return (
    <nav className="px-5 bg-green w-full h-[98.19px] flex items-center justify-between">
      <Logo />
      <NavbarRightSide username={username} />
    </nav>
  );
}
