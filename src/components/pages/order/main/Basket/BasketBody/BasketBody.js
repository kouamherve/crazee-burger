import React, { useContext } from "react";
import BasketProducts from "./BasketProducts";
import { isEmpty } from "../../../../../../utils/array";
import EmptyBasket from "./EmptyBasket";
import OrderContext from "../../../../../../context/OrderContext";

export default function BasketBody() {
  const { basketMenu, menu } = useContext(OrderContext);

  return (
    <>
      {isEmpty(basketMenu) ? (
        <EmptyBasket isLoading={menu === undefined} />
      ) : (
        <div
          className={`h-[84%] bg-background_white text-greyBlue shadow-basket overflow-y-auto`}
        >
          <BasketProducts />
        </div>
      )}
    </>
  );
}
