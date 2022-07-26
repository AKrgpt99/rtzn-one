import { Link } from "@remix-run/react";
import React from "react";

import Socials from "./socials";

interface CTAProps {
  variation?: string;
}

export default function CTA({ variation = "default" }: CTAProps) {
  const baseButtonStyles =
    "rounded-md border-2 px-4 py-2 font-black uppercase tracking-tight transition";
  const solidButtonStyles =
    variation === "light"
      ? "border-white bg-white text-[color:#00BCE3] hover:bg-transparent hover:text-white"
      : "border-[color:#00BCE3] bg-[color:#00BCE3] text-white hover:bg-transparent hover:text-[#00BCE3]";
  const outlinedButtonStyles =
    variation === "light"
      ? "border-white bg-transparent text-white hover:bg-white hover:text-[color:#00BCE3]"
      : "border-[color:#00BCE3] bg-transparent text-[color:#00BCE3] hover:bg-[color:#00BCE3] hover:text-white";

  return (
    <>
      <div className="flex w-full flex-row items-center justify-start gap-4">
        <Link
          to="#mint"
          className={[baseButtonStyles, solidButtonStyles].join(" ")}
        >
          Mint
        </Link>
        <Link
          to="#roadmap"
          className={[baseButtonStyles, outlinedButtonStyles].join(" ")}
        >
          Roadmap
        </Link>
      </div>
      <Socials variation={variation} />
    </>
  );
}
