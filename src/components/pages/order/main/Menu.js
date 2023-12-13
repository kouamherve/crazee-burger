import React, { useState } from "react";
import {  fakeMenu2 } from "../../../../fakeData/fakeMenu";

export default function Menu() {
  const [menu, setMenu] = useState(fakeMenu2);

  return (
    <div className=" bg-slate-500 w-full grid grid-cols-4 gap-x-[85px] gap-y-[60px] p-[50px]  justify-items-center overflow-auto">
      {menu.map((product) => (
        <div className=" w-[240px] h-[330px] border border-lime-950 bg-red">{product.title}</div>
      ))}
    </div>
  );
}
