import React from "react";

export default function TextInput({
  type,
  value,
  onChange,
  Icon,
  className,
  divClassName,
  name,
  placeholder,
  step,
}) {
  return (
    <div className={divClassName}>
      {Icon && Icon}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={className}
        placeholder={placeholder}
        step={step}
      />
    </div>
  );
}
