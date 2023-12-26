import Tab from "../../../../reusable-ui/Tab";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";
import { getTabsConfig } from "./getTabsConfig";

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
  const tabs = getTabsConfig(isCollapse, currentTabSelected);

  return (
    <div className="flex gap-px">
      {tabs.map((tab) => {
        return (
          <Tab
            key={tab.label}
            label={tab.label}
            Icon={tab.Icon}
            className={tab.className}
            onClick={() => {
              tab.label === ""
                ? setIsCollapse(!isCollapse)
                : handleTabSelect(tab.label);
            }}
          />
        );
      })}
    </div>
  );
}
