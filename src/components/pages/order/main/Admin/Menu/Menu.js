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
    basketMenu,
    setBasketMenu,
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
    if (productSelected.id === idProductToEdit) {
      setProductSelected(false);
    }
  };

  const handleBasketCardSubmit = (event, product) => {
    event.stopPropagation();
    const existingProductIndex = basketMenu.findIndex(
      (item) => item.id === product.id
    );
    if (existingProductIndex !== -1) {
      const nextBasketMenu = [...basketMenu];
      nextBasketMenu[existingProductIndex].quantity += 1;
      setBasketMenu(nextBasketMenu);
    } else {
      const newProductToAdd = {
        ...product,
        quantity: 1,
      };
      setBasketMenu([newProductToAdd, ...basketMenu]);
    }
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
            onDelete={(event) => handleCardDeleted(event, product.id)}
            hasDeleted={isModeAdmin}
            onClick={() => handleClick(product)}
            isHoverable={isModeAdmin}
            isSelected={
              isModeAdmin &&
              currentTabSelected === "edit" &&
              productSelected === product
            }
            onAdded={(event) => handleBasketCardSubmit(event, product)}
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
