import React from "react";
import styled from "styled-components";

const StyledForm = styled.form`
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

function SignUpForm(props) {
  return (
    <StyledForm>
      <H2>Create an account</H2>

      <StyledLabel htmlFor="firstName">First Name</StyledLabel>
      <StyledInput type="text" id="firstName" name="firstName" required />
      <StyledLabel htmlFor="first">Last Name</StyledLabel>
      <StyledInput type="text" id="lastName" name="lastName" required />
      <StyledLabel htmlFor="first">Email</StyledLabel>
      <StyledInput type="text" id="email" name="email" required />
      <StyledLabel htmlFor="password">Password</StyledLabel>
      <StyledInput type="text" id="password" name="password" required />
      <a>Forgot your password ?</a>
      <div>
        <button>Create</button>
      </div>
    </StyledForm>
  );
}

export default SignUpForm;
