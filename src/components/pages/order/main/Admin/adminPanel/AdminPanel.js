import React, { useContext } from "react";
import OrderContext from "../../../../../../context/OrderContext";
import AddPanel from "./AddPanel";
import EditPanel from "./EditPanel";

export default function AdminPanel() {
  const { currentTabSelected } = useContext(OrderContext);

  return (
    <div className="h-64 pl-[70px] pt-4 bg-white font-openSans text-base font-normal border border-greyLight shadow-subtle">
      {currentTabSelected === "" ? (
        ""
      ) : currentTabSelected === "Ajouter un produit" ? (
        <AddPanel />
      ) : currentTabSelected === "Modifier un produit" ? (
        <EditPanel />
      ) : (
        ""
      )}
    </div>
  );
}
