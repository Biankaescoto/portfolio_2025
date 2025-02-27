import "./style.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { LanguageProvider } from "./LanguageHelper";
import ReactDOM from "react-dom/client";
import React from "react";


// importing Routes for paths
import Landing from "../FRONTEND/routes/landing/landing";
import Tiles from "../FRONTEND/components/tiles/tiles";
import Nav from "../FRONTEND/components/Nav/nav";



const router = createBrowserRouter([
  {
    // landing
    path: "/",
    element: <Landing />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <LanguageProvider>
      <RouterProvider router={router} />
    </LanguageProvider> */}
      <Landing />
      <Tiles />
      <Nav />

  </React.StrictMode>
// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
);
