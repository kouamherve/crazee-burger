import React from "react";

export default function TextInput({
  value,
  onChange,
  Icon,
  className,
  ...extraProps
}) {
  return (
    <div className="relative text-gray-400 focus-within:text-gray-600 flex items-center gap-1">
      {Icon}
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
