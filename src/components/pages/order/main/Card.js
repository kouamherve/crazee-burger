import React from "react";
import PrimaryButton from "../../../reusable-ui/PrimaryButton";
import { formatPrice } from "../../../../utils/maths";
import clsx from "clsx";

export default function Card({ imageSource, title, price }) {
  const classes = {
    cardClassName: clsx(
      "w-[240px] h-[330px]",
      "flex flex-col items-center",
      "bg-white rounded-[15px] shadow-card"
    ),
    imageContainer: "w-[200px] h-[145px] mx-5 mt-[50px] mb-[15px]",
    image: "object-contain object-center w-full h-full",
    infoTextContainer: "w-[200px] h-[110px] flex flex-col space-y-5",
    infoTextTitle: clsx(
      "w-full h-[46px]",
      "text-[36px] truncate text-dark leading-[45.4px]",
      "font-amatic font-bold"
    ),
    descriptionContainer: clsx(
      "flex items-center justify-between",
      "px-[5px] pb-[5px]"
    ),
    priceClassName: "text-[16px] text-primary leading-[22px] font-normal",
    btnClassName: clsx(
      "text-[11px] leading-[12px] text-white font-bold",
      "border border-primary bg-primary hover:bg-primary/75 rounded-[5px]",
      "w-[95px] h-[38px]",
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
