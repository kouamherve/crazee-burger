import React from "react";

export default function AddAdminPanel() {
  return (
    <div className="h-[160px] border-2 border-red ml-[71px] mt-8 flex space-x-5">
      <div className="w-[215px] h-[120px] rounded-md  font-openSans text-base font-normal text-greySemiDark flex items-center justify-center border-2 border-green">
        <span>Aucune image</span>
      </div>
      <div className=" h-[120px] border-2 border-green w-full">
        <form className="flex flex-col ">
          <input
            className="w-full border border-blue"
            type="text"
            placeholder="Nom du produit (ex: Super Burger)"
          />
          <input
            className="w-full border border-blue"
            type="text"
            placeholder="Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"
          />
          <input
            className="w-full border border-blue"
            type="number"
            placeholder="Prix"
          />
        </form>
      </div>
    </div>
  );
}
