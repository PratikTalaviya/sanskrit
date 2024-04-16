import React from "react";
import { Image } from "./Image";
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

export const ImageContainer = () => {
  return (
    <div className="h-[50vh]">
      <div className="h-[60%] grid grid-cols-15">
        <div className="h-[81%] col-span-15 flex justify-between">
          <Image className={clsx("w-[18%]")} src={Image1} />
          <Image className={clsx("w-[12%]")} src={Image2} />
          <Image className={clsx("w-[33%]")} src={Image3} />
          <Image className={clsx("w-[14%]")} src={Image4} />
          <Image className={clsx("w-[23%]")} src={Image5} />
        </div>
      </div>
      <div className="h-[40%] grid grid-cols-7">
        <div className="h-[81%] col-span-7 flex justify-between">
          <Image className={clsx("w-[12%]")} src={Image6} />
          <Image className={clsx("w-[12%]")} src={Image7} />
          <Image className={clsx("w-[20%]")} src={Image8} />
          <Image className={clsx("w-[12%]")} src={Image9} />
          <Image className={clsx("w-[12%]")} src={Image10} />
          <Image className={clsx("w-[20%]")} src={Image11} />
          <Image className={clsx("w-[12%]")} src={Image12} />
        </div>
      </div>
    </div>
  );
};
