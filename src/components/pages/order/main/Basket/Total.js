import React from "react";
import Header from "../../../../reusable-ui/Header";

export default function Total({ amountToPay }) {
  return (
    <Header>
      <div className="text-4xl px-4 w-full flex justify-between">
        <span className="text-primary/90">total</span>
        <span className="text-primary font-bold">{amountToPay}</span>
      </div>
    </Header>
  );
}
