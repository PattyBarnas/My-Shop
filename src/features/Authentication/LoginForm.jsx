import React, { useState } from "react";
import NavBar from "../../ui/NavBar";
import styled from "styled-components";

import { useNavigate } from "react-router-dom";

const StyledForm = styled.form`
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
  return (
    <>
      <StyledForm>
        <H4>Login</H4>

        <label htmlFor="first">Email</label>
        <input type="text" id="email" name="email" required />
        <label htmlFor="password">Password</label>
        <input type="text" id="password" name="password" required />
        <a>Forgot your password ?</a>
        <div>
          <button type="submit" className="sign-in-btn">
            Sign In
          </button>
          <button type="submit" onClick={() => navigate("/account/signup")}>
            Sign Up
          </button>
        </div>
      </StyledForm>
      }
    </>
  );
}
