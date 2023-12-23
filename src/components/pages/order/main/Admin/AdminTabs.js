import Tab from "../../../../reusable-ui/Tab";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

export default function AdminTabs({ isCollapse, setIsCollapse }) {
  const handleClicK = () => {
    setIsCollapse(!isCollapse);
  };

  return (
    <div>
      <Tab
        onClick={handleClicK}
        btn_tab={
          isCollapse
            ? " text-white bg-background_dark border border-background_dark"
            : "bg-white text-greySemiDark border border-greyLight"
        }
      >
        {isCollapse ? <FiChevronUp /> : <FiChevronDown />}
      </Tab>
    </div>
  );
}
