import React, { useContext, useState } from "react";
import OrderContext from "../../../../../../context/OrderContext";
import AddForm from "./AddForm";
import ImagePreview from "./ImagePreview";

// let nextId = 11;
export default function AddPanel() {
  const [nameValue, setNameValue] = useState("");
  const [imageValue, setImageValue] = useState("");
  const [priceValue, setPriceValue] = useState("");
  const [showToast, setShowToast] = useState(false);

  const { menu, setMenu } = useContext(OrderContext);

  const handleAddProduct = (event) => {
    event.preventDefault();
    setMenu([
      {
        id: new Date().getTime(),
        title: nameValue,
        imageSource: imageValue,
        price: priceValue,
      },
      ...menu,
    ]);
    setNameValue("");
    setImageValue("");
    setPriceValue("");
    setShowToast(true);
  };

  setTimeout(() => {
    setShowToast(false);
  }, 3000);

  return (
    <div className="h-[160px] w-[880px]">
      <div className="mt-[30px] flex space-x-5 w-full h-full mb-13">
        <ImagePreview imageValue={imageValue} nameValue={nameValue} />
        <AddForm
          nameValue={nameValue}
          setNameValue={setNameValue}
          imageValue={imageValue}
          setImageValue={setImageValue}
          priceValue={priceValue}
          setPriceValue={setPriceValue}
          handleAddProduct={handleAddProduct}
          showToast={showToast}
          setShowToast={setShowToast}
        />
      </div>
    </div>
  );
}
