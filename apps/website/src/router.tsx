import { lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";

const Login = lazy(() => import("./auth/Login"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Created = lazy(() => import("./pages/Created"));


export const router = createBrowserRouter([
  {
    path: "/auth/login-admin",
    element: <Login />,
  },
  {
    path: "/",
    element: <Navigate to="/auth/login-admin" replace />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/dashboard/edit-data",
    element: <div>samkamxsak</div>,
  },
  {
    path: "/dashboard/created-data",
    element: <Created />,
  },
  {
    path: "*",
    element: <div>Page Not Found</div>,
  },
]);
