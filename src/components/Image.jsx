import React from "react";
import { motion } from "framer-motion";

export const Image = ({ className, src }) => {
  return (
    <div className={className}>
      <motion.img
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-full h-full object-cover object-contain"
        src={src}
      />
    </div>
  );
};
