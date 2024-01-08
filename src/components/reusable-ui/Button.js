import clsx from "clsx";
import React from "react";

export default function Button({ label, Icon, onClick, version = "normal" }) {
  const extraStyle = {
    success: clsx(
      "border border-success bg-success hover:bg-white hover:text-success rounded-md",
      "text-xs font-bold text-white px-[30px] py-3 active:text-success",
      "active:bg-success active:text-white"
    ),
    normal: clsx(
      "text-xs leading-4 font-bold text-white active:bg-primary active:text-white",
      "gap-1 h-[53px] w-full mt-[18px] flex items-center justify-center",
      "bg-primary border border-primary rounded-md hover:bg-white hover:text-primary"
    ),
    card: clsx(
      "w-24 h-9 text-xs leading-3 text-white font-bold hover:text-primary",
      "border border-primary bg-primary hover:bg-white rounded-md",
      "active:bg-primary active:text-white"
    ),
  };

  return (
    <button
      onClick={onClick}
      className={
        version === "success"
          ? extraStyle.success
          : version === "normal"
          ? extraStyle.normal
          : extraStyle.card
      }
      version={version}
    >
      <span>{label}</span>
      {Icon && Icon}
    </button>
  );
}
