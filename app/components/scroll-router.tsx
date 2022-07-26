import React from "react";

import { ScrollRouteContext } from "~/context/scroll-routes";

interface ScrollRouterProps {
  children: JSX.Element | JSX.Element[];
  router: {
    allRoutes: never[];
    setAllRoutes(_: any): any;
    currentRoute: string;
    setCurrentRoute(_: any): any;
  };
}

export default function ScrollRouter({ children, router }: ScrollRouterProps) {
  return (
    <ScrollRouteContext.Provider value={router}>
      {children}
    </ScrollRouteContext.Provider>
  );
}
