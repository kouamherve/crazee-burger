import React, { useContext } from "react";
import HintMessage from "./HintMessage";
import OrderContext from "../../../../../../context/OrderContext";
import Form from "./Form";

export default function EditPanel() {
  // state
  const { productSelected, setProductSelected, handleEdit, titleInputRef } =
    useContext(OrderContext);

  // event handler
  const handleChange = (event) => {
    const productBeingUpdated = {
      ...productSelected,
      [event.target.name]: event.target.value,
    };
    setProductSelected(productBeingUpdated);
    handleEdit(productBeingUpdated);
  };

  return (
    <div>
      {productSelected ? (
        <Form
          product={productSelected}
          onChange={handleChange}
          ref={titleInputRef}
        >
          <span className=" font-openSans font-normal text-sm text-primary">
            Cliquer sur un produit du menu pour le modifier{" "}
            <span className="underline">en temps réel</span>
          </span>
        </Form>
      ) : (
        <HintMessage />
      )}
    </div>
  );
}
