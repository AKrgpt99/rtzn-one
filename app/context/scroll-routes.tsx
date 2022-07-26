import React from "react";

export interface Route {
  path: string;
  element: JSX.Element | JSX.Element[];
}

interface ScrollRouteContext {
  allRoutes: Array<Route>;
  setAllRoutes(_: any): any;
  currentRoute: string;
  setCurrentRoute(_: any): any;
}

export const ScrollRouteContext = React.createContext<ScrollRouteContext>({
  allRoutes: [],
  setAllRoutes: (_: any) => {},
  currentRoute: "",
  setCurrentRoute: (_: any) => {},
});
