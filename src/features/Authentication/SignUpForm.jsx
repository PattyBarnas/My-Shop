import React, { useEffect, useRef, useState } from "react";
import { useActionData, Form, redirect } from "react-router-dom";
import styled from "styled-components";
import toast from "react-hot-toast";

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const StyledInput = styled.input`
  width: 18%;
  padding: 0.6rem;
  border-radius: 6px;
  border: 1px solid black;
  margin-bottom: 1.2rem;
`;

const StyledLabel = styled.label`
  font-size: 1.6rem;
`;

const H2 = styled.h2`
  font-size: 2.9rem;
  font-weight: 500;
`;

export default function SignUpForm(props) {
  const errors = useActionData();
  // SIGN UP FORM VALIDATION NEEDS TO BE FIXED
  //  -inputs think everything is a string even when numbers are typed

  return (
    <Form method="POST" action="/account/signup">
      <StyledForm>
        <H2>Create an account</H2>
        <p>
          <StyledLabel htmlFor="firstName">First Name</StyledLabel>
          <StyledInput type="text" id="firstName" name="firstName" />
          {errors?.firstName && <span>{errors.firstName}</span>}
        </p>
        <p>
          <StyledLabel htmlFor="first">Last Name</StyledLabel>
          <StyledInput type="text" id="lastName" name="lastName" />
          {errors?.lastName && <span>{errors.lastName}</span>}
        </p>
        <p>
          <StyledLabel htmlFor="first">Email</StyledLabel>
          <StyledInput type="text" id="email" name="email" />
          {errors?.email && <span>{errors.email}</span>}
        </p>
        <p>
          <StyledLabel htmlFor="password">Password</StyledLabel>
          <StyledInput type="password" id="password" name="password" />
          {errors?.password && <span>{errors.password}</span>}
        </p>
        <a>Forgot your password ?</a>
        <div>
          <button type="submit">Create</button>
        </div>
      </StyledForm>
    </Form>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const firstName = formData.get("firstName");
  const lastName = formData.get("lastName");
  const email = formData.get("email");
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

  try {
    const response = await fetch("http://localhost:8080/account/signup", {
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
      errors.email = resData.errors.email;
    }

    const token = resData.token;
    console.log(token);
    localStorage.setItem("token", token);
    // ADD EXPIRATION DATA function

    const expiration = new Date();

    expiration.setHours(expiration.getHours() + 1);
    console.log(expiration);

    localStorage.setItem("expiration", expiration.toISOString());
  } catch (error) {}

  if (Object.keys(errors).length > 0) {
    toast.error("Signing up failed, please try again.");
    return errors;
  }
  toast.success("Sign up has completed, welcome!");

  return redirect("/");
}
