import React, { useRef, useState } from "react";
import Main from "./Main/Main";
import clsx from "clsx";
import { refreshPage } from "../../../utils/utils";
import Navbar from "./navbar/Navbar";
import OrderContext from "../../../context/OrderContext";
import { useParams } from "react-router-dom";
import { DEFAULT_PRODUCT } from "../../../enum/product";
import { useMenu } from "../../../hooks/useMenu";
import { useBasketMenu } from "../../../hooks/useBasketMenu";
import { findAmountToPay } from "../../../utils/array";

export default function OrderPage() {
  // state
  const [isModeAdmin, setIsModeAdmin] = useState(false);
  const [isCollapse, setIsCollapse] = useState(false);
  const [productSelected, setProductSelected] = useState(false);
  const { username } = useParams();
  const [currentTabSelected, setCurrentTabSelected] = useState("add");
  const [newProduct, setNewProduct] = useState(DEFAULT_PRODUCT);

  const titleInputRef = useRef();
  const { menu, handleAdd, handleEdit, handleDelete, handleReset } = useMenu();
  const { basketMenu, handleAddToBasket, handleDeletedBasketCard } =
    useBasketMenu();

  const total = findAmountToPay(basketMenu);

  const handleClick = async (product) => {
    if (!isModeAdmin) return;
    await setCurrentTabSelected("edit");
    await setIsCollapse(false);
    await setProductSelected(product);
    titleInputRef.current.focus();
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
    basketMenu,
    total,
    handleAddToBasket,
    handleDeletedBasketCard,
    handleClick,
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
