import React from "react";
import Menu from "./Menu";

export default function Main() {
  return (
    <div className="h-[84vh] flex rounded-b-2xl overflow-hidden">
      <div className=" bg-sky-500 w-1/4">Basket-menu</div>
      <Menu />
    </div>
  );
}
