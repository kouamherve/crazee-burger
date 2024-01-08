import React, { useContext } from "react";
import OrderContext from "../../../../../../context/OrderContext";

export default function ImagePreview() {
  const { newProduct } = useContext(OrderContext);
  return (
    <div
      className={`w-[27%] h-[120px] rounded-md font-openSans text-base font-normal ${
        newProduct.image ? "" : "border border-greyLight"
      } text-greySemiDark flex items-center justify-center`}
    >
      {newProduct.image ? (
        <img
          src={newProduct.image}
          alt={newProduct.title}
          className="w-full h-full object-contain object-center"
        />
      ) : (
        <span>Aucune image</span>
      )}
    </div>
  );
}
