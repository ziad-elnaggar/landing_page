import Image from "next/image";
import React from "react";

const InsightsToActionBanner = ({
  insightsToActionContent,
}: {
  insightsToActionContent: Record<string, any>;
}) => {
  return (
    <div className="flex flex-col justify-center items-center w-full mb-24 md:mb-48">
      <div className="md:grid md:grid-cols-2 gap-5">
        <div className="flex flex-col">
          <div className="flex justify-center relative mb-10">
            <Image
              alt="actions"
              height={407}
              width={573}
              src="/action-11.png"
              className="w-[40em] md:w-[35em]"
            />
            <div className="titles absolute p-10">
              <p className="italic font-normal  text-[1.6rem] text-white ">
                {insightsToActionContent[0].cardTitle}
              </p>
              <p className="font-abel text-[1.12rem] pl-2 font-normal text-gray-100">
                {insightsToActionContent[0].cardSubtitle}
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center relative">
            <Image
              alt="actions"
              height={573}
              width={267}
              src="/action-3.png"
              className="w-[40em] md:w-[35em]"
            />
            <div className="titles absolute text-white p-10">
              <p className="italic font-normal text-[1.6rem]">
                {insightsToActionContent[2].cardContent}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-center items-center relative mb-10 mt-10 md:mt-0">
            <Image
              alt="actions"
              height={616}
              width={288}
              src="/action-2.png"
              className="w-[40em] md:w-[38rem]"
            />
            <div className="titles absolute text-white p-10">
              <p className="italic font-normal text-[1.6rem]">
                {insightsToActionContent[1].cardContent}
              </p>
            </div>
          </div>
          <div className="flex justify-center relative items-end">
            <Image
              alt="actions"
              height={613}
              width={387}
              src="/action-4.png"
              className="w-[40em] md:w-[38rem]"
            />
            <div className="titles absolute px-8 py-4">
              <p className="italic font-normal text-[1.6rem] text-white">
                {insightsToActionContent[3].cardTitle}
              </p>
              <p className="font-abel text-[1.12rem] pl-2 font-light text-gray-100">
                {insightsToActionContent[3].cardSubtitle}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsightsToActionBanner;
