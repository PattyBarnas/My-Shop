import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { CartProvider } from "./store/CartContext.jsx";
import { AuthProvider } from "./store/AuthContext.jsx";

import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <CartProvider>
        <App />
        <Toaster />
      </CartProvider>
    </AuthProvider>
  </React.StrictMode>
);
