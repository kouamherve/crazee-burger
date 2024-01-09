import React from "react";
import Button from "../../../../../reusable-ui/Button";
import ToastAddSuccess from "./ToastAddSuccess";

export default function AddProductButton({ toast }) {
  return (
    <div className="w-full flex items-center">
      <Button
        type="submit"
        label="Ajouter un nouveau produit au menu"
        version="success"
      />
      {toast && <ToastAddSuccess />}
    </div>
  );
}
