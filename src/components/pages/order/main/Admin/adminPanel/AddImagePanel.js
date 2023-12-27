import React from "react";

export default function AddImagePanel({ imageValue, nameValue }) {
  return (
    <div
      className={`w-[27%] h-[120px] rounded-md font-openSans text-base font-normal ${
        imageValue ? "" : "border border-greyLight"
      } text-greySemiDark flex items-center justify-center`}
    >
      {imageValue ? (
        <div className=" w-[100px] h-[100px]">
          <img src={imageValue} alt={nameValue} />
        </div>
      ) : (
        <span>Aucune image</span>
      )}
    </div>
  );
}
