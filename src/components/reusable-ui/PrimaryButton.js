import React from "react";

export default function PrimaryButton({ label, Icon, className }) {
  return (
    <button type="submit" className={className}>
      <span className="h-[17px]">{label}</span>
      {Icon && Icon}
    </button>
  );
}
