import Tab from "../../../../reusable-ui/Tab";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";

export default function AdminTabs() {
  const {
    isCollapse,
    setIsCollapse,
    isAddSelected,
    setIsAddSelected,
    isEditSelected,
    setIsEditSelected,
  } = useContext(OrderContext);

  const tabs = [
    {
      label: "",
      Icon: isCollapse ? (
        <FiChevronUp className="svg-size" />
      ) : (
        <FiChevronDown className="svg-size" />
      ),
      onClick: () => setIsCollapse(!isCollapse),
      selected: isCollapse,
    },
    {
      label: "Ajouter un produit",
      Icon: <AiOutlinePlus className="svg-size" />,
      onClick: () => selectTab("add"),
      selected: isAddSelected,
    },
    {
      label: "Modifier un produit",
      Icon: <MdModeEditOutline className="svg-size" />,
      onClick: () => selectTab("edit"),
      selected: isEditSelected,
    },
  ];

  const selectTab = (tabSelect) => {
    setIsCollapse(!isCollapse);
    if (tabSelect === "add") {
      setIsCollapse(false);
      setIsAddSelected(true);
      setIsEditSelected(false);
    }
    if (tabSelect === "edit") {
      setIsCollapse(false);
      setIsEditSelected(true);
      setIsAddSelected(false);
    }
  };

  return (
    <div className="flex gap-px">
      {tabs.map((tab, index) => {
        return (
          <Tab
            key={index}
            label={tab.label}
            Icon={tab.Icon}
            onClick={tab.onClick}
            btn_tab={tab.selected ? "active-tab" : "default-tab"}
          />
        );
      })}
    </div>
  );
}
