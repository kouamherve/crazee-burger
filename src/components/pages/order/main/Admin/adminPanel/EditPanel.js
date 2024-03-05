import React, { useContext } from "react";
import HintMessage from "./HintMessage";
import OrderContext from "../../../../../../context/OrderContext";
import Form from "./Form";
import MessageProductToEdit from "./MessageProductToEdit";

export default function EditPanel() {
  // state
  const {
    username,
    productSelected,
    setProductSelected,
    handleEdit,
    titleInputRef,
  } = useContext(OrderContext);

  // event handler
  const handleChange = (event) => {
    const productBeingUpdated = {
      ...productSelected,
      [event.target.name]: event.target.value,
    };
    setProductSelected(productBeingUpdated);
    handleEdit(productBeingUpdated, username);
  };

  return (
    <div>
      {productSelected ? (
        <Form
          product={productSelected}
          onChange={handleChange}
          ref={titleInputRef}
        >
          <MessageProductToEdit />
        </Form>
      ) : (
        <HintMessage />
      )}
    </div>
  );
}
