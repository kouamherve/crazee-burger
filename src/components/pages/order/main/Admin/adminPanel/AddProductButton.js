import React from "react";
import Button from "../../../../../reusable-ui/Button";
import ToastAddSuccess from "./ToastAddSuccess";

export default function AddProductButton({ isSubmitted }) {
  return (
    <div className="w-full flex items-center">
      <Button
        type="submit"
        label="Ajouter un nouveau produit au menu"
        version="success"
      />
      {isSubmitted && <ToastAddSuccess />}
    </div>
  );
}
