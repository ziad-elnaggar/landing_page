import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import React from "react";

const LatestNewsCard = ({ items }: { items: any }) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Change this to false if you want the animation to trigger again whenever it comes in view.
  });

  return (
    <motion.div
      className="bg-[#131414] rounded-3xl flex flex-col md:flex-row items-center p-[1.4rem] mb-[2rem]"
      ref={ref}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: inView ? 0 : -100, opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      <Image
        style={{ filter: "sepia(100%) hue-rotate(190deg) saturate(500%)" }}
        className="w-[17rem] md:w-[13rem] 2xl:w-[17rem] rounded-2xl opacity-50 mb-8 md:mb-0"
        width={274.494}
        height={253.155}
        alt={`${items.image}`}
        src={`/${items.image}.png`}
      />{" "}
      <div className="md:ml-[2rem] flex flex-col justify-center">
        <p className="text-3xl 2xl:text-[2rem] italic text-white">{items.title}</p>
        <p className="text-2xl 2xl:text-[1.625rem] text-[#8B8B8B] leading-7 mt-4 font-abel">
          {items.content}
        </p>
        <p className="text-[#019FFE] text-2xl text-[1.625rem] mt-2 font-abel">
          {items.link} <span className="px-[2rem]">→</span>
        </p>
      </div>
    </motion.div>
  );
};

export default LatestNewsCard;
