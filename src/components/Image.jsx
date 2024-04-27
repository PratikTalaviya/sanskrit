import React from "react";
import { motion } from "framer-motion";

export const Image = ({ className, src }) => {
  return (
    <div className={className}>
      <motion.img
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "tween", ease: "easeInOut" }}
        className="w-full h-full object-cover object-contain"
        src={src}
        loading="eager"
      />
    </div>
  );
};
