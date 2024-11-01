import Link from "next/link";
import React from "react";
import Button from "./ui/Button";

const Hero = () => {
  return (
    <section className="relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32">
      <div id="hero" className="container">
        <div className="relative z-2 max-w-512 max-lg:max-w-388">
          <div className="caption small-2 uppercase text-p3">VIDEO EDITING</div>
          <h1 className="mb-6 h1 text-p4 uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12">
            Amazingly Simple
          </h1>
          <p className="max-w-440 mb-14 body-1 max-md:mb-14">
            We design XORA, AI video editor, to be an easy to use, quick to
            learn, and suprisingly powerful.
          </p>
          <Button icon="/images/zap.svg">Try it Now</Button>
        </div>

        <div className="absolute -top-32 left-[calc(50%-340px)] w-1230 pointer-events-none hero-img_res">
          <img
            src="/images/hero.png"
            className="size-1230 max-lg:h-auto"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
