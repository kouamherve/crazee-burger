import React from "react";
import { TiDelete } from "react-icons/ti";
import { motion } from "framer-motion";

export default function DeleteButton({ onDelete, isSelected }) {
  return (
    <motion.button
      key={isSelected}
      initial={{ x: 12, opacity: 0.5 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.2 }}
      exit={{ x: 12, opacity: 0.5 }}
      className="absolute top-0 right-0 mr-[15px] mt-[15px] "
    >
      <TiDelete
        onClick={onDelete}
        className={`w-8 h-8 text-primary fill-current cursor-pointer hover:text-red active:text-primary ${
          isSelected && "text-white active:text-white"
        }`}
      />
    </motion.button>
  );
}
