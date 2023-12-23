import Tab from "../../../../reusable-ui/Tab";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";

export default function AdminTabs({ isCollapse, setIsCollapse }) {
  const handleClicK = () => {
    setIsCollapse(!isCollapse);
  };

  return (
    <div className="flex gap-px">
      <Tab
        label=""
        Icon={isCollapse ? <FiChevronUp /> : <FiChevronDown />}
        onClick={handleClicK}
        btn_tab={
          isCollapse
            ? " text-white bg-background_dark border border-background_dark"
            : "bg-white text-greySemiDark border border-greyLight"
        }
      />

      <Tab
        label="Ajouter un produit"
        Icon={<AiOutlinePlus />}
        onClick={handleClicK}
        btn_tab={
          isCollapse
            ? "text-white bg-background_dark border border-background_dark"
            : "bg-white text-greySemiDark border border-greyLight"
        }
      />
      <Tab
        label="Modifier un produit"
        Icon={<MdModeEditOutline />}
        onClick={handleClicK}
        btn_tab={
          isCollapse
            ? "text-white bg-background_dark border border-background_dark"
            : "bg-white text-greySemiDark border border-greyLight"
        }
      />
    </div>
  );
}
