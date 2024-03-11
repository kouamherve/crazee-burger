import React, { useContext, useState } from "react";
import HintMessage from "./HintMessage";
import OrderContext from "../../../../../../context/OrderContext";
import Form from "./Form";
import MessageProductToEdit from "./MessageProductToEdit";
import { useSuccessMessage } from "../../../../../../hooks/useSuccessMessage";
import SavingMessage from "./SavingMessage";

export default function EditPanel() {
  // state
  const [valueOnFocus, setValueOnFocus] = useState();

  const {
    username,
    productSelected,
    setProductSelected,
    handleEdit,
    titleInputRef,
  } = useContext(OrderContext);

  const { isSubmitted: isValue, displaySuccessMessage } = useSuccessMessage();

  // event handler
  const handleChange = (event) => {
    const productBeingUpdated = {
      ...productSelected,
      [event.target.name]: event.target.value,
    };
    setProductSelected(productBeingUpdated);
    handleEdit(productBeingUpdated, username);
  };

  const handleOnFocus = (event) => {
    const valueOnFocus = event.target.value;
    setValueOnFocus(valueOnFocus);
  };

  const handleOnBlur = (event) => {
    const valueOnBlur = event.target.value;
    if (valueOnFocus !== valueOnBlur) {
      displaySuccessMessage();
    }
  };

  return (
    <div>
      {productSelected ? (
        <Form
          product={productSelected}
          onChange={handleChange}
          ref={titleInputRef}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
        >
          {isValue ? <SavingMessage /> : <MessageProductToEdit />}
        </Form>
      ) : (
        <HintMessage />
      )}
    </div>
  );
}
