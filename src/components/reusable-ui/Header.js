import React from "react";

export default function Header({ children }) {
  return (
    <div className="h-[8%] bg-black flex items-center justify-center">
      {children}
    </div>
  );
}
