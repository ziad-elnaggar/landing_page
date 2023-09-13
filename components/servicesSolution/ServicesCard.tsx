import Image from "next/image";
import React from "react";

const ServicesCard = ({
  ServiceCards,
}: {
  ServiceCards: Record<string, any>;
}) => {
  // console.log(ServiceCards.iconTitle);

  return (
    <div className="flex w-[35em] gap-x-[1.5em] bg-stone-50 rounded-3xl py-[5.75em] px-[3em]">
      <div className="w-full flex pr-[1.5em] flex-col justify-center items-center border-r-2 border-sky-500">
        <Image
        className="w-[3em]"
          width={48.97}
          height={52.19}
          alt={`${ServiceCards.icon}`}
          src={`/${ServiceCards.icon}.svg`}
        />
        <p className="text-[1.75em] text-center text-sky-500 italic">
          {ServiceCards.iconTitle}
        </p>
      </div>
      <p className="text-zinc-500 text-[1.25em]">{ServiceCards.body}</p>
    </div>
  );
};

export default ServicesCard;
