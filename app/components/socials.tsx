import React from "react";

interface SocialsProps {
  variation?: string;
}

export default function Socials({ variation = "default" }: SocialsProps) {
  return (
    <div className="flex flex-row items-center justify-start gap-4 py-8">
      <a href="#" className="transition hover:opacity-60">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/rtzn-dev.appspot.com/o/discord-brands.svg?alt=media&token=ffef9740-9f9a-4b7a-a449-c2b77a3e93bb"
          alt="Social media icon"
          className="h-6 w-6"
          style={{
            filter:
              variation === "light"
                ? "invert(100%) sepia(100%) saturate(76%) hue-rotate(211deg) brightness(104%) contrast(101%)"
                : "invert(69%) sepia(47%) saturate(5150%) hue-rotate(149deg) brightness(95%) contrast(101%)",
          }}
        />
      </a>
      <a href="#" className="transition hover:opacity-60">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/rtzn-dev.appspot.com/o/twitter-brands.svg?alt=media&token=ba70b8d5-5410-44b6-ba18-580b65fdbe5c"
          alt="Social media icon"
          className="h-6 w-6"
          style={{
            filter:
              variation === "light"
                ? "invert(100%) sepia(100%) saturate(76%) hue-rotate(211deg) brightness(104%) contrast(101%)"
                : "invert(69%) sepia(47%) saturate(5150%) hue-rotate(149deg) brightness(95%) contrast(101%)",
          }}
        />
      </a>
      <a href="#" className="transition hover:opacity-60">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/rtzn-dev.appspot.com/o/instagram-brands.svg?alt=media&token=b2e11f68-b23b-4049-bcfc-e615b0e627fb"
          alt="Social media icon"
          className="h-6 w-6"
          style={{
            filter:
              variation === "light"
                ? "invert(100%) sepia(100%) saturate(76%) hue-rotate(211deg) brightness(104%) contrast(101%)"
                : "invert(69%) sepia(47%) saturate(5150%) hue-rotate(149deg) brightness(95%) contrast(101%)",
          }}
        />
      </a>
    </div>
  );
}
