import React from "react";

export default function Logo({ size }) {
  const classes = {
    logo: `${size}  flex items-center justify-center gap-1`,
    logoTitle:
      "uppercase text-[36px] text-primary tracking-[1.5px] font-amatic leading-[46px] font-bold",
  };

  return (
    <div className={classes.logo}>
      <h1 className={classes.logoTitle}>crazee</h1>
      <img src="./logo.png" alt="Logo" className="w-[80px] h-[60px]" />
      <h1 className={classes.logoTitle}>burger</h1>
    </div>
  );
}
