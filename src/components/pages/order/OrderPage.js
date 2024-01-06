import React, { useReducer, useState } from "react";
import Main from "./main/Main";
import clsx from "clsx";
import { refreshPage } from "../../../utils/utils";
import Navbar from "./navbar/Navbar";
import OrderContext from "../../../context/OrderContext";
import { useParams } from "react-router-dom";
import { fakeMenu } from "../../../fakeData/fakeMenu";
import { menuReducer } from "./main/Admin/menuReducer";

export default function OrderPage() {
  const [isModeAdmin, setIsModeAdmin] = useState(false);
  const [isCollapse, setIsCollapse] = useState(false);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [showToast, setShowToast] = useState(false);
  const { username } = useParams();
  const [currentTabSelected, setCurrentTabSelected] = useState("add");
  const [menu, dispatch] = useReducer(menuReducer, fakeMenu.LARGE);

  const resetForm = () => {
    setTitle("");
    setImage("");
    setPrice("");
  };

  const handleAdd = (title) => {
    dispatch({
      type: "added",
      id: crypto.randomUUID(),
      title: title,
      image: image,
      price: price,
    });
    resetForm();
    setShowToast(true);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "title") {
      setTitle(value);
    } else if (name === "image") {
      setImage(value);
    } else if (name === "price") {
      setPrice(value);
    }
  };

  const handleDelete = (productId) => {
    dispatch({
      type: "deleted",
      id: productId,
    });
  };

  setTimeout(() => {
    setShowToast(false);
  }, 3000);

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
    title,
    setTitle,
    image,
    setImage,
    price,
    setPrice,
    showToast,
    setShowToast,
  };

  const orderPageClassName = clsx(
    "flex flex-col items-center ",
    "h-screen p-6 font-openSans"
  );

  return (
    <OrderContext.Provider value={orderContextValue}>
      <div className={orderPageClassName}>
        <div className="w-full ">
          <Navbar onClick={refreshPage} />
          <Main />
        </div>
      </div>
    </OrderContext.Provider>
  );
}
