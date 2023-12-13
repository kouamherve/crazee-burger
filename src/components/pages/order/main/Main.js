import React from "react";
import Menu from "./Menu";

export default function Main() {
  return (
    <div className=" bg-background_white rounded-b-[15px] h-[84vh] shadow-xlInner flex">
      {/* <div className=" bg-sky-500 w-1/4">Basket-menu</div> */}
      <Menu />
    </div>
  );
}
