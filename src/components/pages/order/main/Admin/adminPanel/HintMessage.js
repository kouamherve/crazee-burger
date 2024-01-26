import React from "react";
import { HiCursorClick } from "react-icons/hi";

export default function HintMessage() {
  return (
    <div className="mt-[81px]">
      <div className="flex items-center gap-2 font-amatic font-normal text-2xl text-greyBlue">
        <span>Cliquer sur un produit pour le modifier</span>
        <HiCursorClick />
      </div>
    </div>
  );
}
