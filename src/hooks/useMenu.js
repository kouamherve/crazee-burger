import { useState } from "react";
import { deepClone } from "../utils/array";
import { fakeMenu } from "../fakeData/fakeMenu";
import { syncBothMenus } from "../enum/product";

export const useMenu = () => {
  const [menu, setMenu] = useState(fakeMenu.LARGE);

  // state handlers
  const handleAdd = (newProduct, username) => {
    const menuCopy = deepClone(menu);
    const menuUpdated = [newProduct, ...menuCopy];
    setMenu(menuUpdated);
    syncBothMenus(username, menuUpdated);
  };

  const handleEdit = (updatedProduct) => {
    setMenu(
      menu.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
    );
  };

  const handleDelete = (productIdToDeleted, username) => {
    const menuUpdated = menu.filter((p) => p.id !== productIdToDeleted);
    setMenu(menuUpdated);
    syncBothMenus(username, menuUpdated);
  };

  const handleReset = () => {
    setMenu(fakeMenu.LARGE);
  };

  return { menu, setMenu, handleAdd, handleEdit, handleDelete, handleReset };
};
