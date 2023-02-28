import React, { Suspense, lazy } from "react";
import CartLayout from "./layouts/CartLayout/CartLayout";
import MainLayout from "./layouts/MainLayout/MainLayout";
import RegisterLayout from "./layouts/RegisterLayout/RegisterLayout";
const Login = lazy(() => import("./pages/Login/Login"));
const Register = lazy(() => import("./pages/Register/Register"));
const Cart = lazy(() => import("./pages/Cart/Cart"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));
const ProductList = lazy(() => import("./pages/ProductList/ProductList"));
import { useRoutes } from "react-router-dom";

export default function useRouteElements() {
  const routeElements = useRoutes([
    {
      path: "/",
      element: (
        <MainLayout>
          <Suspense>
            <ProductList />
          </Suspense>
        </MainLayout>
      ),
    },
    {
      path: "/register",
      element: (
        <RegisterLayout>
          <Suspense>
            <Register />
          </Suspense>
        </RegisterLayout>
      ),
    },
    {
      path: "/login",
      element: (
        <RegisterLayout>
          <Suspense>
            <Login />
          </Suspense>
        </RegisterLayout>
      ),
    },
    {
      path: "*",
      element: (
        <MainLayout>
          <Suspense>
            <NotFound />
          </Suspense>
        </MainLayout>
      ),
    },
    {
      path: "/cart",
      element: (
        <CartLayout>
          <Suspense>
            <Cart />
          </Suspense>
        </CartLayout>
      ),
    },
  ]);
  return routeElements;
}
