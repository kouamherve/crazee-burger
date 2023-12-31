import { createContext } from "react";

export default createContext({
  isModeAdmin: false,
  setIsModeAdmin: () => {},
  isCollapse: false,
  setIsCollapse: () => {},
  currentTabSelected: "",
  setCurrentTabSelected: () => {},
  username: "",
  menu: {},
  setMenu: () => {},
  handleAdd: () => {},
  title: "",
  setTitle: () => {},
  image: "",
  setImage: () => {},
  price: "",
  setPrice: () => {},
  showToast: false,
  setShowToast: () => {},
});
