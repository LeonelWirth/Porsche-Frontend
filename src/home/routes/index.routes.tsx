import type { RouteObject } from "react-router-dom";
import Home from "../pages/Home";

export const homeRoutes: RouteObject = {
  path: "/",
  children: [
    {
      element: <Home />,
      index: true,
    },
  ],
};
