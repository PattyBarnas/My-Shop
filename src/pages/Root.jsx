import React from "react";
import NavBar from "../ui/NavBar";
import { Outlet } from "react-router-dom";

function RootLayout(props) {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
