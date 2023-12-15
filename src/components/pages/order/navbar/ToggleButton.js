import React, { useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ToggleButton() {
  const [isChecked, setIsChecked] = useState(false);

  const handleClick = () => {
    if (!isChecked) {
      toast.info("Mode admin activé", {
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
    <div className="mr-[10px] w-[200px] h-[40px]">
      <div
        onClick={handleClick}
        className={`p-[5px] w-full h-full rounded-[30px] flex justify-between items-center cursor-pointer ease-in-out transition-colors duration-1000 transform ${
          isChecked ? "border-2 border-primary" : "bg-background_dark"
        }`}
      >
        <span
          className={`w-8 h-8 bg-primary rounded-full transition ease-in-out duration-500 pointer-events-none ${
            isChecked ? "translate-x-[155px]" : "translate-x-0"
          }`}
        />
        <span
          className={`text-[10px] uppercase font-openSans leading-[13.62px] transition ease-in-out duration-200 ${
            isChecked
              ? "text-dark font-normal tracking-[0.5px] -translate-x-[34px]"
              : "text-primary font-bold -translate-x-3 tracking-[0.5px]"
          }`}
        >
          {isChecked ? "désactiver le mode admin" : "activer le mode admin"}
        </span>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}
