import "./style.scss";
import ReactDOM from "react-dom/client";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";



// importing Routes for paths
import Landing from "../FRONTEND/routes/landing/landing";
import Experience from "../FRONTEND/routes/Experience/experience";
import Projects from "../FRONTEND/routes/Projects/Projects";

const router = createBrowserRouter([
  {
    path: "/",  
    element: <Landing />,
  },
  {
    // landing
    path: "/Landing",
    element: <Landing />,
  },

  {
    // experience page
    path: "/Experience",
    element: <Experience />
  },
  {
    // projects
    path: "/Projects",
    element:<Projects />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} /> 
  </React.StrictMode>
);
