import { useState } from "react";
import Cart from "./features/Cart/Cart";
import Backdrop from "./ui/Backdrop";
import NavBar from "./ui/NavBar";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ProductsPage, { loader as ProductLoader } from "./pages/ProductsPage";

import { CartProvider } from "./store/CartContext";
import LoginPage from "./pages/LoginPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,

        element: <ProductsPage />,
        loader: ProductLoader,
      },
      { path: "account/login", element: <LoginPage /> },
      {
        id: "product-detail",
        path: "product/:prodId",
        // loader: ProductLoader,
        children: [
          {
            // index: true,
            // element: <ProductsDetailsPage />,
          },
        ],
      },
    ],
  },
]);

function App(props) {
  return <RouterProvider router={router} />;
}

export default App;
