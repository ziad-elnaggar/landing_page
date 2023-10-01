import React from "react";
import BeforeBorder from "../uicomponent/BeforeBorder";
import Image from "next/image";
import TrustLineCard from "./TrustLineCard";

const TrustLinePlatform = ({
  trustlinePlatform,
}: {
  trustlinePlatform: Record<string, any>;
}) => {
  return (
    <div className="bg-black relative flex justify-center font-abeezee -mb-2">
      <Image
        className="relative md:w-auto h-[570px] md:h-[700px] lg:h-[1000px] xl:h-auto"
        width={1842}
        height={1583}
        alt="trustlinePlatform"
        src="/trustline-platform.png"
      />
      <div className="absolute top-4 md:top-12 flex items-center flex-col md:text-center w-[70%] mobileScreen:w-[80%]">
        <BeforeBorder />
        <p className="text-[3.25rem] italic text-[#D9D9D9]">
          {trustlinePlatform[0].title}
        </p>
        <TrustLineCard trustlinePlatform={trustlinePlatform.slice(1)} />
      </div>
    </div>
  );
};

export default TrustLinePlatform;
