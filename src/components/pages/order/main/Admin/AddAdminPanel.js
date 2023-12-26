import React from "react";
import Input from "../../../../reusable-ui/Input";
import { FaHamburger } from "react-icons/fa";

export default function AddAdminPanel() {
  return (
    <div className="h-[160px] w-[880px] border-2 border-red ml-[71px] mt-8 flex space-x-5">
      <div className="w-[215px] h-[120px] rounded-md  font-openSans text-base font-normal text-greySemiDark flex items-center justify-center border-2 border-green">
        <span>Aucune image</span>
      </div>
      <div className=" h-[120px] border-2 border-green w-full">
        <form className="flex flex-col ">
          <Input
            type={"text"}
            placeholder={"Nom du produit (ex: Super Burger)"}
            Icon={
              <FaHamburger className="absolute w-4 h-4 ml-6 pointer-events-none" />
            }
          />
        </form>
      </div>
    </div>
  );
}
