"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 w-full z-50 py-10">
      <div className="container flex h-14 items-center max-lg:px-5">
        <Link href={"/"} className="lg:hidden flex-1 cursor-pointer z-2">
          <Image src={"/images/xora.svg"} width={115} height={45} alt="logo" />
        </Link>{" "}
        {/* mobile */}
        <div
          className={clsx(
            "w-full max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:bg-s2 max-lg:opacity-0",
            open ? "max-lg:opacity-100" : "max-lg:pointer-events-none"
          )}
        >
          <div className="max-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen max-lg:p-6 max-lg:overflow-hidden sidebar-before max-md:px-4">
            <nav className="max-lg:relative max-lg:z-2 max-lg:my-auto">
              <ul className="flex max-lg:block max-lg:px-12">
                <li className="nav-li">
                  <Link className="nav-link" href={"/"}>
                    Features
                  </Link>
                  <div className="dot"></div>
                  <Link className="nav-link" href={"/"}>
                    Pricing
                  </Link>
                </li>

                <li className="nav-logo max-lg:hidden">
                  <Image
                    src={"/images/xora.svg"}
                    width={160}
                    height={55}
                    alt="logo"
                    className="transition-transform duration-500 cursor-pointer"
                  />
                </li>
                {/* desktop */}

                <li className="nav-li">
                  <Link className="nav-link" href={"/"}>
                    FAQ
                  </Link>
                  <div className="dot"></div>
                  <Link className="nav-link" href={"/"}>
                    Download
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="lg:hidden block absolute top-1/2 left-0 w-[960px] h-[380px] translate-x-[-290px] -translate-y-1/2 rotate-90">
              <Image
                src={"/images/bg-outlines.svg"}
                width={960}
                height={380}
                alt="background"
                className="relative z-2"
              />
              <Image
                src={"/images/bg-outlines-fill.png"}
                width={960}
                height={380}
                alt="background"
                className="absolute inset-0 mix-blend-soft-light opacity-5"
              />
            </div>
          </div>
        </div>
        <button
          onClick={() => setOpen((prevOpen) => !prevOpen)}
          className="lg:hidden z-2 size-10 border-2 border-s4/25 rounded-full flex justify-center items-center"
        >
          <Image
            src={`/images/${open ? "close" : "magic"}.svg`}
            alt="magic"
            width={20}
            height={20}
            className="size-1/2"
          />
        </button>
        {/* mobile */}
      </div>
    </header>
  );
};

export default Header;
