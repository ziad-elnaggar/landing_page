"use client";
import React from "react";
import ServicesTitles from "./ServicesTitles";
import ServicesCard from "./ServicesCard";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ServicesSolution = ({
  ServiceSolution,
}: {
  ServiceSolution: Record<string, any>;
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  return (
    <motion.div
      className="font-abeezee shadow-xl bg-white md:bg-black w-full flex items-center justify-center relative"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 1 }}
    >
      <div className="h-[73rem] sm:h-[70rem] md:h-[50rem] shadow-md md:absolute md:rounded-xl border-1 bg-white px-16 xl:px-32 pt-[3.18rem] pb-12 md:pb-[6.19rem] w-full md:w-[88%] xl:w-[80%] md:grid md:grid-cols-2 gap-[1.8rem]">
        <ServicesTitles ServiceTitles={ServiceSolution.titles} />
        {ServiceSolution.cards &&
          ServiceSolution.cards.map((card: {}, index: number) => (
            <ServicesCard key={index} ServiceCards={card} />
          ))}
      </div>
    </motion.div>
  );
};

export default ServicesSolution;
