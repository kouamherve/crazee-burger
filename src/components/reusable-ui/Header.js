import React from "react";

export default function Header({ children }) {
  return (
    <div className="h-[70px] bg-black/80 flex items-center justify-center">
      {children}
    </div>
  );
}
