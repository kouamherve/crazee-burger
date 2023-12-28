import React, { useContext, useState } from "react";
import OrderContext from "../../../../../../context/OrderContext";
import AddImagePanel from "./AddImagePanel";
import AddFormPanel from "./AddFormPanel";

let nextId = 10;
export default function AddAdminPanel() {
  const [nameValue, setNameValue] = useState("");
  const [imageValue, setImageValue] = useState("");
  const [priceValue, setPriceValue] = useState("");
  const [showToast, setShowToast] = useState(false);

  const { menu, setMenu } = useContext(OrderContext);

  setTimeout(() => {
    setShowToast(false);
  }, 3000);

  const handleAddProduct = (event) => {
    event.preventDefault();
    setMenu([
      {
        id: nextId++,
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

  return (
    <div className="h-[160px] w-[880px]">
      <div className="mt-[30px] flex space-x-5 w-full h-full mb-13">
        <AddImagePanel imageValue={imageValue} nameValue={nameValue} />
        <AddFormPanel
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
