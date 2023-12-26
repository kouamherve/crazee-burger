import React from "react";
import Input from "../../../../reusable-ui/Input";
import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";
import PrimaryButton from "../../../../reusable-ui/PrimaryButton";

export default function AddAdminPanel() {
  return (
    <div className="h-[160px] w-[880px]">
      <div className="mt-[30px] flex space-x-5 w-full h-full mb-13">
        <div className="w-[27%] h-[120px] rounded-md font-openSans text-base font-normal border border-greyLight text-greySemiDark flex items-center justify-center">
          <span>Aucune image</span>
        </div>
        <div className=" h-[120px] w-[73%] space-y-2">
          <form className="flex flex-col gap-2">
            <Input
              type={"text"}
              placeholder={"Nom du produit (ex: Super Burger)"}
              Icon={
                <FaHamburger className="absolute w-4 h-4 ml-6 pointer-events-none" />
              }
            />
            <Input
              type={"url"}
              placeholder={
                "Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"
              }
              Icon={
                <BsFillCameraFill className="absolute w-4 h-4 ml-6 pointer-events-none" />
              }
            />
            <Input
              type={"number"}
              placeholder={"Prix"}
              Icon={
                <MdOutlineEuro className="absolute w-4 h-4 ml-6 pointer-events-none" />
              }
            />
          </form>
          <div>
            <PrimaryButton
              label={"Ajouter un nouveau produit au menu"}
              className="border border-success bg-success rounded-md text-xs font-bold text-white px-[30px] py-2.5"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
