"use client";
import { AnimatePresence, motion, wrap } from "framer-motion";
import { variants } from "./sliderAnimation";
import ControllerArrows from "./ControllerArrows";
import { useEffect, useState } from "react";
import ImageCarousel from "./ImageCarousel";
import BeforeBorder from "../uicomponent/BeforeBorder";

const ProtectingSliders = ({ protectingTop }: { protectingTop: string }) => {
    const images = [
      '/logo-03.png',
      '/logo-02.png',
      '/logo-01.png',
      '/logo-03.png',
      '/logo-02.png',
      '/logo-01.png',
      '/logo-03.png',
      '/logo-02.png',
      '/logo-01.png',  
      ];
    
      const [[page, direction], setPage] = useState([0, 0]);
    
      const imageIndex = wrap(0, images.length, page);
    
      const initialIndex = 0;

      // Define your motion animation variants
      const variants = {
        enter: { x: '100%', opacity: 0 },
        center: { x: 0, opacity: 1 },
        exit: { x: '-100%', opacity: 0 },
      };
      const visibleIndices = [
        initialIndex,
        (initialIndex + 1) % images.length,
        (initialIndex + 2) % images.length,
      ];

      const paginate = (newDirection: number) => {
        setPage([page + newDirection, newDirection]);
      };
      useEffect(() => {
        const interval = setInterval(() => {
          const srcIndex = imageIndex >= images.length - 1 ? 0 : imageIndex + 1;
          setPage([srcIndex, srcIndex > imageIndex ? -1 : 1]);
        }, 4000);
        return () => clearInterval(interval);
      }, [imageIndex, images.length]);
  return (
    <div className="relative bg-black w-full flex-grow overflow-hidden pt-96 pb-48">
      <div className="w-4/5 m-auto">
        <BeforeBorder />
        <p className="text-[3.25rem] italic mb-4">{protectingTop}</p>
        <ImageCarousel images={images} options={{pagination: false, perPage: 3,}} />
      </div>
    </div>
  )
}

export default ProtectingSliders