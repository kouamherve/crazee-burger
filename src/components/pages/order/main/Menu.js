import React, { useState } from "react";
import { fakeMenu2 } from "../../../../fakeData/fakeMenu";

export default function Menu() {
  const [menu, setMenu] = useState(fakeMenu2);

  return (
    <div className="w-full grid grid-cols-4 gap-x-[85px] gap-y-[60px] p-[50px] justify-items-center overflow-y-auto">
      {menu.map((product) => (
        <div className=" w-[240px] h-[330px] border border-gray-300 flex flex-col items-center">
          <div className="border-2 border-yellow-950 w-[200px] h-[145px] mx-5 mt-[50px] mb-[15px]">
            <img src={product.imageSource} alt={product.title} className=" object-contain object-center w-full h-full"/>
          </div>
          <div className="border-2 border-sky-950 w-[200px] h-[110px]">Info-text</div>
        </div>
      ))}
    </div>
  );
}
