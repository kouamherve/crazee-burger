import React from "react";

export default function Basket() {
  return (
    <div className=" text-background_white flex flex-col h-[100%]">
      <div className="h-[8%] bg-black font-amatic font-normal text-4xl tracking-widest px-4 text-primary flex justify-between items-center">
        <span>total</span>
        <span>0,00 €</span>
      </div>
      <div className="h-[84%] font-amatic font-normal text-4xl leading-[72px] text-greyBlue flex items-center justify-center">
        <span>Votre commande est vide.</span>
      </div>
      <div className="h-[8%] bg-black font-amatic font-bold text-xl flex items-center justify-center">
        <span>Codé avec ❤️ et React.JS</span>
      </div>
    </div>
  );
}
