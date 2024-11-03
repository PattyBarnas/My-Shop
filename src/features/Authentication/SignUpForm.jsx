import React, { useEffect, useRef, useState } from "react";
import { useActionData, Form, redirect, useNavigate } from "react-router-dom";
import styled from "styled-components";
import toast from "react-hot-toast";

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  background-color: #f8f9fa;
  width: 30%;
  padding: 2.6rem 0;
  margin: 6.8rem auto;
  border-radius: 10px;
  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.2);
`;

const StyledInput = styled.input`
  border-radius: 3px;
  border: 2px solid #999;
  padding: 0.8rem 1rem;
  width: 40%;
  margin-bottom: 1rem;
  margin-left: 1rem;
`;

const StyledLabel = styled.label`
  font-size: 1.7rem;
  font-weight: 500;
  /* margin-bottom: 1rem; */
`;

const H2 = styled.h2`
  font-size: 2.9rem;
  font-weight: 400;
`;
const P = styled.p`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;
const A = styled.a`
  color: #1971c2;
  font-size: 1.4rem;
  cursor: pointer;
  font-weight: 500;
  margin-bottom: 1.2rem;
`;

const CreateButton = styled.button`
  padding: 1rem 4.4rem;
  border-radius: 15px;
  background-color: #228be6;
  border: 2px solid rgba(0, 0, 0, 0.6);
  color: #fff;
  text-transform: uppercase;
  font-weight: 600;
  cursor: pointer;
  letter-spacing: 1px;
  margin-bottom: 1.6rem;
`;
const Button = styled.button`
  display: block;
  width: 15rem;
  padding: 1rem 4.4rem;
  border-radius: 15px;
  background-color: transparent;
  border: 2px solid rgba(0, 0, 0, 0.6);
  color: #111;
  text-transform: uppercase;
  font-weight: 600;
  cursor: pointer;
  letter-spacing: 1px;
  margin-bottom: 1.6rem;
`;

const Span = styled.span`
  font-size: 1.4rem;
  letter-spacing: 0.8px;
  color: red;
`;

export default function SignUpForm(props) {
  const navigate = useNavigate();
  const errors = useActionData();
  // SIGN UP FORM VALIDATION NEEDS TO BE FIXED
  //  -inputs think everything is a string even when numbers are typed

  return (
    <Form method="POST" action="/account/signup">
      <StyledForm>
        <H2>Create an account</H2>
        <P>
          <StyledLabel htmlFor="firstName">First Name</StyledLabel>
          <StyledInput
            className={`${errors?.firstName ? "error" : "no-error"}`}
            type="text"
            id="firstName"
            name="firstName"
          />
          {errors?.firstName && <Span>{errors.firstName}</Span>}
        </P>
        <P>
          <StyledLabel htmlFor="first">Last Name</StyledLabel>
          <StyledInput
            className={`${errors?.lastName ? "error" : "no-error"}`}
            type="text"
            id="lastName"
            name="lastName"
          />
          {errors?.lastName && <Span>{errors.lastName}</Span>}
        </P>
        <P>
          <StyledLabel htmlFor="first">Email</StyledLabel>
          <StyledInput
            className={`${errors?.email ? "error" : "no-error"}`}
            type="text"
            id="email"
            name="email"
          />
          {errors?.email && <Span>{errors.email}</Span>}
        </P>
        <P>
          <StyledLabel htmlFor="password">Password</StyledLabel>
          <StyledInput
            className={`${errors?.password ? "error" : "no-error"}`}
            type="password"
            id="password"
            name="password"
          />
          {errors?.password && <Span>{errors.password}</Span>}
        </P>
        <A>Forgot your password ?</A>
        <div>
          <CreateButton type="submit">Create</CreateButton>
        </div>
        <Button type="button" onClick={() => navigate(-1)}>
          Back to login
        </Button>
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
    toast.error("Signing up failed, please try again.", {
      duration: 1500,
      style: {
        minWidth: "250px",
        height: "4rem",
        fontSize: "1.4rem",
      },
    });
    return errors;
  }
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
