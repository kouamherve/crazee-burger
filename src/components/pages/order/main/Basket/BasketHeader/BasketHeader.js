import React, { useContext } from "react";
import Header from "../../../../../reusable-ui/Header";
import { calculateTotalPrice } from "./helper";
import OrderContext from "../../../../../../context/OrderContext";
import { formatPrice } from "../../../../../../utils/maths";
import { motion, AnimatePresence } from "framer-motion";

export default function BasketHeader() {
  const { basketMenu, menu } = useContext(OrderContext);

  const sumToPay = calculateTotalPrice(basketMenu, menu);

  return (
    <Header>
      <div className="text-4xl text-primary tracking-wider px-4 w-full h-full flex items-center justify-between">
        <span className="font-thin">
          <span className="text-[41px]">t</span>otal
        </span>
        <div className="flex flex-col overflow-y-hidden text-3xl">
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.span
              key={sumToPay}
              initial={{ y: 30, opacity: 1 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.2,
              }}
              exit={{ y: -30, opacity: 0 }}
              className="font-bold"
            >
              {formatPrice(sumToPay)}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>
    </Header>
  );
}
