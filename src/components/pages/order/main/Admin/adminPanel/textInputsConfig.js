import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";

export const getTextInputsConfig = (newProduct) => [
  {
    id: 0,
    type: "text",
    name: "title",
    value: newProduct.title,
    placeholder: "Nom du produit (ex: Super Burger)",
    Icon: <FaHamburger className="icon-input-panel" />,
  },
  {
    id: 1,
    type: "text",
    name: "imageSource",
    value: newProduct.imageSource,
    placeholder:
      "Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)",
    Icon: <BsFillCameraFill className="icon-input-panel" />,
  },
  {
    id: 2,
    type: "text",
    name: "price",
    value: newProduct.price ? newProduct.price : "",
    placeholder: "Prix",
    Icon: <MdOutlineEuro className="icon-input-panel" />,
  },
];
