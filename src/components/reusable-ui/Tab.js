import React from "react";

export default function Tab({ children }) {
  return (
    <button className=" h-11 rounded-t-md border border-greyLight border-b-2 hover:border-b-transparent shadow-subtle bg-white text-base text-greySemiDark px-[22px] relative left-[5%] flex items-center justify-center">
      {children}
    </button>
  );
}
