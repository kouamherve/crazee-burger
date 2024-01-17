import React, { useContext, useState } from "react";
import AddForm from "./AddForm";
import ImagePreview from "./ImagePreview";
import OrderContext from "../../../../../../context/OrderContext";

const DEFAULT_PRODUCT = {
  id: "",
  title: "",
  image: "",
  price: 0,
};
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

  return (
    <div className="h-[160px] w-[880px]">
      <div className="mt-[30px] flex space-x-5 w-full h-full mb-13">
        <ImagePreview title={newProduct.title} image={newProduct.imageSource} />
        <AddForm
          title={newProduct.title}
          image={newProduct.imageSource}
          price={newProduct.price}
          onChange={handleChange}
          onSubmit={handleSubmit}
          isSubmitted={isSubmitted}
        />
      </div>
    </div>
  );
}
