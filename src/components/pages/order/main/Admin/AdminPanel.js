import React, { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";
import AddAdminPanel from "./AddAdminPanel";
import EditAdminPanel from "./EditAdminPanel";

export default function AdminPanel() {
  const { currentTabSelected } = useContext(OrderContext);

  return (
    <div className="h-64 pl-5 pt-4 bg-white font-openSans text-base font-normal border border-greyLight shadow-subtle">
      {currentTabSelected === "" ? (
        ""
      ) : currentTabSelected === "Ajouter un produit" ? (
        <AddAdminPanel />
      ) : currentTabSelected === "Modifier un produit" ? (
        <EditAdminPanel />
      ) : (
        ""
      )}
    </div>
  );
}
