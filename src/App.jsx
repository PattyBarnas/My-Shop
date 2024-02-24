import { useState } from "react";
import Cart from "./features/Cart/Cart";
import Backdrop from "./ui/Backdrop";
import NavBar from "./ui/NavBar";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ProductsPage, { loader as ProductLoader } from "./pages/ProductsPage";

import { CartProvider } from "./store/CartContext";
import LoginPage from "./pages/LoginPage";
import ProductDetailsPage, {
  loader as ProductDetailsLoader,
} from "./pages/ProductDetailsPage";
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
      {
        path: "products/:prodId",
        id: "product-detail",
        loader: ProductDetailsLoader,
        element: <ProductDetailsPage />,
      },
      { path: "account/login", element: <LoginPage /> },
    ],
  },
]);

function App(props) {
  return <RouterProvider router={router} />;
}

export default App;
