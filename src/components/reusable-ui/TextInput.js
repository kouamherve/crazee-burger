import clsx from "clsx";
import React from "react";

export default function TextInput({
  value,
  onChange,
  Icon,
  version = "normal",
  ...extraProps
}) {
  const extraStyleNormal = {
    div: clsx(
      "relative text-greySemiDark focus-within:text-gray-600",
      "flex items-center gap-1"
    ),
    input: clsx(
      "py-[18px] pl-20 pr-6 rounded-md w-[400px] h-[55px]",
      "text-greyDark border-none",
      "bg-white placeholder:text-greyMedium focus:outline-none"
    ),
  };

  const extraStyleMinimal = {
    div: "div-text-input",
    input: "text-input",
  };

  return (
    <div
      version={version}
      className={
        version === "normal" ? extraStyleNormal.div : extraStyleMinimal.div
      }
    >
      {Icon && Icon}
      <input
        value={value}
        onChange={onChange}
        className={
          version === "normal"
            ? extraStyleNormal.input
            : extraStyleMinimal.input
        }
        {...extraProps}
      />
    </div>
  );
}
