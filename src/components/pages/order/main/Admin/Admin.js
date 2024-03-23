import React, { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";
import AdminPanel from "./AdminPanel/AdminPanel";
import AdminTabs from "./AdminPanel/AdminTabs";
import { easeInOut, motion } from "framer-motion";

export default function Admin() {
  const { isCollapse, setIsCollapse } = useContext(OrderContext);

  return (
    <motion.div
      key={isCollapse}
      initial={{ y: "100%", opacity: 0.5 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0.5, y: "100%", ease: easeInOut }}
      className="absolute bottom-0 left-0 right-0 rounded-b-2xl"
    >
      <AdminTabs isCollapse={isCollapse} setIsCollapse={setIsCollapse} />
      {!isCollapse && <AdminPanel />}
    </motion.div>
  );
}
