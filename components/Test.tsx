"use client";

import clsx from "clsx";
import React, { useState } from "react";
import { FaInstagram } from "react-icons/fa";

const Tester = () => {
  const [monthly, setMonthly] = useState(false);

  return (
    <div className="p-20">
      <div className="">
        <FaInstagram
          size={40}
          className="p-2 border cursor-pointer border-blue-300/20 transition-all duration-700 rounded-full hover:border-blue-300"
        />
      </div>

      <div className="flex relative items-center w-[375px] h-100 bg-[#140505] border-4 border-yellow-300 rounded-xl">
        <button
          onClick={() => setMonthly(true)}
          className={clsx(
            "text-xl relative text-center w-[50%] z-2 text-black font-semibold",
            !monthly && "text-white"
          )}
        >
          Monthly
        </button>
        <button
          onClick={() => setMonthly(false)}
          className={clsx(
            "text-xl relative text-center w-[50%] z-2 text-black font-semibold",
            monthly && "text-white"
          )}
        >
          Daily
        </button>

        <div
          className={clsx(
            "bg-yellow-gradient bg-s3 absolute h-[80px] w-[calc(50%-8px)] top-50% left-2 rounded-xl shadow-400 transition-transform duration-500",
            !monthly && "translate-x-full"
          )}
        />
      </div>
    </div>
  );
};

export default Tester;
