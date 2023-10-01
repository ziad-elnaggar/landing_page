"use client";
import ImageCarousel from "./ImageCarousel";
import BeforeBorder from "../uicomponent/BeforeBorder";
import { useEffect, useState } from "react";

const ProtectingSliders = ({ protectingTop }: { protectingTop: string }) => {
  const images = [
    "/logo-03.png",
    "/logo-02.png",
    "/logo-01.png",
    "/logo-03.png",
    "/logo-02.png",
    "/logo-01.png",
    "/logo-03.png",
    "/logo-02.png",
    "/logo-01.png",
  ];

  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth)
  const [options, setOptions] =
    useState<{perPage: number; gap: string;}>({perPage: 3, gap: '6rem'})

  useEffect(() => {
    window.addEventListener('resize', () => { setWindowWidth(window.innerWidth); });

    return () => {
      window.removeEventListener('resize', () => { setWindowWidth(window.innerWidth); });
    };
  }, []);
  
  useEffect(() => {
    if(windowWidth < 768) setOptions({perPage: 2, gap: '2rem'})
  }, [windowWidth])

  return (
    <div className="-mb-2 bg-black w-full flex-grow overflow-hidden pt-48 pb-32 lg:pt-80 pt- lg:pb-48">
      <div className="w-[90%] lg:w-3/4 m-auto">
        <BeforeBorder className="ml-12" />
        <p className="ml-12 mb-8 text-[3rem] text-[#fff] italic">
          {protectingTop}
        </p>
        <ImageCarousel
          images={images}
          options={{ pagination: false, perPage: options.perPage, gap: options.gap }}
        />
      </div>
    </div>
  );
};

export default ProtectingSliders;
