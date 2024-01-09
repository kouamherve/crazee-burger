import React, { useContext } from "react";
import clsx from "clsx";
import Card from "../../../reusable-ui/Card";
import OrderContext from "../../../../context/OrderContext";
import EmptyMenuAdmin from "./Admin/adminPanel/EmptyMenuAdmin";
import { formatPrice } from "../../../../utils/maths";
import EmptyMenuClient from "./Admin/adminPanel/EmptyMenuClient";

const DEFAULT_IMAGE = "/images/coming-soon.png";

export default function Menu() {
  const { menu, handleDelete, isModeAdmin, handleReset } =
    useContext(OrderContext);

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
            onDelete={() => handleDelete(id)}
            hasDeleted={isModeAdmin}
          />
        ))
      ) : isModeAdmin ? (
        <EmptyMenuAdmin onReset={handleReset} />
      ) : (
        <EmptyMenuClient />
      )}
    </div>
  );
}
