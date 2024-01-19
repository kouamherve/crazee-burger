import React, { useContext } from "react";
import HintMessage from "./HintMessage";
import OrderContext from "../../../../../../context/OrderContext";
import { getTextInputsConfig } from "./textInputsConfig";
import Form from "./Form";

export default function EditPanel() {
  // state
  const { productSelected, setProductSelected, handleEdit, titleInputRef } =
    useContext(OrderContext);

  const textInputs = getTextInputsConfig(
    productSelected.title,
    productSelected.imageSource,
    productSelected.price
  );

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
          onChange={handleChange}
          imagePreviewTitle={productSelected.title}
          imagePreviewimageSource={productSelected.imageSource}
          textInputs={textInputs}
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
