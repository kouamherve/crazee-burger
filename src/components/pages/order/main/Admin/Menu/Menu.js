import React, { useContext } from "react";
import clsx from "clsx";
import Card from "../../../../../reusable-ui/Card";
import OrderContext from "../../../../../../context/OrderContext";
import { formatPrice } from "../../../../../../utils/maths";
import EmptyMenuAdmin from "./EmptyMenuAdmin";
import EmptyMenuClient from "./EmptyMenuClient";

const DEFAULT_IMAGE = "/images/coming-soon.png";

export default function Menu() {
  // state
  const {
    menu,
    handleDelete,
    isModeAdmin,
    handleReset,
    productSelected,
    setProductSelected,
    currentTabSelected,
    setCurrentTabSelected,
    setIsCollapse,
    titleInputRef,
  } = useContext(OrderContext);

  // event handler
  const handleClick = async (product) => {
    if (!isModeAdmin) return;
    await setProductSelected(product);
    await setCurrentTabSelected("edit");
    await setIsCollapse(false);
    titleInputRef.current.focus();
  };

  // css
  const menuClassName = clsx(
    "w-full p-13 gap-x-21 gap-y-15",
    "shadow-strong bg-background_white overflow-y-auto",
    "grid grid-cols-container justify-items-center"
  );

  return (
    <div className={menuClassName}>
      {menu.length !== 0 ? (
        menu.map((product) => (
          <Card
            key={product.id}
            imageSource={
              product.imageSource ? product.imageSource : DEFAULT_IMAGE
            }
            title={product.title}
            price={formatPrice(product.price)}
            onDelete={() => handleDelete(product.id)}
            hasDeleted={isModeAdmin}
            onClick={() => handleClick(product)}
            isHoverable={isModeAdmin}
            isSelected={
              isModeAdmin &&
              currentTabSelected === "edit" &&
              productSelected === product
            }
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
