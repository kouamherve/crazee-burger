import React from "react";
import { FiCheck } from "react-icons/fi";

export default function ToastAddSuccess() {
  return (
    <div className="flex items-center pl-1 ml-[2px] space-x-[5px] h-fit text-xs font-openSans font-normal text-success">
      <div className="border border-success w-[18px] h-[18px] ml-[5px] rounded-full flex items-center justify-center ">
        <FiCheck className="w-full h-full" />
      </div>
      <span className="pr-1">Ajouté avec succès !</span>
    </div>
  );
}
