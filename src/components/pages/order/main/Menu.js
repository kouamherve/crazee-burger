import React, { useState } from "react";
import { fakeMenu2 } from "../../../../fakeData/fakeMenu";
import Product from "./Product";

export default function Menu() {
  const [menu, setMenu] = useState(fakeMenu2);

  return (
    <div className="w-full shadow-xlInner bg-background_white grid grid-cols-4 gap-x-[85px] gap-y-[60px] p-[50px] justify-items-center overflow-y-auto">
      {menu.map((product) => (
        <Product imageSource={product.imageSource} title={product.title} price={product.price}/>
      ))}
    </div>
  );
}
