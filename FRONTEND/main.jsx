import "./style.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { LanguageProvider } from "./LanguageHelper";
import ReactDOM from "react-dom/client";
import React from "react";


// importing Routes for paths
import Landing from "../FRONTEND/routes/landing/landing";


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
  </React.StrictMode>
);
