import { RouteObject } from "react-router-dom";
import Landing from "./components/landing/Landing";
// import Home from "./components/home/Home";
// import SignUp from "./components/auth/SignUp";

export const routes: RouteObject[] = [
  { path: "/", element: <Landing /> },
//   { path: "/home", element: <Home /> },
//   { path: "/signup", element: <SignUp /> },
];