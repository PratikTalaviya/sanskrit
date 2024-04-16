import React from "react";

import { motion } from "framer-motion";

const variants = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    x: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const Footer = () => {
  return (
    <div className="p-10 h-[50vh] flex items-center flex-col">
      <div className="flex text-3xl font-semibold text-[#696969] mb-10 gap-3">
        <motion.h1 variants={variants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          Architecture
        </motion.h1>
        <span>|</span>
        <motion.h1 variants={variants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          Interior
        </motion.h1>{" "}
        <span>|</span>
        <motion.h1 variants={variants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          Planning
        </motion.h1>
      </div>
      <h2 className="text-2xl font-bold text-[#999999] mb-5">AR. HEET KAKADIYA</h2>
      <h2 className="text-2xl text-[#999999]">+91 88172 18888 | +91 82003 64863</h2>
      <h2 className="text-[1.3rem] text-[#999999] mb-3">sanskritarchitects@gmail.com</h2>
      <h2 className="text-[1.3rem] text-[#999999]">1053, Silver Business Point, VIP Circle, Utran Road</h2>
      <h2 className="text-[1.3rem] text-[#999999]">Surat-395010</h2>
    </div>
  );
};
