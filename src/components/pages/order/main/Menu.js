import React, { useState } from "react";
import { fakeMenu2 } from "../../../../fakeData/fakeMenu";
import Card from "./Card";

export default function Menu() {
  const [menu, setMenu] = useState(fakeMenu2);

  return (
    <div className="overflow-auto w-full h-full shadow-xlInner bg-background_white grid grid-cols-4 gap-x-[85px] gap-y-[60px] p-[50px] justify-items-center rounded-b-[15px]">
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
