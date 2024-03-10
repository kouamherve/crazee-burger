import React, { useEffect, useRef, useState } from "react";
import Main from "./Main/Main";
import clsx from "clsx";
import Navbar from "./navbar/Navbar";
import OrderContext from "../../../context/OrderContext";
import { useParams } from "react-router-dom";
import { DEFAULT_PRODUCT } from "../../../enum/product";
import { useMenu } from "../../../hooks/useMenu";
import { useBasketMenu } from "../../../hooks/useBasketMenu";
import { refreshPage } from "../../../utils/window";
import { initUserSession } from "./helpers/initUserSession";

export default function OrderPage() {
  // state
  const [isModeAdmin, setIsModeAdmin] = useState(false);
  const [isCollapse, setIsCollapse] = useState(false);
  const [productSelected, setProductSelected] = useState(false);
  const { username } = useParams();
  const [currentTabSelected, setCurrentTabSelected] = useState("add");
  const [newProduct, setNewProduct] = useState(DEFAULT_PRODUCT);

  const titleInputRef = useRef();
  const { menu, setMenu, handleAdd, handleEdit, handleDelete, handleReset } =
    useMenu();
  const {
    basketMenu,
    setBasketMenu,
    handleAddToBasket,
    handleDeletedBasketCard,
  } = useBasketMenu();

  const handleProductSelected = async (product) => {
    await setCurrentTabSelected("edit");
    await setIsCollapse(false);
    await setProductSelected(product);
    titleInputRef.current.focus();
  };

  useEffect(() => {
    initUserSession(setMenu, setBasketMenu, username);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
    basketMenu,
    handleAddToBasket,
    handleDeletedBasketCard,
    handleProductSelected,
  };

  // css
  const orderPageClassName = clsx(
    "flex flex-col items-center",
    "h-screen p-6 mx-14 font-openSans"
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
