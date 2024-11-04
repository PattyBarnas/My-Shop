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
  width: 15rem;
  padding: 1rem 4.4rem;
  border-radius: 15px;
  background-color: transparent;
  border: 2px solid rgba(0, 0, 0, 0.6);
  color: #111;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 1.6rem;
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
          {errors && errors?.email && <Span>{errors.email}</Span>}
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
