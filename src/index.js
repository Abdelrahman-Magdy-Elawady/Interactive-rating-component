import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import { SelectionContextProvider } from "./context/selectionContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SelectionPage from "./pages/selectionPage";
import SubmitPage from "./pages/submitPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        index: true,
        element: <SelectionPage />,
      },
      {
        path: "submit",
        element: <SubmitPage />,
      },
    ],
  },
]);

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

root.render(
  <SelectionContextProvider>
    <RouterProvider router={router} />
  </SelectionContextProvider>
);
