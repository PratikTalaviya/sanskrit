import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaInstagram } from "react-icons/fa";
import { TiSocialFacebook } from "react-icons/ti";
import { BsTwitterX } from "react-icons/bs";
import { RiLinkedinFill } from "react-icons/ri";

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
    <div className="h-[45vh] flex items-center justify-start flex-col pt-[3vh]" ref={ref}>
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
      <motion.div variants={variants} initial="closed" animate={inView ? "open" : "closed"} className="flex gap-5 pt-2">
        <a
          href="https://www.instagram.com/Instagram/"
          className="bg-[#999999] rounded-full w-[35px] h-[35px] flex items-center justify-center pb-[0.5px]"
        >
          <FaInstagram className="text-[#F4E9E9] text-2xl" />
        </a>
        <a
          href="https://www.facebook.com/"
          className="bg-[#999999] rounded-full w-[35px] h-[35px] flex items-center justify-center pb-[0.5px]"
        >
          <TiSocialFacebook className="text-[#F4E9E9] text-3xl" />
        </a>
        <a
          href="https://linkedin.com/home"
          className="bg-[#999999] rounded-full w-[35px] h-[35px] flex items-center justify-center pb-[0.5px]"
        >
          <RiLinkedinFill className="text-[#F4E9E9] text-2xl" />
        </a>
        <a
          href="https://twitter.com/home"
          className="bg-[#999999] rounded-full w-[35px] h-[35px] flex items-center justify-center pb-[0.5px]"
        >
          <BsTwitterX className="text-[#F4E9E9] text-[18px]" />
        </a>
      </motion.div>
    </div>
  );
};
