import Tab from "../../../../../reusable-ui/Tab";
import { useContext } from "react";
import OrderContext from "../../../../../../context/OrderContext";
import { getTabsConfig } from "../getTabsConfig";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

export default function AdminTabs() {
  const {
    isCollapse,
    setIsCollapse,
    currentTabSelected,
    setCurrentTabSelected,
  } = useContext(OrderContext);

  const handleTabSelect = (tabSelect) => {
    setIsCollapse(false);
    setCurrentTabSelected(tabSelect);
  };
  const tabs = getTabsConfig;

  return (
    <div className="flex gap-px">
      <Tab
        onClick={() => setIsCollapse(!isCollapse)}
        className={isCollapse ? "active-tab" : "default-tab"}
        Icon={
          isCollapse ? (
            <FiChevronUp className="svg-size" />
          ) : (
            <FiChevronDown className="svg-size" />
          )
        }
      />
      {tabs.map((tab) => {
        return (
          <Tab
            key={tab.index}
            label={tab.label}
            Icon={tab.Icon}
            onClick={() => handleTabSelect(tab.index)}
            className={
              currentTabSelected === tab.index ? "active-tab" : "default-tab"
            }
          />
        );
      })}
    </div>
  );
}
