import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage, { loader as ProductLoader } from "./pages/HomePage";
import ProductPage from "./pages/ProductsPage";

import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import { action as createUserAction } from "./pages/SignUpPage";
import { action as userLoginAction } from "./pages/LoginPage";
import ProductDetailsPage, {
  loader as ProductDetailsLoader,
} from "./pages/ProductDetailsPage";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import "./App.css";
import Checkout from "./features/Checkout/Checkout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: ProductLoader,
      },
      {
        path: "products",
        element: <ProductPage />,
        loader: ProductLoader,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
      {
        path: "products/:prodId",
        id: "product-detail",
        loader: ProductDetailsLoader,
        element: <ProductDetailsPage />,
      },
      {
        path: "account/login",
        element: <LoginPage />,
        action: userLoginAction,
      },
      {
        path: "account/signup",
        element: <SignUpPage />,
        action: createUserAction,
      },
    ],
  },
]);

function App(props) {
  return <RouterProvider router={router} />;
}

export default App;
