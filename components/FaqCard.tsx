"use client";

import clsx from "clsx";
import { useState } from "react";
import { SlideDown } from "react-slidedown";
import "react-slidedown/lib/slidedown.css";

type Props = {
  faq: {
    id: string;
    question: string;
    answer: string;
  };
  index: number;
};

const FaqCard = ({ faq, index }: Props) => {
  const [activeId, setActiveId] = useState<string | null>(null);

  const active = activeId === faq.id;

  return (
    <div className="relative z-2 mb-16 lg:min-h-[150px]">
      <div
        className="group relative flex cursor-pointer items-center justify-between gap-10 py-5 px-7"
        onClick={() => setActiveId(activeId === faq.id ? null : faq.id)}
      >
        <div className="flex-1">
          <div className="small-compact mb-1.5 text-p3 max-lg:hidden">
            {index}
          </div>

          <div
            className={clsx(
              "h6 text-p4 transition-colors duration-500 max-md:flex max-md:min-h-20 max-md:items-center",
              active && "max-lg:text-p1"
            )}
          >
            {faq.question}
          </div>
        </div>

        <div
          className={clsx(
            "faq-icon relative size-12 flex items-center justify-center border-2 rounded-full border-s2 shadow-400 transition-all duration-500 group-hover:border-s4",
            active && "bg-p1 after:rotate-0"
          )}
        >
          <div className="g4 size-11/12 rounded-full shadow-300" />
        </div>
      </div>

      <SlideDown>
        {activeId === faq.id && (
          <div className="px-7 py-3.5 body-3">{faq.answer}</div>
        )}
      </SlideDown>

      <div
        className={clsx(
          "g5 -bottom-7 -top-7 left-0 right-0 -z-1 rounded-3xl opacity-0 transition-opacity duration-500 absolute",
          active && "opacity-100"
        )}
      >
        {active && (
          <>
            <div className="g4 absolute inset-0.5 -z-1 rounded-3xl" />
            <div className="absolute left-8 top-0 h-0.5 w-40 bg-p1" />
          </>
        )}
      </div>
    </div>
  );
};

export default FaqCard;
