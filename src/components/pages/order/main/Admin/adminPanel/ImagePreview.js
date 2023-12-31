import React, { useContext } from "react";
import OrderContext from "../../../../../../context/OrderContext";

export default function ImagePreview() {
  const { title, image } = useContext(OrderContext);
  return (
    <div
      className={`w-[27%] h-[120px] rounded-md font-openSans text-base font-normal ${
        image ? "" : "border border-greyLight"
      } text-greySemiDark flex items-center justify-center`}
    >
      {image ? (
        <div className=" w-[100px] h-[100px]">
          <img src={image} alt={title} />
        </div>
      ) : (
        <span>Aucune image</span>
      )}
    </div>
  );
}
