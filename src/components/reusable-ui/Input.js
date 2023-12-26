import React from "react";

export default function Input({ type, placeholder, Icon }) {
  return (
    <label className="relative text-greyMedium text-base font-normal flex items-center">
      {Icon}
      <input
        className="h-[35px] w-full bg-background_white rounded-md py-2 pl-[52px] pr-4"
        type={type}
        placeholder={placeholder}
      />
    </label>
  );
}
