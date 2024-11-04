import React from "react";
import SignUpForm from "../features/Authentication/SignUpForm";
import toast from "react-hot-toast";
import { redirect, json } from "react-router-dom";
function SignupPage(props) {
  return <SignUpForm />;
}

export default SignupPage;

export async function action({ request }) {
  const formData = await request.formData();
  const firstName = formData.get("firstName");
  const lastName = formData.get("lastName");
  const email = formData.get("email").toLowerCase();
  const password = formData.get("password");

  let errors = {};

  const userData = {
    firstName,
    lastName,
    email,
    password,
  };

  if (typeof firstName !== "string" || firstName.length <= 0) {
    errors.firstName = "must not be empty or a number.";
  }
  if (typeof lastName !== "string" || lastName.length <= 0) {
    errors.lastName = "must not be empty or a number.";
  }
  if (typeof email !== "string" || !email.includes("@")) {
    errors.email = "email must include an @ symbol.";
  }
  if (typeof password !== "string" || password.length < 6) {
    errors.password = "password must be at least 6 characters.";
  }

  if (Object.keys(errors).length > 0) {
    toast.error("Signing up failed, please try again.", {
      duration: 1500,
      style: {
        minWidth: "250px",
        height: "4rem",
        fontSize: "1.4rem",
      },
    });
    return json(errors, { status: 422 });
  }

  try {
    const response = await fetch("http://localhost:8080/account/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (response.status === 422) {
      const errorData = await response.json(); // Parse error response
      console.log("Duplicate email error:", errorData);
      toast.error("Email is already in use! Try again with a unique email.", {
        duration: 1500,
        style: {
          minWidth: "250px",
          height: "4rem",
          fontSize: "1.4rem",
        },
      });
      return json({ email: "Email already exists." }, { status: 422 });
    }

    if (!response.ok) {
      throw new Error("Signing up failed, please try again.");
    }

    if (response.status === 422 || response.status === 401) {
      return response;
    }

    const resData = await response.json();

    const token = resData.token;

    localStorage.setItem("token", token);
    // ADD EXPIRATION DATA function

    const expiration = new Date();

    expiration.setHours(expiration.getHours() + 1);
    console.log(expiration);

    localStorage.setItem("expiration", expiration.toISOString());
  } catch (error) {}

  toast.success("Sign up has completed, welcome!", {
    duration: 1500,
    style: {
      minWidth: "250px",
      height: "4rem",
      fontSize: "1.4rem",
    },
  });

  return redirect("/");
}
