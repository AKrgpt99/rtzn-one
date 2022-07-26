import React, { useContext } from "react";
import { Link } from "@remix-run/react";

import Socials from "./socials";
import { ScrollRouteContext } from "~/context/scroll-routes";

export default function Navbar() {
  const { currentRoute, allRoutes } = useContext(ScrollRouteContext);

  const handleRoute = (path: string) =>
    document.getElementById(path)?.scrollIntoView();

  return (
    <div
      className="fixed top-0 left-0 z-50 flex h-24 w-full items-center justify-center bg-[color:#FFFFFF8A] px-8"
      style={{ backdropFilter: "blur(10px)" }}
    >
      <div className="flex h-full w-full flex-row items-center justify-between">
        <div className="flex h-16 items-center justify-center">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/rtzn-dev.appspot.com/o/rtzn-icon-blue.svg?alt=media&token=e3c072cd-c828-4746-a3cf-a37cd113e8c7"
              alt="RTZN logo"
              className="h-12 object-cover"
            />
            <h1 className="text-2xl font-black tracking-tighter text-[color:#00BCE3]">
              RTZN Labs
            </h1>
          </Link>
        </div>
        <div className="flex h-full flex-row items-center justify-center gap-16">
          <div className="flex h-full flex-row items-center justify-center gap-4 font-light">
            {allRoutes.length !== 0
              ? allRoutes.map((route) => (
                  <button
                    onClick={() => handleRoute(route.path)}
                    className={`flex h-full items-center justify-center border-b-2 capitalize tracking-widest transition ${
                      currentRoute === route.path
                        ? "border-[color:#00BCE3] text-[color:#00BCE3]"
                        : "border-[color:#FFFFFF00]"
                    }`}
                  >
                    {route.path}
                  </button>
                ))
              : null}
          </div>
          <Socials />
        </div>
      </div>
    </div>
  );
}
