import React, { useState } from "react";
import { BsPersonCircle } from "react-icons/bs";
import Profile from "./Profile";
import clsx from "clsx";
import ToggleButton from "./ToggleButton";
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ToastAdmin from "./ToastAdmin";

export default function NavbarRightSide({ username }) {
  const rightSideClassName = clsx(
    "text-greyBlue",
    "gap-[10px] mr-[50px] pl-[50px]",
    "flex items-center justify-center"
  );

  const [isChecked, setIsChecked] = useState(false);

  const handleClick = () => {
    if (!isChecked) {
      toast.info("Mode admin activé", {
        // icon: <FaUserSecret size={30}/>,
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
    setIsChecked(!isChecked);
  };

  return (
    <div className="flex items-center ">
      <ToggleButton
        onClick={handleClick}
        isChecked={isChecked}
        labelIfChecked="désactiver le mode admin"
        labelIfUnchecked="activer le mode admin"
      />
      <ToastAdmin />
      <div className={rightSideClassName}>
        <Profile username={username} />
        <BsPersonCircle className=" w-9 h-9" />
      </div>
    </div>
  );
}
