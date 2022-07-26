import React, { useContext, useEffect } from "react";

import { ScrollRouteContext, Route } from "~/context/scroll-routes";

interface ScrollRoutesProps {
  children: JSX.Element | JSX.Element[];
}

export default function ScrollRoutes({ children }: ScrollRoutesProps) {
  const { currentRoute, setCurrentRoute, setAllRoutes } =
    useContext(ScrollRouteContext);

  useEffect(() => {
    // Update allRoutes context on mount
    const getAllRoutes = () => {
      const routes: Array<Route> = React.Children.map(children, (child) => {
        return {
          path: child.props.id,
          element: child,
        };
      });
      return routes;
    };

    setAllRoutes(getAllRoutes());

    // Update currentRoute context on scroll
    const firstChild = React.Children.map(children, (child, index) =>
      index === 0 ? child : null
    )[0];

    const getCurrentRoute = () => {
      let section;
      if (currentRoute && currentRoute !== "")
        section = document.getElementById(firstChild.props.id);

      const sectionRect = section?.getBoundingClientRect();
      const sectionRectHeight = sectionRect?.height;
      const routeIndex = sectionRectHeight
        ? Math.floor(window.scrollY / sectionRectHeight)
        : 0;

      const childrenLength = React.Children.count(children);
      if (childrenLength < routeIndex) throw Error();

      let routeId;

      React.Children.forEach(children, (child, index) => {
        if (routeIndex === index) if (child.props) routeId = child.props.id;
      });

      return routeId ? routeId : "";
    };

    const handleScroll = () => {
      setCurrentRoute(getCurrentRoute());
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentRoute, setCurrentRoute]);

  return (
    <div className="relative h-fit w-full snap-y snap-mandatory">
      {children}
    </div>
  );
}
