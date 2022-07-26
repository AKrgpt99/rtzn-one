import { useState } from "react";

export function useScrollRouter() {
  const [currentRoute, setCurrentRoute] = useState("home");
  const [allRoutes, setAllRoutes] = useState([]);

  return { currentRoute, setCurrentRoute, allRoutes, setAllRoutes };
}
