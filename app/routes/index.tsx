import React, { useEffect, useContext } from "react";

import Navbar from "~/components/navbar";
import Footer from "~/components/footer";
import Home from "~/components/home";
import Gallery from "~/components/gallery";
import Mint from "~/components/mint";
import Roadmap from "~/components/roadmap";
import ScrollRoutes from "~/components/scroll-routes";
import ScrollRouter from "~/components/scroll-router";
import { useScrollRouter } from "~/hooks/useScrollRouter";

export default function Index() {
  const scrollRouter = useScrollRouter();

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center bg-white">
      <ScrollRouter router={scrollRouter}>
        <Navbar />
        <ScrollRoutes>
          <Home
            className="flex min-h-screen w-full snap-end snap-always flex-col items-center justify-center"
            id="home"
          />
          <Gallery
            className="flex min-h-screen w-full snap-end snap-always flex-col items-center justify-center"
            id="gallery"
          />
          <Mint
            className="flex min-h-screen w-full snap-end snap-always flex-col items-center justify-center"
            id="mint"
          />
          <Roadmap
            className="flex min-h-screen w-full snap-end snap-always flex-col items-center justify-center"
            id="roadmap"
          />
        </ScrollRoutes>
      </ScrollRouter>
      <Footer />
    </main>
  );
}
