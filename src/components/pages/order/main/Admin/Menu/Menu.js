import React, { useContext } from "react";
import clsx from "clsx";
import Card from "../../../../../reusable-ui/Card";
import OrderContext from "../../../../../../context/OrderContext";
import { formatPrice } from "../../../../../../utils/maths";
import EmptyMenuAdmin from "./EmptyMenuAdmin";
import EmptyMenuClient from "./EmptyMenuClient";
import { DEFAULT_IMAGE } from "../../../../../../enum/product";
import { isEmpty } from "../../../../../../utils/array";
import { productIsSelected } from "../../Basket/BasketHeader/helper";
import Loader from "./Loader";
import { motion, AnimatePresence, easeOut } from "framer-motion";

export default function Menu() {
  // state
  const {
    username,
    menu,
    handleDelete,
    isModeAdmin,
    handleReset,
    productSelected,
    setProductSelected,
    currentTabSelected,
    handleProductSelected,
    handleAddToBasket,
    handleDeletedBasketCard,
  } = useContext(OrderContext);

  // event handler
  const handleCardDeleted = (event, idProductToEdit) => {
    event.stopPropagation();
    handleDelete(idProductToEdit, username);
    handleDeletedBasketCard(idProductToEdit, username);
    if (productSelected.id === idProductToEdit) {
      setProductSelected(false);
    }
  };

  const handleAddButton = (event, productToAdd) => {
    event.stopPropagation();
    handleAddToBasket(productToAdd, username);
  };

  // css
  const menuClassName = clsx(
    "w-full py-13 px-21 gap-x-21 gap-y-15",
    "shadow-strong bg-background_white overflow-y-auto",
    "grid grid-cols-container justify-items-center"
  );

  if (menu === undefined) return <Loader />;

  return (
    <div className={menuClassName}>
      {isEmpty(menu) ? (
        isModeAdmin ? (
          <EmptyMenuAdmin onReset={() => handleReset(username)} />
        ) : (
          <EmptyMenuClient />
        )
      ) : (
        <AnimatePresence>
          {menu.map((product) => {
            return (
              <motion.div
                key={product.id}
                initial={isModeAdmin ? { x: "-50%", opacity: 0.1 } : ""}
                animate={isModeAdmin ? { x: 0, opacity: 1 } : ""}
                transition={
                  isModeAdmin
                    ? {
                        duration: 0.3,
                        ease: easeOut,
                      }
                    : ""
                }
                exit={
                  isModeAdmin
                    ? {
                        opacity: 0,
                        transition: { ease: easeOut, duration: 0.3 },
                      }
                    : ""
                }
              >
                <Card
                  imageSource={
                    product.imageSource ? product.imageSource : DEFAULT_IMAGE
                  }
                  title={product.title}
                  price={formatPrice(product.price)}
                  onDelete={(event) => handleCardDeleted(event, product.id)}
                  hasDeleted={isModeAdmin}
                  onClick={
                    isModeAdmin && product
                      ? () => handleProductSelected(product)
                      : null
                  }
                  isHoverable={isModeAdmin}
                  isSelected={productIsSelected(
                    isModeAdmin,
                    currentTabSelected,
                    productSelected,
                    product
                  )}
                  onAdded={(event) => handleAddButton(event, product)}
                  isAdmin={isModeAdmin}
                />
              </motion.div>
            );
          })}
        </AnimatePresence>
      )}
    </div>
  );
}
