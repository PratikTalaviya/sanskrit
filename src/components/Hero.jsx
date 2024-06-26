import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const Hero = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Trigger animation once
    threshold: 0.2, // Percentage of element in viewport to trigger animation
  });

  return (
    <div className="h-[100vh] flex justify-center items-center flex-col leading-[4.5rem]" ref={ref}>
      <motion.h1
        className="text-[18vh] font-serif text-[#696969] font-medium tracking-wide"
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ type: "tween", duration: 1, ease: "easeIn" }}
      >
        Sanskrit
      </motion.h1>
      <motion.p
        className="text-[5vh] font-medium text-[#999999]  "
        initial={{ opacity: 0, y: 0, scale: 1, letterSpacing: "25px" }}
        animate={{
          // letterSpacing: "2px",
          opacity: inView ? 1 : 0, // Animate only when inView
          letterSpacing: inView ? "2px" : "25px",
          // y: inView ? 0 : -20, // Animate only when inView
          // scale: inView ? 1 : 0.8, // Animate only when inView
        }}
        transition={{ type: "tween", duration: 1, delay: 0.3, ease: "easeOut" }}
      >
        architects & interiors
      </motion.p>
    </div>
  );
};
