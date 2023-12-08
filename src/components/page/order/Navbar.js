import React from "react";
import Logo from "../../reusable-ui/Logo";
import NavbarRightSide from "./NavbarRightSide";

export default function Navbar({ username, onClick }) {
  return (
    <nav className="px-5 bg-white w-full h-[95px] flex items-center justify-between rounded-t-[15px]">
      <button onClick={onClick}>
        <Logo />
      </button>
      <NavbarRightSide username={username} />
    </nav>
  );
}
