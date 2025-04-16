import { RouteObject } from "react-router-dom";
import Landing from "./components/landing/Landing";

export const routes: RouteObject[] = [
  { path: "/", element: <Landing /> }
];