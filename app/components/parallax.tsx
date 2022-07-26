import React, { useEffect } from "react";

interface ParallaxProps {
  anchorY: number;
  speed: number;
  className: string;
  height?: string;
}

export default function Parallax({
  anchorY,
  speed,
  className,
  height = "100%",
}: ParallaxProps) {
  useEffect(() => {
    const handleScroll = () => {
      const background = document.querySelector(
        `#background.${className}.parallax`
      );
      const offset = window.scrollY - anchorY;
      background?.setAttribute(
        "style",
        `background-position: 0 ${offset < 0 ? 0 : -speed * offset}px;`
      );
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`relative w-full overflow-hidden`} style={{ height }}>
      <div id="background" className={`${className} parallax`}></div>
    </div>
  );
}
