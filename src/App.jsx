import { useState } from "react";
import Cart from "./features/Cart/Cart";
import Backdrop from "./ui/Backdrop";
import NavBar from "./ui/NavBar";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route index element={<Navigate replace to="/" />} /> */}
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
