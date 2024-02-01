import React, { useContext } from "react";
import BasketCard from "../../../../reusable-ui/BasketCard";
import OrderContext from "../../../../../context/OrderContext";

export default function BasketBody() {
  const { basketMenu } = useContext(OrderContext);
  return (
    // <div className="flex-1 text-4xl leading-[72px] bg-background_white text-greyBlue shadow-basket flex items-center justify-center">
    //   <span>Votre commande est vide.</span>
    // </div>
    <div className=" h-[84%] bg-background_white text-black">
      {basketMenu.map((product) => (
        <BasketCard product={product} />
      ))}
    </div>
  );
}
