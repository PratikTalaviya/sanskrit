import React, { useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import Image1 from "../assets/1.jpg";
import Image2 from "../assets/2.jpg";
import Image3 from "../assets/3.jpg";
import Image4 from "../assets/4.jpg";
import Image5 from "../assets/5.jpg";
import Image6 from "../assets/6.jpg";
import Image7 from "../assets/7.jpg";
import Image8 from "../assets/8.jpg";
import Image9 from "../assets/9.jpg";
import Image10 from "../assets/10.jpg";
import Image11 from "../assets/11.jpg";
import Image12 from "../assets/12.jpg";
import { Image } from "./Image";
import { useInView } from "react-intersection-observer"; // Import useInView hook

const ImageContainer = () => {
  const images = useMemo(
    () => [Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8, Image9, Image10, Image11, Image12],
    []
  );

  // Use useInView hook to detect when the component is in view
  const { ref, inView } = useInView({
    threshold: 0.2, // Fire the callback when 50% of the component is in view
    triggerOnce: false, // Fire the callback only once
  });

  return (
    <AnimatePresence>
      <motion.div
        className="h-[50vh]"
        ref={ref}
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ type: "tween", duration: 0.5, ease: "easeIn" }}
      >
        <motion.div
          className="grid grid-cols-15"
          initial={{ scale: 0.95, x: 100 }}
          animate={{ scale: inView ? 1 : 0.95, x: inView ? 0 : 100 }} // Animate based on inView status
          transition={{ type: "tween", duration: 1, ease: [0.17, 0.67, 0.09, 0.99] }}
        >
          <div className="h-[30vh] col-span-15 flex justify-between">
            <Image className={clsx("w-[18%]")} src={images[0]} />
            <Image className={clsx("w-[12%]")} src={images[1]} />
            <Image className={clsx("w-[33%]")} src={images[2]} />
            <Image className={clsx("w-[14%]")} src={images[3]} />
            <Image className={clsx("w-[23%]")} src={images[4]} />
          </div>
        </motion.div>
        <motion.div
          className="grid grid-cols-7"
          initial={{ x: -100 }}
          animate={{ x: inView ? 0 : -100 }} // Animate opacity based on inView status
          transition={{ type: "tween", duration: 1, ease: [0.17, 0.67, 0.09, 0.99] }}
        >
          <div className="h-[20vh] col-span-7 flex justify-between">
            <Image className={clsx("w-[12%]")} src={images[5]} />
            <Image className={clsx("w-[12%]")} src={images[6]} />
            <Image className={clsx("w-[20%]")} src={images[7]} />
            <Image className={clsx("w-[12%]")} src={images[8]} />
            <Image className={clsx("w-[12%]")} src={images[9]} />
            <Image className={clsx("w-[20%]")} src={images[10]} />
            <Image className={clsx("w-[12%]")} src={images[11]} />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ImageContainer;
