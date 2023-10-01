"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Button from "@/components/uicomponent/Button";

const NavBar = ({ navBar, locale }: { navBar: any, locale: string }) => {
  const router = useRouter();
  return (
    <nav className="bg-black w-full">
      <div className="flex flex-col md:flex-row px-8 md:px-20 items-start md:items-center justify-between py-6 md:py-[3.9rem] relative transition-all duration-300 ease-in-out">
        <Link
          href={"https://www.trustline.sa/"}
          target="_blank"
        >
          <Image
            src="/navbarLogo.svg"
            className="w-[9rem] animate-fade-right animate-once"
            width={135}
            height={55}
            alt="logo"
          />
        </Link>
        <div className="flex self-center md:self-auto gap-4 md:gap-[7rem] py-8 md:py-0">
          {navBar?.links &&
            navBar?.links.map((item: string, index: number) => (
              <Link
                className="text-[1.75rem] text-white"
                key={index}
                href={"/" + locale}
              >
                {item}
              </Link>
            ))}
        </div>
        <div className="flex gap-[1.5rem] self-end md:self-auto">
          {navBar?.buttons &&
            navBar?.buttons.map((item: string, index: number) => (
              <Button
                className={`text-[0.75rem] italic px-[1rem] py-2 ${
                  index == 0 ? "text-white" : "text-[#1A9AFB]"
                }  `}
                key={index}
                label={item}
              />
            ))}
        </div>

        <div className={`absolute ${locale === 'en' ? 'right-8' : 'left-8'} md:right-36 top-4 text-white`}>
          <button onClick={() => router.push("/en")}>EN</button> /{" "}
          <button onClick={() => router.push("/ar")}>العربية</button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
