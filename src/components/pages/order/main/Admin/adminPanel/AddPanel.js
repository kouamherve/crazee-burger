import React, { useContext, useState } from "react";
import OrderContext from "../../../../../../context/OrderContext";
import Form from "./Form";
import { DEFAULT_PRODUCT } from "../../../../../../enum/enum";
import { getTextInputsConfig } from "./textInputsConfig";
import AddProductButton from "./AddProductButton";

export default function AddPanel() {
  const [isSubmitted, setIsSubmitted] = useState(false);

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
    setNewProduct({ ...newProduct, [event.target.name]: event.target.value });
  };

  const displaySuccessMessage = () => {
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
    }, 2000);
  };

  const textInputs = getTextInputsConfig(
    newProduct.title,
    newProduct.imageSource,
    newProduct.price
  );

  return (
    <Form
      textInputs={textInputs}
      imagePreviewTitle={newProduct.title}
      imagePreviewimageSource={newProduct.imageSource}
      onSubmit={handleSubmit}
      onChange={handleChange}
      isSubmitted={isSubmitted}
    >
      <AddProductButton isSubmitted={isSubmitted} />
    </Form>
  );
}
