import React, { useContext } from "react";
import OrderContext from "../../../../../../context/OrderContext";
import AddProductButton from "./AddProductButton";
import Form from "./Form";
import { DEFAULT_PRODUCT } from "../../../../../../enum/product";
import { useSuccessMessage } from "../../../../../../hooks/useSuccessMessage";

export default function AddPanel() {
  const { isSubmitted, displaySuccessMessage } = useSuccessMessage();
  const { newProduct, setNewProduct, handleAdd } = useContext(OrderContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newProductToAdd = {
      ...newProduct,
      id: crypto.randomUUID(),
    };
    handleAdd(newProductToAdd);
    setNewProduct(DEFAULT_PRODUCT);
    displaySuccessMessage();
  };

  const handleChange = (event) => {
    const product = { ...newProduct, [event.target.name]: event.target.value };
    setNewProduct(product);
  };

  return (
    <Form product={newProduct} onSubmit={handleSubmit} onChange={handleChange}>
      <AddProductButton isSubmitted={isSubmitted} />
    </Form>
  );
}
