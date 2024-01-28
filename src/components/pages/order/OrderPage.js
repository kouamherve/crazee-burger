import React, { useRef, useState } from "react";
import Main from "./Main/Main";
import clsx from "clsx";
import { refreshPage } from "../../../utils/utils";
import Navbar from "./navbar/Navbar";
import OrderContext from "../../../context/OrderContext";
import { useParams } from "react-router-dom";
import { fakeMenu } from "../../../fakeData/fakeMenu";
import { deepClone } from "../../../utils/array";
import { DEFAULT_PRODUCT } from "../../../enum/product";

export default function OrderPage() {
  // state
  const [isModeAdmin, setIsModeAdmin] = useState(false);
  const [isCollapse, setIsCollapse] = useState(false);
  const [productSelected, setProductSelected] = useState(false);
  const { username } = useParams();
  const [currentTabSelected, setCurrentTabSelected] = useState("add");
  const [menu, setMenu] = useState(fakeMenu.LARGE);
  const [newProduct, setNewProduct] = useState(DEFAULT_PRODUCT);

  const titleInputRef = useRef();

  // state handlers
  const handleAdd = (newProduct) => {
    const menuCopy = deepClone(menu);
    const menuUpdated = [newProduct, ...menuCopy];
    setMenu(menuUpdated);
  };

  const handleEdit = (updatedProduct) => {
    setMenu(
      menu.map((product) => product.id === updatedProduct.id && updatedProduct)
    );
  };

  const handleDelete = (productId) => {
    setMenu(menu.filter((p) => p.id !== productId));
  };

  const handleReset = () => {
    setMenu(fakeMenu.LARGE);
  };

  const orderContextValue = {
    isModeAdmin,
    setIsModeAdmin,
    isCollapse,
    setIsCollapse,
    currentTabSelected,
    setCurrentTabSelected,
    username,
    menu,
    handleAdd,
    handleEdit,
    handleDelete,
    newProduct,
    setNewProduct,
    handleReset,
    productSelected,
    setProductSelected,
    titleInputRef,
  };

  // css
  const orderPageClassName = clsx(
    "flex flex-col items-center",
    "h-screen p-6 font-openSans"
  );

  return (
    <OrderContext.Provider value={orderContextValue}>
      <div className={orderPageClassName}>
        <div className="w-full">
          <Navbar onClick={refreshPage} />
          <Main />
        </div>
      </div>
    </OrderContext.Provider>
  );
}
