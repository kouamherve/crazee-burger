import React from "react";
import { formatPrice } from "../../utils/maths";

export default function BasketCard({ product }) {
  return (
    <div className="h-[86px] border border-black mx-4 my-5">
      <div className="mx-4 mt-2 border border-blue h-[70px] flex">
        <div className="w-[86px] h-full flex items-center justify-center border border-green">
          <img
            src={product.imageSource}
            alt={product.title}
            className="object-contain h-full w-full"
          />
        </div>
        <div className="w-full border border-green">
          <div className="mx-4 h-full border border-red flex items-center justify-between">
            <div className="flex flex-col w-[120px] border border-blue">
              <span>{product.title}</span>
              <span>{formatPrice(product.price)}</span>
            </div>
            <div className="w-[30px] mr-4 border border-blue">
              <span className="w-full">compt</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
