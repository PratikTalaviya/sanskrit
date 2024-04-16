import React from "react";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2 }}
      className="h-[100vh] flex justify-center items-center flex-col leading-[4.5rem]"
    >
      <h1 className="text-[18vh] font-serif text-[#696969] font-medium tracking-wide">Sanskrit</h1>
      <p className="text-[5vh] font-medium text-[#999999] tracking-[0.15rem]">architects & interiors</p>
    </motion.div>
  );
};
