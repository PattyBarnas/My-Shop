import React from "react";
import NavBar from "../ui/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../ui/Footer";

function RootLayout(props) {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default RootLayout;
