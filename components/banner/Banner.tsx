import Image from "next/image";
import React from "react";
import banner_img from '../../public/banner.png'
import intro_img from '../../public/intro.svg'

function Banner({ banner }: { banner: Record<string, any> }) {
  return <div className="h-[111rem] bg-black relative">
    <Image src={banner_img} alt="banner" className="w-screen" />
    <div className="flex items-center justify-center w-full absolute top-32 gap-24">
      <div className="h-fit">
        <p className="text-5xl italic w-[31.5rem] leading-[4rem]">{banner.title}</p>
        <p className="text-xl mt-[1.8125rem] ml-4 text-[#BEBEBE]">{banner.subtitle}</p>
        <div className="flex justify-center">
          <button className="text-[1.7rem] italic mt-[3.625rem] bg-[#1A9AFB99] rounded-[2.8rem] w-[17rem] h-20">{banner.button}</button>
        </div>
      </div>
      <div className="w-[60.8rem]">
        <Image src={intro_img} alt="intro" />
      </div>
    </div>
  </div>;
}

export default Banner;
