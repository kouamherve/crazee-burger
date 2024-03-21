import React, { useContext } from "react";
import Header from "../../../../reusable-ui/Header";
import { calculateTotalPrice } from "./helper";
import OrderContext from "../../../../../context/OrderContext";
import { formatPrice } from "../../../../../utils/maths";
import { motion, AnimatePresence } from "framer-motion";

export default function Total() {
  const { basketMenu, menu } = useContext(OrderContext);

  const sumToPay = calculateTotalPrice(basketMenu, menu);

  return (
    <Header>
      <div className="text-4xl text-primary tracking-wider px-4 w-full h-full flex items-center justify-between">
        <span className="font-thin">
          <span className="text-[41px]">t</span>otal
        </span>
        <div className="flex flex-col overflow-y-hidden">
          <AnimatePresence mode="popLayout">
            <motion.span
              key={sumToPay}
              initial={{ y: 40, opacity: 1 }}
              animate={{ y: 0 }}
              transition={{
                duration: 0.2,
                type: "spring",
                stiffness: 100,
              }}
              exit={{ y: -30, opacity: 0 }}
              className="font-bold block"
            >
              {formatPrice(sumToPay)}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>
    </Header>
  );
}
