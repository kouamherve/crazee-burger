import React, { useContext } from "react";
import AddForm from "./AddForm";
import ImagePreview from "./ImagePreview";
import OrderContext from "../../../../../../context/OrderContext";

export default function AddPanel() {
  const { newProduct, handleAdd, handleChange, showToast } =
    useContext(OrderContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newProductToAdd = {
      ...newProduct,
      id: crypto.randomUUID(),
    };
    handleAdd(newProductToAdd);
  };

  return (
    <div className="h-[160px] w-[880px]">
      <div className="mt-[30px] flex space-x-5 w-full h-full mb-13">
        <ImagePreview title={newProduct.title} image={newProduct.image} />
        <AddForm
          title={newProduct.title}
          image={newProduct.image}
          price={newProduct.price}
          onChange={handleChange}
          onSubmit={handleSubmit}
          toast={showToast}
        />
      </div>
    </div>
  );
}
