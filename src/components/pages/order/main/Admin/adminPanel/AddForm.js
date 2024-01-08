import React from "react";
import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";
import TextInput from "../../../../../reusable-ui/TextInput";
import AddProductButton from "./AddProductButton";

export default function AddForm({
  title,
  image,
  price,
  onChange,
  onSubmit,
  toast,
}) {
  return (
    <div className=" h-[120px] w-[73%]">
      <form className="flex flex-col gap-2" onSubmit={onSubmit}>
        <TextInput
          type="text"
          name="title"
          value={title}
          onChange={onChange}
          placeholder="Nom du produit (ex: Super Burger)"
          Icon={<FaHamburger className="icon-input-panel" />}
          version="minimalist"
        />
        <TextInput
          type="url"
          name="image"
          value={image}
          onChange={onChange}
          placeholder="Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"
          Icon={<BsFillCameraFill className="icon-input-panel" />}
          version="minimalist"
        />
        <TextInput
          type="number"
          name="price"
          step="0.001"
          value={price ? price : ""}
          onChange={onChange}
          placeholder="Prix"
          Icon={<MdOutlineEuro className="icon-input-panel" />}
          version="minimalist"
        />
        <AddProductButton toast={toast} />
      </form>
    </div>
  );
}
