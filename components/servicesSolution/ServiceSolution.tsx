import React from "react";
import ServicesTitles from "./ServicesTitles";
import ServicesCard from "./ServicesCard";

const ServicesSolution = ({ ServiceSolution }: { ServiceSolution: Record<string, any> }) => {
  return (
    <div className="bg-black w-full 3xl:text-[16px] 2xl:text-[14px] xl:text-[13px] flex items-center justify-center relative">
      <div className="h-[50em] absolute rounded-xl border-1 bg-white  px-[12.9em] pt-[3.88em] pb-[6.99em] w-[98.875em] grid grid-cols-2 gap-8">
        {" "}
        <ServicesTitles ServiceTitles={ServiceSolution.titles} />
        {ServiceSolution.cards &&
          ServiceSolution.cards.map((card: {}, index: number) => (
            <ServicesCard key={index} ServiceCards={card} />
          ))}
      </div>{" "}
    </div>
  );
};

export default ServicesSolution;
