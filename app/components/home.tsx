import React from "react";

import Hero from "./hero";

interface HomeProps {
  className?: string;
  id?: string;
}

export default function Home({ className, id }: HomeProps) {
  return (
    <section id={id} className={`px-8 ${className}`}>
      <Hero />
    </section>
  );
}
