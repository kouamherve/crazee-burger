import React from "react";

export default function Tab({ label, onClick, Icon, className }) {
  return (
    <button
      onClick={onClick}
      className={`${className} h-11 rounded-t-md border-b-2 hover:border-b-transparent shadow-subtle text-base px-[22px] relative left-[5%] top-[2px] flex items-center justify-center`}
    >
      <div className="flex items-center justify-center gap-4">
        <span>{Icon}</span>
        {label && (
          <span className=" hover:underline hover:underline-offset-4">
            {label}
          </span>
        )}
      </div>
    </button>
  );
}
