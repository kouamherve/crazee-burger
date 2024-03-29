import clsx from "clsx";
import React from "react";

export default function Logo({ size }) {
  const classes = {
    logo: `${size} flex items-center justify-center gap-1`,
    logoTitle: clsx(
      "text-4xl text-primary/80 tracking-[1.4px] leading-11",
      "uppercase font-amatic font-bold"
    ),
  };

  return (
    <div className={classes.logo}>
      <h1 className={classes.logoTitle}>crazee</h1>
      <img src="../logo.png" alt="Logo" className="w-20 h-14" />
      <h1 className={classes.logoTitle}>burger</h1>
    </div>
  );
}
