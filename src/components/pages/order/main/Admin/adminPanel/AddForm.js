import React, { useContext } from "react";
import TextInputPanel from "../../../../../reusable-ui/TextInputPanel";
import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";
import PrimaryButton from "../../../../../reusable-ui/PrimaryButton";
import ToastAddSuccess from "./ToastAddSuccess";
import OrderContext from "../../../../../../context/OrderContext";

export default function AddForm() {
  const { handleAdd, title, image, price, showToast } =
    useContext(OrderContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    handleAdd(title);
  };

  return (
    <div className=" h-[120px] w-[73%]">
      <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
        <TextInputPanel
          type={"text"}
          name={"title"}
          value={title}
          placeholder={"Nom du produit (ex: Super Burger)"}
          Icon={<FaHamburger className="icon-input-panel" />}
        />
        <TextInputPanel
          type={"url"}
          name={"image"}
          value={image}
          placeholder={
            "Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"
          }
          Icon={<BsFillCameraFill className="icon-input-panel" />}
        />
        <TextInputPanel
          type={"number"}
          step={"0.01"}
          name={"price"}
          value={price}
          placeholder={"Prix"}
          Icon={<MdOutlineEuro className="icon-input-panel" />}
        />
        <div className="w-full flex items-center">
          <PrimaryButton
            type="submit"
            label={"Ajouter un nouveau produit au menu"}
            className="border border-success bg-success active:bg-white active:text-success rounded-md text-xs font-bold text-white px-[30px] py-3"
          />
          {showToast && <ToastAddSuccess />}
        </div>
      </form>
    </div>
  );
}
