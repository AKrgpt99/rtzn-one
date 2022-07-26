import React, { useEffect, useState } from "react";

import Parallax from "./parallax";
import Socials from "./socials";

interface RoadmapProps {
  className: string;
  id: string;
}

export default function Roadmap({ className, id }: RoadmapProps) {
  const [innerHeight, setInnerHeight] = useState(800);

  useEffect(() => {
    setInnerHeight(window.innerHeight);
  }, []);

  return (
    <section id={id} className={`relative bg-[color:#00BCE3] ${className}`}>
      <Parallax
        anchorY={innerHeight * 2}
        speed={0.25}
        className="cityscape"
        height="50vh"
      />
      <div className="absolute top-0 z-[2] h-[50vh] w-full bg-gradient-to-t from-[#00BCE3] to-transparent"></div>
      <div className="z-[1] h-[640px] w-full"></div>
      <div className="absolute z-[2] flex h-fit w-1/2 items-end justify-center">
        <div className="my-32 flex h-fit w-full flex-col items-start justify-start rounded-xl bg-white p-16 shadow-xl">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/rtzn-dev.appspot.com/o/rtzn-icon-blue.svg?alt=media&token=e3c072cd-c828-4746-a3cf-a37cd113e8c7"
            alt="RTZN Logo"
            className="mb-3 w-32 object-cover"
          />
          <h3 className="text-6xl font-black text-[color:#00BCE3]">Roadmap</h3>
          <p className="mt-3 text-xl font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
          <Socials />
          <div className="flex h-fit w-full flex-row items-start justify-start">
            <div className="flex h-[512px] w-1/3 flex-col items-start justify-start p-4">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/rtzn-dev.appspot.com/o/launch.svg?alt=media&token=b8d672a1-c529-4752-8821-3e575c527b7b"
                alt=""
                className="w-32"
              />
              <h3 className="mt-2 text-sm font-light uppercase tracking-widest">
                First Quarter
              </h3>
              <h2 className="text-left text-2xl font-black tracking-tight text-[color:#00BCE3]">
                Ready for Lift-Off
              </h2>
              <p className="mt-3 text-left text-sm font-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="flex h-[512px] w-1/3 flex-col items-start justify-end p-4">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/rtzn-dev.appspot.com/o/graph.svg?alt=media&token=f75f64c8-4925-405f-826d-0cbeda823580"
                alt=""
                className="w-32"
              />
              <h3 className="mt-2 text-sm font-light uppercase tracking-widest">
                Second Quarter
              </h3>
              <h2 className="text-left text-2xl font-black tracking-tight text-[color:#00BCE3]">
                Just Getting Started
              </h2>
              <p className="mt-3 text-left text-sm font-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="flex h-[512px] w-1/3 flex-col items-start justify-start p-4">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/rtzn-dev.appspot.com/o/product.svg?alt=media&token=fb42039e-202a-4daf-995a-f1a5f5efea1b"
                alt=""
                className="w-32"
              />
              <h3 className="mt-2 text-sm font-light uppercase tracking-widest">
                Third Quarter
              </h3>
              <h2 className="text-left text-2xl font-black tracking-tight text-[color:#00BCE3]">
                New Product Update
              </h2>
              <p className="mt-3 text-left text-sm font-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
