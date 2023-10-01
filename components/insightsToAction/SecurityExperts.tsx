import BeforeBorder from "../uicomponent/BeforeBorder";
import security_img from "../../public/security.svg";
import Image from "next/image";
import ImageCarousel from "../protectingSlider/ImageCarousel";
import { FC } from "react";
import { SecurityExpertsProps } from "./types";

const SecurityExperts: FC<SecurityExpertsProps> = ({
  insightsToAction,
  securityExperts,
}) => {
  const images = [
    "/cardicon1.svg",
    "/cardicon2.svg",
    "/cardicon3.svg",
    "/cardicon4.svg",
  ];
  const card = (
    <div className="w-[30rem] m-auto text-center flex flex-col">
      <Image
        src={security_img}
        width={144}
        height={156}
        alt="security"
        className="m-auto w-28 2xl:w-[8.5rem]"
      />
      <p className="mt-4 2xl:mt-6 mb-3 2xl:mb-5 text-[2rem] mobileScreen:text-3xl text-blue-500 font-bold">
        {securityExperts.cardContent.title}
      </p>
      <p className="text-2xl text-gray-100 font-medium mb-6 2xl:mb-8">
        {securityExperts.cardContent.content}
      </p>
      <div className="flex gap-2 justify-center">
        {images.map((image) => {
          return (
            <Image
              className="w-10 2xl:w-12 mobileScreen:w-11"
              key={image}
              src={image}
              alt={image}
              width={30}
              height={50}
            />
          );
        })}
      </div>
    </div>
  );
  return (
    <>
      <div className="flex justify-center items-center pb-56 px-4">
        <div>
          <BeforeBorder className="ml-8 sm:ml-24 md:ml-0" />
          <div className="flex flex-col md:flex-row w-full justify-between items-center md:items-start">
            <div className="w-[90%] sm:w-[70%] md:w-[45%] xl:w-2/5 2xl:w-[46%]">
              <p
                className="text-black text-[2.9rem] italic mb-[3rem] font-medium"
                dangerouslySetInnerHTML={{
                  __html: securityExperts.community.title,
                }}
              ></p>
              {securityExperts.community.contentList.map(
                (li: string, index: number) => {
                  return (
                    <div key={`${index}_${li}`} className="flex">
                      <span className="text-purple-500 ml-[.2rem] mr-[.8rem] text-[2.5rem] -mt-4">
                        •
                      </span>
                      <p
                        className="text-[1.1rem] 2xl:text-[1.3rem] font-light text-[#8B8B8B] mb-[1rem]"
                      >
                        {li}
                      </p>
                    </div>
                  );
                }
              )}
              
            </div>
            <div className="w-[36rem] rounded-3xl bg-[#04162B] py-[3rem] m-auto mt-8 md:mt-0">
              <ImageCarousel
                cards={[card, card, card, card, card]}
                options={{ arrows: false }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecurityExperts;
