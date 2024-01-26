import React from "react";

export default function Basket() {
  return (
    <div className=" text-background_white flex flex-col h-[100%] font-amatic">
      <div className="h-[8%] bg-black text-4xl px-4 flex justify-between items-center">
        <span className="text-primary/60">total</span>
        <b>
          <span className="text-primary">0,00 €</span>
        </b>
      </div>
      <div className="h-[84%] text-4xl leading-[72px] text-greyBlue flex items-center justify-center">
        <span>Votre commande est vide.</span>
      </div>
      <div className="h-[8%] bg-black font-bold text-xl text-white/60 flex items-center justify-center">
        <span>Codé avec ❤️ et React.JS</span>
      </div>
    </div>
  );
}
