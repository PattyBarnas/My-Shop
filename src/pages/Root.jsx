import React, { useEffect } from "react";
import NavBar from "../ui/NavBar";
import { Outlet, useLoaderData, useSubmit } from "react-router-dom";
import Footer from "../ui/Footer";
import { getTokenDuration } from "../util/auth";

function RootLayout(props) {
  const token = useLoaderData();
  const submit = useSubmit();

  useEffect(() => {
    if (!token) return;

    if (token === "EXPIRED") {
      submit(null, { method: "post", action: "/logout" });
      return;
    }
    const tokenDuration = getTokenDuration();

    setTimeout(() => {
      submit(null, { action: "logout", method: "post" });
    }, tokenDuration);
  }, []);

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
