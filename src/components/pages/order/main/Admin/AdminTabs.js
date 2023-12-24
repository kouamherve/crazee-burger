import Tab from "../../../../reusable-ui/Tab";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import { useContext } from "react";
import TabAddSelectedContext from "../../../../../context/TabAddSelectedContext";
import TabEditSelectedContext from "../../../../../context/TabEditSelectedContext";

export default function AdminTabs({ isCollapse, setIsCollapse }) {
  const handleClick = () => {
    setIsCollapse(!isCollapse);
  };
  const handleAddProduct = () => {
    setIsCollapse(false);
    setIsAddSelected(true);
    setIsEditSelected(false);
  };
  const handleEditProduct = () => {
    setIsCollapse(false);
    setIsEditSelected(true);
    setIsAddSelected(false);
  };

  const { isAddSelected, setIsAddSelected } = useContext(TabAddSelectedContext);
  const { isEditSelected, setIsEditSelected } = useContext(
    TabEditSelectedContext
  );

  return (
    <div className="flex gap-px">
      <Tab
        label=""
        Icon={isCollapse ? <FiChevronUp /> : <FiChevronDown />}
        onClick={handleClick}
        btn_tab={
          isCollapse
            ? "text-white bg-background_dark border border-background_dark"
            : "bg-white text-greySemiDark border border-greyLight"
        }
      />

      <Tab
        label="Ajouter un produit"
        Icon={<AiOutlinePlus />}
        onClick={handleAddProduct}
        btn_tab={
          isAddSelected
            ? "text-white bg-background_dark border border-background_dark"
            : "bg-white text-greySemiDark border border-greyLight"
        }
      />
      <Tab
        label="Modifier un produit"
        Icon={<MdModeEditOutline />}
        onClick={handleEditProduct}
        btn_tab={
          isEditSelected
            ? "text-white bg-background_dark border border-background_dark"
            : "bg-white text-greySemiDark border border-greyLight"
        }
      />
    </div>
  );
}
