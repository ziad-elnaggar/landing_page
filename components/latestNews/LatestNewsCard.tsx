import Image from "next/image";
import React from "react";

const LatestNewsCard = ({ items }: { items: any }) => {
  console.log(items);

  return (
    <div className="bg-[#131414] rounded-3xl flex p-[1.4em] mb-[2em]">
      <Image
        className="w-[17em] rounded-2xl"
        width={274.494}
        height={253.155}
        alt={`${items.image}`}
        src={`/${items.image}.png`}
      />{" "}
      <div className="news__content ml-[2em] flex flex-col justify-center">
        <p className="text-[2em] italic">{items.title}</p>
        <p className="text-[1.625em] text-[#8B8B8B] leading-7 mt-4">
          {items.content}
        </p>
        <p className="text-[#019FFE] text-[1.625em] mt-2">{items.link}</p>
      </div>
    </div>
  );
};

export default LatestNewsCard;
