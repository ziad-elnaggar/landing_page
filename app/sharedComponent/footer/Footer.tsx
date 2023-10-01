import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-black w-full flex justify-center py-12">
      <div className="flex w-4/5 mobileScreen:w-[90%] justify-between border-gray-400 border-t-2 py-12">
        <div className="icons flex">
          <Image
            className="mx-4 w-11"
            width={42}
            height={31}
            alt="footer logo"
            src="/twitter.svg"
          />
          <Image
            className="w-10"
            width={35}
            height={35}
            alt="footer logo"
            src="/linkedIn.svg"
          />
        </div>
        <Link
          href={"https://www.trustline.sa/"}
          target="_blank"
        >
          <Image
            className="w-40"
            width={208}
            height={84}
            alt="footer logo"
            src="/footerLogo.svg"
          />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
