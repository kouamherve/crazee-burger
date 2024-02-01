import React from "react";
import BasketCard from "../../../../reusable-ui/BasketCard";

export default function BasketBody() {
  return (
    // <div className="flex-1 text-4xl leading-[72px] bg-background_white text-greyBlue shadow-basket flex items-center justify-center">
    //   <span>Votre commande est vide.</span>
    // </div>
    <div className=" h-[84%] bg-background_white text-black">
      <BasketCard />
    </div>
  );
}
