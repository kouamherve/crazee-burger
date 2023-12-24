import React, { useContext } from "react";
import TabAddSelectedContext from "../../../../../context/TabAddSelectedContext";
import TabEditSelectedContext from "../../../../../context/TabEditSelectedContext";

export default function AdminPanel() {
  const { isAddSelected } = useContext(TabAddSelectedContext);
  const { isEditSelected } = useContext(TabEditSelectedContext);

  return (
    <div className="h-[250px] bg-white border-greyLight shadow-subtle">
      {isAddSelected && <div>Ajouter un produit</div>}
      {isEditSelected && <div>Modifier un produit</div>}
    </div>
  );
}
