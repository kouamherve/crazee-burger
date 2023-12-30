import React from "react";
import { TiDelete } from "react-icons/ti";

export default function DeleteButton({ onClick }) {
  return (
    <div className="absolute top-0 right-0 mr-[15px] mt-[15px] ">
      <TiDelete
        onClick={onClick}
        className="w-8 h-8 text-primary fill-current cursor-pointer hover:text-red"
      />
    </div>
  );
}
