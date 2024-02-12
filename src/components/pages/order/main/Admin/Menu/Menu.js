import React, { useContext } from "react";
import clsx from "clsx";
import Card from "../../../../../reusable-ui/Card";
import OrderContext from "../../../../../../context/OrderContext";
import { formatPrice } from "../../../../../../utils/maths";
import EmptyMenuAdmin from "./EmptyMenuAdmin";
import EmptyMenuClient from "./EmptyMenuClient";
import { DEFAULT_IMAGE } from "../../../../../../enum/product";
import { isEmpty } from "../../../../../../utils/array";

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
    handleAddToBasket,
    handleDeletedBasketCard,
  } = useContext(OrderContext);

  // event handler
  const handleClick = async (product) => {
    if (!isModeAdmin) return;
    await setProductSelected(product);
    await setCurrentTabSelected("edit");
    await setIsCollapse(false);
    titleInputRef.current.focus();
  };

  const handleCardDeleted = (event, idProductToEdit) => {
    event.stopPropagation();
    handleDelete(idProductToEdit);
    handleDeletedBasketCard(idProductToEdit);
    if (productSelected.id === idProductToEdit) {
      setProductSelected(false);
    }
  };

  const handleAddButton = (event, productToAdd) => {
    event.stopPropagation();
    handleAddToBasket(productToAdd);
  };

  // css
  const menuClassName = clsx(
    "w-full p-13 gap-x-21 gap-y-15",
    "shadow-strong bg-background_white overflow-y-auto",
    "grid grid-cols-container justify-items-center"
  );

  return (
    <div className={menuClassName}>
      {isEmpty(menu) ? (
        isModeAdmin ? (
          <EmptyMenuAdmin onReset={handleReset} />
        ) : (
          <EmptyMenuClient />
        )
      ) : (
        menu.map((product) => (
          <Card
            key={product.id}
            imageSource={
              product.imageSource ? product.imageSource : DEFAULT_IMAGE
            }
            title={product.title}
            price={formatPrice(product.price)}
            onDelete={(event) => handleCardDeleted(event, product.id)}
            hasDeleted={isModeAdmin}
            onClick={() => handleClick(product)}
            isHoverable={isModeAdmin}
            isSelected={
              isModeAdmin &&
              currentTabSelected === "edit" &&
              productSelected === product
            }
            onAdded={(event) => handleAddButton(event, product)}
          />
        ))
      )}
    </div>
  );
}
