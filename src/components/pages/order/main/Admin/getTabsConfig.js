import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";

export const getTabsConfig = (isCollapse, currentTabSelected) => [
  {
    label: "",
    Icon: isCollapse ? (
      <FiChevronUp className="svg-size" />
    ) : (
      <FiChevronDown className="svg-size" />
    ),
    className: isCollapse ? "active-tab" : "default-tab",
  },
  {
    label: "Ajouter un produit",
    Icon: <AiOutlinePlus className="svg-size" />,
    className:
      currentTabSelected === "Ajouter un produit"
        ? "active-tab"
        : "default-tab",
  },
  {
    label: "Modifier un produit",
    Icon: <MdModeEditOutline className="svg-size" />,
    className:
      currentTabSelected === "Modifier un produit"
        ? "active-tab"
        : "default-tab",
  },
];
