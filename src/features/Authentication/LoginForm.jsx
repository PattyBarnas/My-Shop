import React, { useState } from "react";
import NavBar from "../../ui/NavBar";
import styled from "styled-components";
import { Form, redirect, useActionData } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { clear } from "localforage";

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  font-size: 1.4rem;
`;

const H4 = styled.h4`
  font-size: 2.2rem;
  font-weight: 500;
`;

export default function LoginForm(props) {
  const navigate = useNavigate();
  const errors = useActionData();
  return (
    <Form method="POST" action="/account/login">
      <StyledForm>
        <H4>Login</H4>

        <label htmlFor="first">Email</label>
        <input type="text" id="email" name="email" />
        {errors?.email && <span>{errors.email}</span>}

        <label htmlFor="password">Password</label>
        <input type="text" id="password" name="password" />
        {errors?.password && <span>{errors.password}</span>}
        <a>Forgot your password ?</a>
        <div>
          <button type="submit" className="sign-in-btn">
            Sign In
          </button>
          <button onClick={() => navigate("/account/signup")}>Sign Up</button>
        </div>
      </StyledForm>
    </Form>
  );
}

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

  try {
    const response = await fetch("http://localhost:8080/account/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error("Signing up failed, please try again.");
    }

    if (response.status === 422 || response.status === 401) {
      return response;
    }
    const resData = await response.json();

    if (resData.errors) {
      // console.log(resData);
      errors.email = resData?.errors?.email;
      errors.password = resData?.errors?.password;
      // toast.error("Login failed, please try again.");

      return errors;
    }

    // const token = resData.token;
    // console.log(token);
    // localStorage.setItem("token", token);
    // ADD EXPIRATION DATA function
    // const expiration = new Date().getHours();
  } catch (error) {
    console.log(error, "skrt");
  }

  // errors = resData.errors;

  if (Object.keys(errors).length > 0) {
    toast.error("Login failed, please try again.");
    console.log(errors);
    return errors;
  }
  toast.success("User has been authenticated.");

  return redirect("/");
}
