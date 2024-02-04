import React from "react";
import { formatPrice } from "../../utils/maths";

const DEFAULT_IMAGE = "/images/coming-soon.png";

export default function BasketCard({ product, onDeleted }) {
  return (
    <div className="h-[86px] mx-4 my-5 shadow-basketCard bg-white flex items-center justify-center group">
      <div className="mx-4 mt-2 h-[70px] flex items-center justify-center">
        <div className="w-[86px] h-full ">
          <img
            src={product.imageSource ? product.imageSource : DEFAULT_IMAGE}
            alt={product.title}
            className="object-contain h-full w-full"
          />
        </div>
        <div className="w-full">
          <div className="mx-4 h-full flex items-center justify-between">
            <div className="flex flex-col w-[120px]">
              <span className="truncate">{product.title}</span>
              <span>{formatPrice(product.price)}</span>
            </div>
            <div className="flex items-center justify-center">
              <span className="w-[30px] group-hover:hidden">
                {product.quantity}
              </span>
              <button
                onClick={onDeleted}
                className="w-[76px] h-[86px] bg-red invisible group-hover:visible hover:text-white"
              >
                delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
