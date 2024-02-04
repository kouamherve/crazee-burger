import React, { useRef, useState } from "react";
import Main from "./Main/Main";
import clsx from "clsx";
import { refreshPage } from "../../../utils/utils";
import Navbar from "./navbar/Navbar";
import OrderContext from "../../../context/OrderContext";
import { useParams } from "react-router-dom";
import { DEFAULT_PRODUCT } from "../../../enum/product";
import { useMenu } from "../../../hooks/useMenu";
import { formatPrice } from "../../../utils/maths";

export default function OrderPage() {
  // state
  const [isModeAdmin, setIsModeAdmin] = useState(false);
  const [isCollapse, setIsCollapse] = useState(false);
  const [productSelected, setProductSelected] = useState(false);
  const { username } = useParams();
  const [currentTabSelected, setCurrentTabSelected] = useState("add");
  const [newProduct, setNewProduct] = useState(DEFAULT_PRODUCT);
  const [basketMenu, setBasketMenu] = useState([]);

  const titleInputRef = useRef();
  const { menu, handleAdd, handleEdit, handleDelete, handleReset } = useMenu();

  const findTotal = () => {
    let t = 0;
    basketMenu.map(({ price, quantity }) => (t = t + price * quantity));
    return formatPrice(t);
  };

  const handleBasketCardSubmit = (event, product) => {
    event.stopPropagation();
    const existingProductIndex = basketMenu.findIndex(
      (item) => item.id === product.id
    );
    if (existingProductIndex !== -1) {
      const nextBasketMenu = [...basketMenu];
      nextBasketMenu[existingProductIndex].quantity += 1;
      setBasketMenu(nextBasketMenu);
    } else {
      const newProductToAdd = {
        ...product,
        quantity: 1,
      };
      setBasketMenu([newProductToAdd, ...basketMenu]);
    }
  };

  const handleBasketCardDeleted = (productId) => {
    setBasketMenu(basketMenu.filter((prod) => prod.id !== productId));
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
    setBasketMenu,
    findTotal,
    handleBasketCardSubmit,
    handleBasketCardDeleted,
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
