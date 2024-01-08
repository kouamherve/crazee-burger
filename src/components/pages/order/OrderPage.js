import React, { useReducer, useState } from "react";
import Main from "./main/Main";
import clsx from "clsx";
import { refreshPage } from "../../../utils/utils";
import Navbar from "./navbar/Navbar";
import OrderContext from "../../../context/OrderContext";
import { useParams } from "react-router-dom";
import { fakeMenu } from "../../../fakeData/fakeMenu";
import { menuReducer } from "../../../reducer/menuReducer";
import { fieldReducer } from "../../../reducer/fieldReducer";

const DEFAULT_PRODUCT = {
  id: "",
  title: "",
  image: "",
  price: 0,
};

export default function OrderPage() {
  const [isModeAdmin, setIsModeAdmin] = useState(false);
  const [isCollapse, setIsCollapse] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const { username } = useParams();
  const [currentTabSelected, setCurrentTabSelected] = useState("add");
  const [menu, dispatchMenu] = useReducer(menuReducer, fakeMenu.LARGE);
  const [newProduct, dispatchField] = useReducer(fieldReducer, DEFAULT_PRODUCT);

  const handleAdd = (newProduct) => {
    dispatchMenu({
      type: "added",
      id: newProduct.id,
      title: newProduct.title,
      image: newProduct.image,
      price: newProduct.price,
    });
    handleFieldReset();
    setShowToast(true);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatchField({ type: "update", field: name, value });
  };

  const handleDelete = (productId) => {
    dispatchMenu({
      type: "deleted",
      id: productId,
    });
  };

  const handleReset = () => {
    dispatchMenu({ type: "reset" });
  };

  const handleFieldReset = () => {
    dispatchField({ type: "reset" });
  };

  setTimeout(() => {
    setShowToast(false);
  }, 2000);

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
    handleChange,
    handleDelete,
    showToast,
    setShowToast,
    newProduct,
    handleReset,
  };

  const orderPageClassName = clsx(
    "flex flex-col items-center ",
    "h-screen p-6 font-openSans"
  );

  return (
    <OrderContext.Provider value={orderContextValue}>
      <div className={orderPageClassName}>
        <div className="min-w-[1400px] ">
          <Navbar onClick={refreshPage} />
          <Main />
        </div>
      </div>
    </OrderContext.Provider>
  );
}
