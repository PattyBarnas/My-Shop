import React, { useState } from "react";
import styled from "styled-components";
import { Form, redirect, useActionData } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const FormContainer = styled.div`
  display: block;
  background-color: #f8f9fa;
  width: 35%;
  height: 55rem;
  padding: 2.6rem 0;
  margin: 0 auto;
  margin-top: 6%;
  border-radius: 10px;
  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.2);
`;

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  font-size: 1.4rem;
`;

const H4 = styled.h4`
  font-size: 3.2rem;
  font-weight: 500;
`;
const Button = styled.button`
  padding: 1rem 1.4rem;
  border-radius: 15px;
  border: 2px solid rgba(0, 0, 0, 0.4);
  color: #fff;
  text-transform: uppercase;
  font-weight: 500;
  background-color: #228be6;
  cursor: pointer;
  letter-spacing: 1px;
  margin-top: 1.6rem;
`;
const Button2 = styled.button`
  padding: 1rem 1.4rem;
  border-radius: 15px;
  border: 2px solid rgba(0, 0, 0, 0.6);
  color: #555;
  text-transform: uppercase;
  font-weight: 500;
  cursor: pointer;
  letter-spacing: 1px;
  margin-bottom: 1.6rem;
`;
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

const Input = styled.input`
  border-radius: 3px;
  border: 2px solid #999;
  padding: 0.8rem 1rem;
  width: 40%;
  margin-bottom: 1rem;
  margin-left: 1rem;
`;

const StyledAnchor = styled.a`
  color: #1971c2;
  cursor: pointer;
  font-weight: 500;
  margin-bottom: 1.2rem;
`;

const Span = styled.span`
  font-size: 1.4rem;
  letter-spacing: 0.8px;
  color: red;
`;

const Label = styled.label`
  font-size: 1.7rem;
  font-weight: 500;
`;
export default function LoginForm(props) {
  const navigate = useNavigate();
  const errors = useActionData();
  return (
    <FormContainer>
      <Form method="POST" action="/account/login">
        <StyledForm>
          <H4>Sign In</H4>

          <Label htmlFor="first">Email</Label>
          <Input
            className={errors?.email ? "error" : "no-error"}
            type="text"
            id="email"
            name="email"
          />
          {errors?.email && <Span>{errors.email}</Span>}

          <Label htmlFor="password">Password</Label>
          <Input
            className={errors?.password ? "error" : "no-error"}
            type="password"
            id="password"
            name="password"
          />
          {errors?.password && <Span>{errors.password}</Span>}
          <ButtonContainer>
            <Button type="submit" className="sign-in-btn">
              Sign In
            </Button>
            <Button2 onClick={() => navigate("/account/signup")}>
              Create an account
            </Button2>
          </ButtonContainer>
          <StyledAnchor>Forgot your password?</StyledAnchor>
        </StyledForm>
      </Form>
    </FormContainer>
  );
}

// export async function action({ request }) {
//   const formData = await request.formData();
//   const email = formData.get("email");
//   const password = formData.get("password");

//   let errors = {};

//   const userData = {
//     email,
//     password,
//   };

//   if (
//     typeof email !== "string" ||
//     !email.includes("@") ||
//     email.trim().length <= 0
//   ) {
//     errors.email = "email must include an @ symbol or cannot be empty.";
//   }
//   if (typeof password !== "string" || password.length < 6) {
//     errors.password = "password must be at least 6 characters.";
//   }

//   try {
//     const response = await fetch("http://localhost:8080/account/login", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(userData),
//     });

//     if (!response.ok) {
//       throw new Error("Signing up failed, please try again.");
//     }

//     if (response.status === 422 || response.status === 401) {
//       return response;
//     }
//     const resData = await response.json();

//     if (resData?.errors) {
//       // console.log(resData);
//       errors.email = resData?.errors?.email;
//       errors.password = resData?.errors?.password;
//       toast.error("Login failed, please try again.", {
//         duration: 1500,
//         style: {
//           minWidth: "250px",
//           height: "4rem",
//           fontSize: "1.4rem",
//         },
//       });

//       return errors;
//     }

//     const token = resData.token;

//     localStorage.setItem("token", token);

//     const expiration = new Date();

//     expiration.setHours(expiration.getHours() + 1);
//     console.log(expiration);

//     localStorage.setItem("expiration", expiration.toISOString());

//     // ADD EXPIRATION DATA function
//     // const expiration = new Date().getHours();
//   } catch (error) {}

//   // errors = resData.errors;

//   if (Object.keys(errors).length > 0) {
//     toast.error("Login failed, please try again.", {
//       duration: 1500,
//       style: {
//         minWidth: "250px",
//         height: "4rem",
//         fontSize: "1.4rem",
//       },
//     });
//     console.log(errors);
//     return errors;
//   }
//   toast.success("User has been authenticated.", {
//     duration: 1500,
//     style: {
//       minWidth: "250px",
//       height: "4rem",
//       fontSize: "1.4rem",
//     },
//   });

//   return redirect("/");
// }
