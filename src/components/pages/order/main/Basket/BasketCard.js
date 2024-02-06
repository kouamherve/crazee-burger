import React from "react";
import { formatPrice } from "../../../../../utils/maths";
import { MdDeleteForever } from "react-icons/md";
import { DEFAULT_IMAGE } from "../../../../../utils/utils";

export default function BasketCard({ product, onDeleted }) {
  return (
    <div className="h-[86px] mx-5 my-5 shadow-basketCard bg-white flex items-center group overflow-hidden rounded-md">
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
            <span className="font-openSans text-sm text-primary/80 mt-1">
              {formatPrice(product.price)}
            </span>
          </div>
          <div className="w-[70px] h-full flex items-center justify-center">
            <span className="group-hover:hidden ml-5 font-openSans text-sm text-primary/70 leading-5 space-x-1">
              <span>x</span>
              <span>{product.quantity}</span>
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
    </div>
  );
}
