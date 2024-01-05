import React, { useContext } from "react";
import OrderContext from "../../context/OrderContext";

export default function TextInputPanel({
  type,
  placeholder,
  Icon,
  value,
  onChange,
  step,
  name,
}) {
  const { handleChange } = useContext(OrderContext);

  return (
    <label className="relative text-greyMedium text-base font-normal flex items-center">
      {Icon && Icon}
      <input
        className="h-[35px] w-full text-dark bg-background_white rounded-md py-2 pl-[52px] pr-4 focus:outline-none"
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        step={step}
      />
    </label>
  );
}
