"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ServicesCard = ({
  ServiceCards,
}: {
  ServiceCards: Record<string, any>;
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <motion.div
      className=""
      ref={ref}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: inView ? 0 : -100, opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex gap-x-4 xl:gap-x-[1.5rem] bg-stone-50 rounded-3xl py-[3.75rem] pl-4 pr-4 xl:pr-8 h-full mb-8 md:mb-0">
        <div className="w-full flex pr-[1.5rem] flex-col justify-center items-center border-r-2 border-sky-500 py-[1rem]">
          <Image
            className="w-[3rem]"
            width={48.97}
            height={52.19}
            alt={`${ServiceCards.icon}`}
            src={`/${ServiceCards.icon}.svg`}
          />
          <p className="text-[1.75rem] text-center text-sky-500 italic">
            {ServiceCards.iconTitle}
          </p>
        </div>
        <p className="text-[#8B8B8B] text-[1.25rem] font-abel m-4">
          {ServiceCards.body}
        </p>
      </div>
    </motion.div>
  );
};

export default ServicesCard;
