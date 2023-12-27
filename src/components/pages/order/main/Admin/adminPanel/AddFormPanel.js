import React from "react";
import Input from "../../../../../reusable-ui/Input";
import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";
import PrimaryButton from "../../../../../reusable-ui/PrimaryButton";

export default function AddFormPanel({
  nameValue,
  setNameValue,
  imageValue,
  setImageValue,
  priceValue,
  setPriceValue,
  handleAddProduct,
}) {
  return (
    <div className=" h-[120px] w-[73%]">
      <form className="flex flex-col gap-2" onSubmit={handleAddProduct}>
        <Input
          type={"text"}
          value={nameValue}
          onChange={(e) => setNameValue(e.target.value)}
          placeholder={"Nom du produit (ex: Super Burger)"}
          Icon={
            <FaHamburger className="absolute w-4 h-4 ml-6 pointer-events-none" />
          }
        />
        <Input
          type={"url"}
          value={imageValue}
          onChange={(e) => setImageValue(e.target.value)}
          placeholder={
            "Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"
          }
          Icon={
            <BsFillCameraFill className="absolute w-4 h-4 ml-6 pointer-events-none" />
          }
        />
        <Input
          type={"number"}
          value={priceValue}
          onChange={(e) => setPriceValue(e.target.value)}
          placeholder={"Prix"}
          Icon={
            <MdOutlineEuro className="absolute w-4 h-4 ml-6 pointer-events-none" />
          }
        />
        <div>
          <PrimaryButton
            type="submit"
            label={"Ajouter un nouveau produit au menu"}
            className="border border-success bg-success active:bg-white active:text-success rounded-md text-xs font-bold text-white px-[30px] py-3"
          />
        </div>
      </form>
    </div>
  );
}
