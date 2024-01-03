import React, { useState } from "react";
import Main from "./main/Main";
import clsx from "clsx";
import { refreshPage } from "../../../utils/utils";
import Navbar from "./navbar/Navbar";
import OrderContext from "../../../context/OrderContext";
import { useParams } from "react-router-dom";
import { fakeMenu } from "../../../fakeData/fakeMenu";

export default function OrderPage() {
  const [isModeAdmin, setIsModeAdmin] = useState(false);
  const [isCollapse, setIsCollapse] = useState(false);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [showToast, setShowToast] = useState(false);
  const { username } = useParams();
  const [currentTabSelected, setCurrentTabSelected] = useState("add");
  const [menu, setMenu] = useState(fakeMenu.LARGE);

  const handleAdd = (event) => {
    event.preventDefault();
    setMenu([
      {
        id: crypto.randomUUID(),
        title: title,
        imageSource: image,
        price: price,
      },
      ...menu,
    ]);
    setTitle("");
    setImage("");
    setPrice("");
    setShowToast(true);
  };

  const handleDelete = (productId) => {
    setMenu(menu.filter((p) => p.id !== productId));
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
    setMenu,
    handleAdd,
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
