import React from "react";

export default function Basket() {
  return (
    <div className=" text-background_white flex flex-col h-[100%] font-amatic">
      <div className="h-[8%] bg-black text-4xl px-4 flex justify-between items-center">
        <span className="text-primary/90">total</span>
        <span className="text-primary font-bold">0,00 €</span>
      </div>
      <div className="h-[84%] text-4xl leading-[72px] bg-background_white text-greyBlue shadow-basket flex items-center justify-center">
        <span>Votre commande est vide.</span>
      </div>
      <div className="h-[8%] bg-black font-bold text-xl text-white/80 flex items-center justify-center">
        <span>Codé avec ❤️ et React.JS</span>
      </div>
    </div>
  );
}
