import React from "react";
import { TiDelete } from "react-icons/ti";

export default function DeleteButton({ onDelete, isSelected }) {
  return (
    <button className="absolute top-0 right-0 mr-[15px] mt-[15px] ">
      <TiDelete
        onClick={onDelete}
        className={`w-8 h-8 text-primary fill-current cursor-pointer hover:text-red active:text-primary ${
          isSelected && "text-white active:text-white"
        }`}
      />
    </button>
  );
}
