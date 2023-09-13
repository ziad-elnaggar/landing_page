'use client'

import React from "react";
import BeforeBorder from "../uicomponent/BeforeBorder";
import security_img from '../../public/security.svg'
import Image from "next/image";
import ImageCarousel from "../protectingSlider/ImageCarousel";

const InsightsToAction = ({ insightsToAction, securityExperts }:
  { insightsToAction: Record<string,any>, securityExperts: Record<string, any> }) => {
    const images = [
      '/cardicon1.svg',
      '/cardicon2.svg',
      '/cardicon3.svg',
      '/cardicon4.svg',
    ]
    const card = 
      <div className="w-[29.5rem] m-auto text-center">
        <Image src={security_img} alt="security" className="m-auto" />
        <p className="mt-7 mb-5 text-[2rem] text-[#019FFE] font-bold">{securityExperts.cardContent.title}</p>
        <p className="text-2xl font-medium mb-20">{securityExperts.cardContent.content}</p>
        <div className="flex gap-2 justify-center">
          {images.map((image) => {
            return <Image key={image} src={image} alt={image} width={30} height={50} />
          })}
        </div>
      </div>;
  return <div className="bg-[#F8F8F8]">
    <div className="w-[98rem] m-auto">
      <div className="flex flex-col items-center justify-center pt-[42.56rem]">
        <BeforeBorder />
        <p className="text-[3.25rem] italic text-[#152F4B] mt-6 mb-[30rem]">{insightsToAction.title}</p>
        <div></div>
      </div>

      <div className="flex justify-center pb-60">
        <div>
          <BeforeBorder />
          <div className="flex gap-16">
            <div className="w-[38rem]">
              <p className="text-black text-[3.25rem] italic mb-20">{securityExperts.community.title}</p>
              {securityExperts.community.contentList.map((li: string) => {
                return <div key={li} className="flex">
                  <span className="text-[#842EB3] mr-6 text-2xl">&#8226;</span>
                  <p key={li} className="text-[1.375rem] text-[#8B8B8B]">{li}</p>
                </div>
              })}
            </div>
            <div className="w-[38rem] rounded-[1.875rem] bg-[#04162B] py-14">
              <ImageCarousel
                cards={[card, card, card, card, card]}
                options={{arrows: false}}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>;
};

export default InsightsToAction;
