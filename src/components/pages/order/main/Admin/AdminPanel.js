import React, { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";

export default function AdminPanel() {
  const { isAddSelected, isEditSelected } = useContext(OrderContext);
  return (
    <div className="h-[250px] bg-white border-greyLight shadow-subtle font-openSans text-base font-normal pl-5 pt-4">
      {isAddSelected && <div>Ajouter un produit</div>}
      {isEditSelected && <div>Modifier un produit</div>}
    </div>
  );
}
