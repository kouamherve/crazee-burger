import React from "react";
import { formatPrice } from "../../utils/maths";
import clsx from "clsx";
import DeleteButton from "../pages/order/Main/Admin/AdminPanel/DeleteButton";
import Button from "./Button";

export default function Card({
  imageSource,
  title,
  price,
  onDelete,
  hasDeleted,
  onClick,
  isHoverable,
  isSelected,
}) {
  // css
  const classNames = {
    card: clsx(
      "relative w-60 h-85",
      "flex flex-col items-center",
      "rounded-2xl shadow-medium",
      `${
        isHoverable
          ? "hover:shadow-orangeHightLight hover:scale-110 hover:cursor-pointer transform transition-all duration-400 ease-out"
          : ""
      }`,
      `${isSelected ? "bg-primary" : "bg-white"}`
    ),
    imageContainer: "w-50 h-[145px] mx-5 mt-13 mb-4",
    image: "object-contain object-center w-full h-full",
    infoTextContainer: "w-50 h-[110px] flex flex-col space-y-5",
    infoTextTitle: clsx(
      "w-full h-11.5",
      "text-4xl truncate text-dark leading-12",
      "font-amatic font-bold"
    ),
    descriptionContainer: clsx(
      "flex items-center justify-between",
      "px-1.5 pb-1.5"
    ),
    price: `text-[16px] text-primary leading-5.5 font-normal ${
      isSelected && "text-white"
    }`,
  };

  return (
    <div className={classNames.card} onClick={onClick}>
      {hasDeleted && (
        <DeleteButton onDelete={onDelete} isSelected={isSelected} />
      )}
      <div className={classNames.imageContainer}>
        <img src={imageSource} alt={title} className={classNames.image} />
      </div>
      <div className={classNames.infoTextContainer}>
        <div className={classNames.infoTextTitle}>{title}</div>
        <div className={classNames.descriptionContainer}>
          <span className={classNames.price}>{formatPrice(price)}</span>
          <Button
            label={"Ajouter"}
            version="card"
            isSelected={isSelected}
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      </div>
    </div>
  );
}
