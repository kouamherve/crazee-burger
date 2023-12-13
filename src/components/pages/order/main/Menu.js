import React, { useState } from "react";
import { fakeMenu1, fakeMenu2 } from "../../../../fakeData/fakeMenu";

export default function Menu() {
  const [menu, setMenu] = useState(fakeMenu2);

  return (
    <div className=" bg-slate-500 w-full">
      {menu.map((product) => (
        <div>{product.title}</div>
      ))}
    </div>
  );
}
