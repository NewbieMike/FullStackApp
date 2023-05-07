import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.scss";
import ErrorPage from "./error-page";

import { AutchContextProvider } from "./Context/AuthContext";
import { MainLayout } from "./layout/MainLayout";
import ToDoPage from "./views/ToDoPage";
import HomePage from "./views/HomePage/HomePage";
import Employee from "./views/Employee/Employee";
import LoginPage from "./views/LoginPage/LoginPage";
import RegisterPage from "./views/RegisterPage.js/RegisterPage";

const router = createBrowserRouter([
  {
    path: "/register",
    element: <RegisterPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
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
    <AutchContextProvider>
      <MainLayout>
        <RouterProvider router={router} />
      </MainLayout>
    </AutchContextProvider>
  </React.StrictMode>
);
