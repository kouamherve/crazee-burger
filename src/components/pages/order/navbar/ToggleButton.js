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
        className={`toggle ${
          isChecked ? "border-2 border-primary" : "bg-background_dark"
        }`}
      >
        <span
          className={`spanToggle ${
            isChecked ? "translate-x-[155px]" : "translate-x-0"
          }`}
        />
        <span
          className={`textToggle ${
            isChecked
              ? "text-dark font-normal -translate-x-[34px]"
              : "text-primary font-bold -translate-x-3"
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
