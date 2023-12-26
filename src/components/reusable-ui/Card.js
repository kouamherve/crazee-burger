import React from "react";
import PrimaryButton from "./PrimaryButton";
import { formatPrice } from "../../utils/maths";
import clsx from "clsx";

export default function Card({ imageSource, title, price }) {
  const classes = {
    cardClassName: clsx(
      "w-60 h-85 bg-white",
      "flex flex-col items-center",
      "rounded-2xl shadow-medium"
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
    priceClassName: "text-[16px] text-primary leading-5.5 font-normal",
    btnClassName: clsx(
      "w-24 h-9 text-xs leading-3 text-white font-bold",
      "border border-primary bg-primary hover:bg-primary/75 rounded-md",
      "active:bg-white active:text-primary"
    ),
  };

  return (
    <div className={classes.cardClassName}>
      <div className={classes.imageContainer}>
        <img src={imageSource} alt={title} className={classes.image} />
      </div>
      <div className={classes.infoTextContainer}>
        <div className={classes.infoTextTitle}>{title}</div>
        <div className={classes.descriptionContainer}>
          <span className={classes.priceClassName}>{formatPrice(price)}</span>
          <PrimaryButton label={"Ajouter"} className={classes.btnClassName} />
        </div>
      </div>
    </div>
  );
}
