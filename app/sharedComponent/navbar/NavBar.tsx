"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/uicomponent/Button";
import { useRouter } from "next/navigation";

const NavBar = ({ navBar }: { navBar: any }) => {
  const router = useRouter()
  return (
    <nav className="flex bg-black items-center justify-between py-[3.9375em] px-[3.5em] relative">
      <Image src="/navbarLogo.svg" width={135} height={55} alt="logo" />
      <div className="flex gap-28 ms-28 ">
        {navBar?.links &&
          navBar?.links.map((item: string, index: number) => (
            <Link className="text-[1.75em]" key={index} href={"/" + item}>
              {item}
            </Link>
          ))}
      </div>
      <div className="flex gap-6 ">
        {navBar?.buttons &&
          navBar?.buttons.map((item: string, index: number) => (
            <Button className="text-[0.75em] italic px-5 py-2" key={index} label={item} />
          ))}
      </div>

      <div className="absolute right-4 top-4">
        <button onClick={() => router.push('/en')}>EN</button> / <button onClick={() => router.push('/ar')}>العربية</button>
      </div>
    </nav>
  );
};

export default NavBar;
