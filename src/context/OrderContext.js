import { createContext } from "react";

export default createContext({
  isModeAdmin: false,
  setIsModeAdmin: () => {},

  isCollapse: false,
  setIsCollapse: () => {},

  currentTabSelected: "",
  setCurrentTabSelected: () => {},

  username: "",
  titleInputRef: {},

  menu: [],
  setMenu: () => {},

  handleAdd: () => {},
  handleEdit: () => {},
  handleDelete: () => {},
  handleReset: () => {},

  newProduct: {},
  setNewProduct: () => {},

  productSelected: {},
  setProductSelected: () => {},

  basketMenu: [],
  setBasketMenu: () => {},
});
