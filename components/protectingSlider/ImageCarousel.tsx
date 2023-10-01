import React from "react";
// @ts-ignore:next-line
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";

const ImageCarousel = ({
  images,
  cards,
  options,
}: {
  images?: Array<string>;
  cards?: Array<Record<string, any>>;
  options?: Record<string, any>;
}) => {
  return (
    <div style={{ direction: "ltr" }}>
      <Splide
        aria-label="slides"
        options={{
          rewind: true,
          width: "100%",
          type: "loop",
          perMove: 1,
          ...options,
        }}
      >
        {images &&
          images.map((image, index) => {
            return (
              <SplideSlide key={`${index}_${image}`}>
                <Image
                  src={image}
                  alt="image"
                  width={400}
                  height={250}
                  className="w-full h-[14rem] xl:h-[18rem] 2xl:h-[20rem] object-contain bg-[#1C1C1C] px-4 py-6 rounded-3xl"
                />
              </SplideSlide>
            );
          })}

        {cards &&
          cards.map((card: any, index) => {
            return (
              <SplideSlide key={`${index}_${card.name}`}>{card}</SplideSlide>
            );
          })}
      </Splide>
    </div>
  );
};

export default ImageCarousel;
