import React from "react";

const TrustLineCard = ({
  trustlinePlatform,
}: {
  trustlinePlatform: Record<string, any>;
}) => {
  return (
    <div className="w-full relative top-[-5rem] mobileScreen:top-[-13rem]">
      {trustlinePlatform.map((item: any, index: number) => {
        return (
          <div className={`w-full `} key={index}>
            <div
              className={`w-[16rem] sm:w-[18rem] md:w-[27rem] absolute ${
                index == 0
                  ? "right-0 top-[14rem] md:top-[15rem]"
                  : index == 1
                  ? "left-0 top-[22rem] md:top-[25.5rem]"
                  : index == 2
                  ? "right-0 top-[33rem] md:top-[40rem]"
                  : index == 3
                  ? "left-0 top-[40rem] md:top-[50rem]"
                  : "right-0 top-[50rem] md:top-[62rem]"
              }`}
            >
              <p className="text-white text-[1.7rem] sm:text-[2rem] italic">{item.title}</p>
              <div className="text-start">
                <p className="text-[#8B8B8B] text-[1.2rem] sm:text-2xl font-abel">{item.content}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TrustLineCard;
