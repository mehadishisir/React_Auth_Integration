import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Roots from "./components/roots/Roots.jsx";
import Home from "./pages/Home/Home.jsx";
import Signup from "./pages/signup/Signup.jsx";
import Login from "./pages/login/Login.jsx";
import AuthProvider from "./context/AuthProvider.jsx";
import Orders from "./pages/orders/Orders.jsx";
import Profile from "./pages/profile/Profile.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    Component: Roots,
    children: [
      { index: true, Component: Home },
      {
        path: "signup",
        Component: Signup,
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "orders",
        Component: Orders,
      },
      {
        path: "profile",
        Component: Profile,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
