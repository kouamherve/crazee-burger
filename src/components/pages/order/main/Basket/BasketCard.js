import React from "react";
import { formatPrice } from "../../../../../utils/maths";
import { MdDeleteForever } from "react-icons/md";
import { DEFAULT_IMAGE } from "../../../../../enum/product";
import { motion, AnimatePresence } from "framer-motion";

export default function BasketCard({
  product,
  onDeleted,
  isClickable,
  onClick,
  isSelected,
}) {
  return (
    <div
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
          <div className="w-[70px] h-full flex items-center justify-center">
            <span
              className={`${
                isSelected ? "text-white/70" : "text-primary/70"
              } group-hover:hidden ml-3 font-openSans text-sm leading-5 grid grid-cols-2 space-x-2`}
            >
              <span>x</span>
              <div>
                <AnimatePresence mode="popLayout">
                  <motion.span
                    key={product.quantity}
                    initial={{ y: 15 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.3,
                    }}
                    exit={{ y: -15, opacity: 0.01 }}
                    className="flex items-center justify-center"
                  >
                    {product.quantity}
                  </motion.span>
                </AnimatePresence>
              </div>
            </span>
            <div className="w-full h-full">
              <button
                onClick={onDeleted}
                className=" -translate-x-3 w-full h-full bg-red text-white active:text-white hover:text-black invisible group-hover:visible flex items-center justify-center"
              >
                <MdDeleteForever className=" w-7 h-7 font-bold fill-current" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
