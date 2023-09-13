import Image from "next/image";
import React, { FC } from "react";

const ControllerArrows: FC<any> = ({
  nextOnClick,
  prevOnClick,
  onClick,
  index,
  imageIndex,
}) => {
  return (
    <div className="absolute bottom-6 z-10  flex w-full  justify-center gap-5">
      <div className="prev" onClick={prevOnClick}>
        <Image
          src="/arrow-left.svg"
          alt="prev"
          className="animate-duration-3000 h-auto w-auto animate-fade-right cursor-pointer"
          width={45}
          height={45}
          priority
        ></Image>{" "}
      </div>
      <div className="next" onClick={nextOnClick}>
        <Image
          src="/arrow-right.svg"
          alt="next"
          className="animate-duration-3000 h-auto w-auto animate-fade-right cursor-pointer"
          width={45}
          height={45}
          priority
        ></Image>{" "}
      </div>
    </div>
  );
};

export default ControllerArrows;
