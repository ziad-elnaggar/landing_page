"use client";

import React, { FC } from "react";

import { InsightsToActionProps } from "./types";
import SecurityExperts from "./SecurityExperts";
import InsightsToActionBanner from "./InsightsToActionBanner";
import BeforeBorder from "../uicomponent/BeforeBorder";

const InsightsToAction: FC<InsightsToActionProps> = ({ securityExperts }) => {
  return (
    <>
      <div className="font-abeezee bg-[#F8F8F8]">
        <div className="w-[94%] lg:w-[88%] xl:w-[79%] 2xl:w-[72%] m-auto ">
          <div className="flex flex-col items-center justify-center pt-20 md:pt-[42rem]">
            <BeforeBorder />
            <p className=" text-[3.25rem] italic text-[#152F4B] mb-6">
              {securityExperts.insightsToAction.title}
            </p>
          </div>

          <InsightsToActionBanner
            insightsToActionContent={securityExperts.insightsToAction.content}
          />
          <SecurityExperts
            insightsToAction={securityExperts.insightsToAction}
            securityExperts={securityExperts.securityExperts}
          />
        </div>
      </div>
    </>
  );
};

export default InsightsToAction;
