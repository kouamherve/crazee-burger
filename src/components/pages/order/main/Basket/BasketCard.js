import React from "react";
import { formatPrice } from "../../../../../utils/maths";
import { MdDeleteForever } from "react-icons/md";
import { DEFAULT_IMAGE } from "../../../../../enum/product";
import { motion } from "framer-motion";

export default function BasketCard({
  product,
  onDeleted,
  isClickable,
  onClick,
  isSelected,
}) {
  return (
    <motion.div
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.2 }}
      // exit={{ x: -100, opacity: 0, transition: { duration: 0.5 } }}
      onClick={onClick}
      className={`${
        isClickable ? "cursor-pointer" : "cursor-default"
      } h-[86px] mx-5 my-5 shadow-basketCard ${
        isSelected ? "bg-primary" : "bg-white"
      } flex items-center group overflow-hidden rounded-md`}
    >
      <div className="w-1/3 h-[70px] my-2 ml-5 flex items-center justify-center">
        <img
          src={product.imageSource ? product.imageSource : DEFAULT_IMAGE}
          alt={product.title}
          className="object-contain h-full w-full"
        />
      </div>
      <div className="h-full w-2/3">
        <div className="ml-4 h-full w-full flex items-center justify-center ">
          <div className="h-[70px] flex flex-col w-[130px] pt-1 pr-5 pb-2">
            <div className="w-[98px] h-full truncate">
              <span className="font-amatic font-bold text-2xl leading-8 text-dark">
                {product.title}
              </span>
            </div>
            <span
              className={`${
                isSelected ? "text-white/80" : "text-primary/80"
              } font-openSans text-sm mt-1`}
            >
              {formatPrice(product.price)}
            </span>
          </div>
          <div className="w-[80px] h-full flex items-center justify-center">
            <span
              className={`${
                isSelected ? "text-white/70" : "text-primary/70"
              } group-hover:hidden ml-5 font-openSans text-sm leading-5 grid grid-cols-2 space-x-[5px]`}
            >
              <span>x</span>
              <span className="flex items-center justify-center">
                {product.quantity}
              </span>
            </span>
            <button
              onClick={onDeleted}
              className="w-full h-full bg-red text-white active:text-white hover:text-black invisible group-hover:visible flex items-center justify-center"
            >
              <MdDeleteForever className=" w-8 h-6 font-bold fill-current" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
