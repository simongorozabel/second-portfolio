import React from "react";
import ReactDOM from "react-dom/client";

import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./pages/App/App";
import Home from "./pages/Home/Home";
import Portfolio from "./pages/Portfolio/Portfolio";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import ErrorPage from "./errorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,

    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
  {
    path: "/contact",
    element: <Contact />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
