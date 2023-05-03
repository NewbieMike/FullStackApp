import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.scss";
import ErrorPage from "./error-page";
import Employee from "./employee";

import { MainLayout } from "./layout/MainLayout";
import ToDoPage from "./views/ToDoPage";
import HomePage from "./views/HomePage/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/todos",
    element: <ToDoPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/api/employee/:id",
    element: <Employee />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MainLayout>
      <RouterProvider router={router} />
    </MainLayout>
  </React.StrictMode>
);
