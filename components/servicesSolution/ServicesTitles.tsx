import React from "react";
import BeforeBorder from "../uicomponent/BeforeBorder";

const ServicesTitles = ({
  ServiceTitles,
}: {
  ServiceTitles: Record<string, any>;
}) => {
  return (
    <div className="text-stone-900 relative flex flex-col justify-center">
      <BeforeBorder />
      <p className="text-[2.125em] italic mt-5">{ServiceTitles.title}</p>
      <p className="text-[1.125em]">{ServiceTitles.subtitle}</p>
    </div>
  );
};

export default ServicesTitles;
