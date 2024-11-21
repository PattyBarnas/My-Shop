import React from "react";
import LoginForm from "../features/Authentication/LoginForm";
import toast from "react-hot-toast";

import { redirect, json } from "react-router-dom";

function LoginPage(props) {
  return <LoginForm />;
}

export default LoginPage;

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");

  let errors = {};

  const userData = {
    email,
    password,
  };

  if (
    typeof email !== "string" ||
    !email.includes("@") ||
    email.trim().length <= 0
  ) {
    errors.email = "email must include an @ symbol or cannot be empty.";
  }
  if (typeof password !== "string" || password.length < 6) {
    errors.password = "password must be at least 6 characters.";
  }
  if (Object.keys(errors).length > 0) {
    toast.error("Login failed, please try again.", {
      duration: 1500,
      style: {
        minWidth: "250px",
        height: "4rem",
        fontSize: "1.4rem",
      },
    });
    return json(errors, { status: 400 });
  }

  try {
    const response = await fetch("http://localhost:8080/account/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      toast.error("Login failed, please try again.", {
        duration: 1500,
        style: {
          minWidth: "250px",
          height: "4rem",
          fontSize: "1.4rem",
        },
      });
      return json({ password: "Incorrect password." }, { status: 404 });
    }

    if (response.status === 422 || response.status === 401) {
      return response;
    }
    const resData = await response.json();

    if (resData.errors) {
      toast.error("Incorrect password.", {
        duration: 1500,
        style: {
          minWidth: "250px",
          height: "4rem",
          fontSize: "1.4rem",
        },
      });
      return json({ password: "Incorrect password." }, { status: 404 });
    }
    const token = resData.token;

    localStorage.setItem("token", token);

    const expiration = new Date();

    expiration.setHours(expiration.getHours() + 1);

    localStorage.setItem("expiration", expiration.toISOString());
  } catch (error) {}
  toast.success("User has been authenticated.", {
    duration: 1500,
    style: {
      minWidth: "250px",
      height: "4rem",
      fontSize: "1.4rem",
    },
  });

  return redirect("/");
}
