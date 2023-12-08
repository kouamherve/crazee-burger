import React from "react";

export default function Logo({ size }) {
  const logo = `${size} uppercase flex items-center justify-center gap-1 text-[36px] text-primary tracking-[1.5px] font-amatic leading-[46px] font-bold;
  `;

  return (
    <div className={logo}>
      <h1>crazee</h1>
      <img src="./logo.png" alt="Logo" className="w-[80px] h-[60px]" />
      <h1>burger</h1>
    </div>
  );
}
