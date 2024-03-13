import React, { useEffect, useRef } from "react";
import { useActionData, Form, redirect } from "react-router-dom";
import styled from "styled-components";

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

  return (
    <Form method="post">
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
          <StyledInput type="text" id="password" name="password" />
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
  const errors = {};
  console.log(firstName);

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
  if (Object.keys(errors).length) {
    return errors;
  }

  return redirect("/account/login");
}
