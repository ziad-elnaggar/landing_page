import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="3xl:text-[16px] 2xl:text-[14px] xl:text-[13px]  bg-black w-full flex justify-center py-[3em]">
      <div className="flex w-[80%] justify-between py-[3.1375em]border-t-2 border-zinc-300 border-opacity-5">
        <div className="icons flex">
          <Image
            className="mr-[1em] w-[2.9em]"
            width={42}
            height={31}
            alt="footer logo"
            src="/twitter.svg"
          />
          <Image
            className="w-[2.9em]"
            width={35}
            height={35}
            alt="footer logo"
            src="/linkedIn.svg"
          />
        </div>
        <Image
          className="w-[13em]"
          width={208}
          height={84}
          alt="footer logo"
          src="/footerLogo.svg"
        />
      </div>
    </div>
  );
};

export default Footer;
