import React from "react";
import { Link } from "@remix-run/react";

import CTA from "./cta";

interface GalleryProps {
  className?: string;
  id?: string;
}

export default function Gallery({ className, id }: GalleryProps) {
  return (
    <section
      id={id}
      className={`relative overflow-hidden bg-[color:#00BCE3] py-2 px-16 ${className}`}
    >
      <div className="z-10 flex w-fit flex-row items-center justify-center gap-32 rounded-xl bg-[color:#00BCE3] py-4 pl-32 pr-4 text-white">
        <div className="flex flex-col items-start justify-center">
          <div className="mb-12 flex flex-col items-start justify-center">
            <h3 className="text-3xl font-light tracking-widest">Current</h3>
            <h2 className="text-6xl font-black text-white drop-shadow-md">
              Collection
            </h2>
            <p className="mt-4 text-xl font-light">Mint ending in September</p>
          </div>
          <CTA variation="light" />
        </div>
        <div className="relative flex w-[428px] flex-col items-center justify-center overflow-hidden rounded-xl bg-white p-1 shadow-xl">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/rtzn-dev.appspot.com/o/pixelated-ocean-sunset.webp?alt=media&token=3b666830-45ae-4b42-a0dd-7a423c3e50eb"
            alt=""
            className="h-[420px] w-[420px] overflow-hidden rounded-xl bg-white object-cover object-top"
          />
          <div className="absolute top-1 h-[420px] w-[420px] rounded-xl bg-[color:#00000080]"></div>
          <div className="absolute top-24 flex flex-col items-center justify-center">
            <h1 className="w-[256px] text-center text-6xl font-bold tracking-tighter text-white drop-shadow-md">
              Good Morning
            </h1>
            <p className="text-8xl drop-shadow-lg">❤️</p>
          </div>
          <div className="flex w-full flex-col items-center justify-center bg-white">
            <div className="flex w-full flex-col items-start justify-center gap-4 p-6">
              <p className="text-lg font-bold text-[color:#00BCE3]">
                Description
              </p>
              <p className="font-light text-black">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
        <div className="flex w-20 flex-col items-center justify-center">
          <Link
            to="gallery"
            className="flex w-full flex-col items-center justify-center gap-2 rounded-lg rounded-md border-2 border-2 border-white px-4 py-2 font-black uppercase tracking-tight transition hover:bg-[color:#FFFFFF40]"
          >
            <img
              src="https://firebasestorage.googleapis.com/v0/b/rtzn-dev.appspot.com/o/grip-solid.svg?alt=media&token=d9a59ed9-c045-43b0-99f6-c0d559904e06"
              alt=""
              className="w-8"
              style={{
                filter:
                  "invert(100%) sepia(0%) saturate(0%) hue-rotate(162deg) brightness(100%) contrast(101%)",
              }}
            />
            <p className="text-center text-xs">View Gallery</p>
          </Link>
        </div>
      </div>
    </section>
  );
}
