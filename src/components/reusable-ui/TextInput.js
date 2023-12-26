import clsx from "clsx";
import React from "react";

export default function TextInput({
  value,
  onChange,
  Icon,
  className,
  ...extraProps
}) {
  const textInputClassName = clsx(
    "relative text-greySemiDark focus-within:text-gray-600",
    "flex items-center gap-1"
  );

  return (
    <div className={textInputClassName}>
      {Icon && Icon}
      <input
        type="text"
        value={value}
        onChange={onChange}
        className={className}
        {...extraProps}
      />
    </div>
  );
}
