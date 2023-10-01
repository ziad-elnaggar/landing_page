import Image from "next/image";
import React from "react";
import banner_img from "../../public/banner.png";
import intro_img from "../../public/intro.svg";

function Banner({ banner }: { banner: Record<string, any> }) {
  return (
    <div className="font-abeezee">
      <div className="h-[70rem] md:h-[115rem] lg:h-[80rem] xl:h-[100rem] bg-black relative w-full">
        <Image src={banner_img} alt="banner" className="w-screen" />
        <div className="flex items-center flex-row mobileScreen:flex-col justify-between w-full absolute top-32 gap-4 lg:gap-32 px-4">
          <div className="w-[34rem] ml-[4rem] mobileScreen:ml-[0rem]">
            <p
              className="text-[2.5rem] 2xl:text-[3rem] text-white italic"
              dangerouslySetInnerHTML={{
                __html: banner.title,
              }}
            ></p>
            <p className="text-[1.15rem] mt-4 lg:mt-[1.8rem] ml-4 text-[#BEBEBE] font-abel">
              {banner.subtitle}
            </p>
            <div className="flex justify-center mobileScreen:justify-start">
              <button className="text-[1.7rem] italic mt-4 lg:mt-[3.625rem] py-[.8rem] px-[1.9rem] text-white bg-[#1A9AFB] rounded-[2.8rem]">
                {banner.button}
              </button>
            </div>
          </div>
          <Image src={intro_img} className="w-[90%] md:w-[80%] lg:w-[45%] xl:w-[58%]" alt="intro" />
        </div>
      </div>
    </div>
  );
}

export default Banner;
