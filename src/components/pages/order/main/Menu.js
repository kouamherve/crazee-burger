import React, { useState } from "react";
import { fakeMenu2 } from "../../../../fakeData/fakeMenu";
import Card from "./Card";
import clsx from "clsx";

export default function Menu() {
  const menuClassName = clsx(
    "w-full h-full shadow-xlInner bg-background_white  p-[50px] rounded-b-[15px]",
    "grid grid-cols-4 gap-x-[85px] gap-y-[60px] justify-items-center",
    "overflow-auto"
  );
  const [menu, setMenu] = useState(fakeMenu2);

  return (
    <div className={menuClassName}>
      {menu.map((product) => (
        <Card
          imageSource={product.imageSource}
          title={product.title}
          price={product.price}
        />
      ))}
    </div>
  );
}
