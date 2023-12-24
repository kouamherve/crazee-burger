import { createContext } from "react";

export default createContext({
  isModeAdmin: false,
  setIsModeAdmin: () => {},
  isCollapse: false,
  setIsCollapse: () => {},
  isAddSelected: false,
  setIsAddSelected: () => {},
  isEditSelected: false,
  setIsEditSelected: () => {},
  currentTabSelected: "",
  setCurrentTabSelected: () => {},
});
