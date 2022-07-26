import React from "react";

import CTA from "./cta";

export default function Hero() {
  return (
    <div className="relative flex w-full flex-row">
      <div className="relative h-[640px] w-7/12 shadow-xl sm:overflow-hidden sm:rounded-2xl">
        <div id="background" className="friendship bg-right"></div>
      </div>
      <div className="flex w-5/12 flex-col items-start justify-center">
        <div className="flex w-full flex-col items-start justify-center p-12">
          <h1 className="w-full text-left text-7xl font-extrabold tracking-tight text-[color:#00BCE3]">
            <span className="block drop-shadow-md">
              Good
              <br />
              Morning!
            </span>
          </h1>
          <p className="mx-auto mt-6 mt-12 w-full text-left text-2xl font-light text-[color:#5B5B5B]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>
        <div className="px-12">
          <CTA />
        </div>
      </div>
    </div>
  );
}
