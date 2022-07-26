import React, { useEffect, useState } from "react";

import Select from "./select";

async function addImageToCanvas(
  ctx: CanvasRenderingContext2D,
  src: string,
  dx: number,
  dy: number,
  dw: number,
  dh: number
) {
  return new Promise((resolve) => {
    const image = new Image(dw, dh);
    image.src = src;
    image.onload = () => {
      ctx.drawImage(image, dx, dy, dw, dh);
      resolve(null);
    };
  });
}

interface MinterProps {
  src: string;
}

export default function Minter({ src }: MinterProps) {
  const [receiverFormat, setReceiverFormat] = useState("address");
  const [receiverAddress, setReceiverAddress] = useState("");
  const [dataURL, setDataURL] = useState("");
  const [greeting, setGreeting] = useState("");

  const handleReceiverAddress = (event: any) =>
    setReceiverAddress(event.target.value);
  const handleGreeting = (event: any) => setGreeting(event.target.value);
  const handleMint = () => console.log(dataURL);
  const handlePreview = () => window.open(dataURL);

  useEffect(() => {
    const container = document.getElementById("lead-nft");
    const canvas = document.createElement("canvas");
    canvas.width = 420;
    canvas.height = 420;

    const context = canvas.getContext("2d");
    if (context) {
      addImageToCanvas(context, src, -70, 0, 560, 420);
    }

    container?.appendChild(canvas);

    return () => {
      container?.removeChild(canvas);
    };
  }, [greeting]);

  return (
    <div className="flex h-fit w-full flex-col items-center justify-center gap-4">
      <div
        className="h-[420px] w-[420px] overflow-hidden rounded-xl"
        id="lead-nft"
      ></div>
      <div className="flex flex-col items-start justify-center gap-6">
        <div className="mt-4 flex w-full items-center justify-start gap-4">
          <button
            onClick={handlePreview}
            className="rounded-md border-2 border-[color:#00BCE3] px-4 py-2 font-black uppercase tracking-tight text-[color:#00BCE3] transition hover:bg-[color:#00BCE3] hover:text-white"
          >
            Estimate
          </button>
          <button
            onClick={handleMint}
            className="rounded-md border-2 border-[color:#00BCE3] bg-[color:#00BCE3] px-4 py-2 font-black uppercase tracking-tight text-white transition hover:bg-transparent hover:text-[color:#00BCE3]"
          >
            Mint
          </button>
        </div>
      </div>
    </div>
  );
}
