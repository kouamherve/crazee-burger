import React from "react";

export default function Logo() {
  return (
    <div className=" uppercase text-white flex items-center justify-center gap-1 text-center">
      <h1 className=" text-[110px] text-[#FFA01B] tracking-[1.5px] font-amatic leading-[115px] font-bold">
        crazee
      </h1>
      <img src="./logo.png" alt="Logo" className="w-[200px] h-[150px]" />
      <h1 className=" uppercase text-[110px] text-[#FFA01B] tracking-[1.5px] font-amatic leading-[115px] font-bold">
        burger
      </h1>
    </div>
  );
}
