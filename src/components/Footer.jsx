import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.5, // Adjust the duration if needed
      ease: "easeInOut", // Add easing if necessary
    },
  },
  closed: {
    opacity: 0,
    y: -10,
  },
};

export const Footer = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Trigger animation once
    threshold: 0.3, // Percentage of element in viewport to trigger animation
  });

  return (
    <div className="h-[40vh] flex items-center justify-start flex-col mt-[4vh]" ref={ref}>
      <div className="flex text-2xl font-semibold text-[#696969] mb-8 gap-3">
        <motion.h1
          variants={variants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial="closed"
          animate={inView ? "open" : "closed"}
        >
          Architecture
        </motion.h1>
        <motion.span variants={variants} initial="closed" animate={inView ? "open" : "closed"}>
          |
        </motion.span>
        <motion.h1
          variants={variants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial="closed"
          animate={inView ? "open" : "closed"}
        >
          Interior
        </motion.h1>{" "}
        <motion.span variants={variants} initial="closed" animate={inView ? "open" : "closed"}>
          |
        </motion.span>
        <motion.h1
          variants={variants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial="closed"
          animate={inView ? "open" : "closed"}
        >
          Planning
        </motion.h1>
      </div>
      <motion.h2
        variants={variants}
        initial="closed"
        animate={inView ? "open" : "closed"}
        className="text-[1.2rem] font-bold text-[#999999] mb-5"
      >
        AR. HEET KAKADIYA
      </motion.h2>
      <motion.h2
        variants={variants}
        initial="closed"
        animate={inView ? "open" : "closed"}
        className="text-[1.1rem] text-[#999999]"
      >
        +91 88172 18888 | +91 82003 64863
      </motion.h2>
      <motion.h2
        variants={variants}
        initial="closed"
        animate={inView ? "open" : "closed"}
        className="text-[1.2rem] text-[#999999] mb-3"
      >
        sanskritarchitects@gmail.com
      </motion.h2>
      <motion.h2
        variants={variants}
        initial="closed"
        animate={inView ? "open" : "closed"}
        className="text-[1.2rem] text-[#999999]"
      >
        1053, Silver Business Point, VIP Circle, Utran Road
      </motion.h2>
      <motion.h2
        variants={variants}
        initial="closed"
        animate={inView ? "open" : "closed"}
        className="text-[1.2rem] text-[#999999]"
      >
        Surat-395010
      </motion.h2>
    </div>
  );
};
