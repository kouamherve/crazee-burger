import React, { useContext } from "react";
import clsx from "clsx";
import Card from "../../../reusable-ui/Card";
import OrderContext from "../../../../context/OrderContext";
import EmptyMenuAdmin from "./Admin/EmptyMenuAdmin";
import EmptyMenu from "./EmptyMenu";
import { formatPrice } from "../../../../utils/maths";

const DEFAULT_IMAGE = "/images/coming-soon.png";

export default function Menu() {
  const { menu, handleDelete, isModeAdmin } = useContext(OrderContext);

  const menuClassName = clsx(
    "w-full p-13 gap-x-21 gap-y-15",
    "shadow-strong bg-background_white overflow-y-auto",
    "grid grid-cols-container justify-items-center"
  );

  return (
    <div className={menuClassName}>
      {menu.length !== 0 ? (
        menu.map(({ id, title, imageSource, price }) => (
          <Card
            key={id}
            imageSource={imageSource ? imageSource : DEFAULT_IMAGE}
            title={title}
            price={formatPrice(price)}
            onClick={() => handleDelete(id)}
          />
        ))
      ) : isModeAdmin ? (
        <EmptyMenuAdmin />
      ) : (
        <EmptyMenu />
      )}
    </div>
  );
}
