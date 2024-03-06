import React, { useState } from "react";
import NavBar from "../../ui/NavBar";
import styled from "styled-components";
import SignUpForm from "./SignUpForm";

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

function LoginForm(props) {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <>
      {isLogin && (
        <StyledForm>
          <H4>Login</H4>

          <label htmlFor="first">Email</label>
          <input type="text" id="email" name="email" required />
          <label htmlFor="password">Password</label>
          <input type="text" id="password" name="password" required />
          <a>Forgot your password ?</a>
          <div>
            <button className="sign-in-btn">Sign In</button>
            <button onClick={() => setIsLogin(!isLogin)}>Sign Up</button>
          </div>
        </StyledForm>
      )}
      {!isLogin && <SignUpForm />}
    </>
  );
}

export default LoginForm;
