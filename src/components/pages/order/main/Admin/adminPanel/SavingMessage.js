import React from "react";
import { BsCloudCheck } from "react-icons/bs";

export default function SavingMessage() {
  return (
    <div className="flex items-center justify-start text-blue gap-[10px]">
      <span>
        <BsCloudCheck />
      </span>
      <span className=" font-openSans font-normal text-[15px] leading-[20.43px]">
        Modifications enregistrées !
      </span>
    </div>
  );
}
