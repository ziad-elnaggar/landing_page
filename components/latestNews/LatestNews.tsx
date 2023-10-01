"use client";
import { motion } from "framer-motion";
import React from "react";
import BeforeBorder from "../uicomponent/BeforeBorder";
import LatestNewsCard from "./LatestNewsCard";
import { useInView } from "react-intersection-observer";

const LatestNews = ({ latestNews }: { latestNews: Record<string, any> }) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Change this to false if you want the animation to trigger again whenever it comes in view.
  });

  return (
    <motion.div
      className="bg-black -mb-2 flex items-center justify-center font-abeezee"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 1 }}
    >
      <div className="w-[80%] mobileScreen:w-[90%]">
        <div className="my-[3.4rem]">
          <BeforeBorder />
          <p className="text-white italic text-5xl 2xl:text-[3.25rem]">{latestNews[0]}</p>
        </div>
        {latestNews.slice(1).map((item: Record<any, string>, index: number) => (
          <div key={index}>
            <LatestNewsCard items={item} />
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default LatestNews;
