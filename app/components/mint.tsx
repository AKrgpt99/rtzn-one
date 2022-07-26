import React from "react";

import Minter from "./minter";

interface MintProps {
  className?: string;
  id?: string;
}

export default function Mint({ className, id }: MintProps) {
  return (
    <section id={id} className={`gap-8 py-2 px-8 ${className}`}>
      <div className="flex h-fit w-full flex-col items-center justify-center gap-6">
        <h2 className="text-6xl font-black text-[color:#00BCE3] drop-shadow-md">
          Mint
        </h2>
        <p className="w-[420px] text-center text-xl font-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
        </p>
      </div>
      <Minter src="https://firebasestorage.googleapis.com/v0/b/rtzn-dev.appspot.com/o/pixelated-ocean-sunset.webp?alt=media&token=3b666830-45ae-4b42-a0dd-7a423c3e50eb" />
    </section>
  );
}
