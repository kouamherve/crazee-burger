import React from "react";

export default function BasketCard() {
  return (
    <div className="h-[86px] border border-black mx-4 my-5">
      <div className="mx-4 mt-2 border border-blue h-[70px] flex">
        <div className="w-[85.8px] flex items-center justify-center border border-green">
          image
        </div>
        <div className="w-full border border-green">
          <div className="mx-4 h-full border border-red flex items-center justify-between">
            <div className="flex flex-col w-[120px] border border-blue">
              <span>name</span>
              <span>price</span>
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
