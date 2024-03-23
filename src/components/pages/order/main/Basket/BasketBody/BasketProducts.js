import React, { useContext } from "react";
import BasketCard from "./BasketCard";
import OrderContext from "../../../../../../context/OrderContext";
import { findObjectById } from "../../../../../../utils/array";
import { productIsSelected } from "../BasketHeader/helper";
import { motion, AnimatePresence } from "framer-motion";

export default function BasketProducts() {
  const {
    username,
    isModeAdmin,
    currentTabSelected,
    productSelected,
    handleProductSelected,
    handleDeletedBasketCard,
    basketMenu,
    menu,
  } = useContext(OrderContext);

  return (
    <AnimatePresence>
      {basketMenu.map((product) => {
        const menuProduct = findObjectById(product.id, menu);
        const updatedMenuProduct = {
          ...menuProduct,
          quantity: product.quantity,
        };
        if (!menuProduct) return null;
        return (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, x: "100px" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0, x: "-100px", transition: { duration: 0.2 } }}
          >
            <BasketCard
              product={updatedMenuProduct}
              onDeleted={() => handleDeletedBasketCard(product.id, username)}
              isClickable={isModeAdmin}
              isSelected={productIsSelected(
                isModeAdmin,
                currentTabSelected,
                productSelected,
                menuProduct
              )}
              onClick={
                isModeAdmin ? () => handleProductSelected(menuProduct) : null
              }
            />
          </motion.div>
        );
      })}
    </AnimatePresence>
  );
}
