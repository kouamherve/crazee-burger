import React from "react";

export default function PrimaryButton({ label, Icon, className, onClick }) {
  return (
    <button onClick={onClick} className={className}>
      <span className="h-[17px]">{label}</span>
      {Icon && Icon}
    </button>
  );
}
