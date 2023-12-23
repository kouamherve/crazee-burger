import React from "react";

export default function Tab({ onClick, children, btn_tab }) {
  return (
    <button
      onClick={onClick}
      className={`${btn_tab} h-11 rounded-t-md border-b-2 hover:border-b-transparent shadow-subtle  text-base px-[22px] relative left-[5%] flex items-center justify-center`}
    >
      {children}
    </button>
  );
}
