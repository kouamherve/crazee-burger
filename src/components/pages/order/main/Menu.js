import React, { useState } from "react";
import { fakeMenu2 } from "../../../../fakeData/fakeMenu";
import clsx from "clsx";
import Card from "../../../reusable-ui/Card";

export default function Menu() {
  const menuClassName = clsx(
    "w-full shadow-xlInner bg-background_white p-[50px] overflow-y-auto",
    "grid grid-cols-menu_container gap-x-[85px] gap-y-[60px] justify-items-center"
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
