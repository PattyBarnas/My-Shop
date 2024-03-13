import React, { useEffect, useRef } from "react";
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
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  async function handleSubmitSignup(e) {
    e.preventDefault();
    const firstName = firstNameRef?.current.value;
    const lastName = lastNameRef?.current.value;
    const email = emailRef?.current.value;
    const password = passwordRef?.current.value;

    const userData = {
      firstName,
      lastName,
      email,
      password,
    };

    if (!firstName || !lastName || !email || !password) return;
    try {
      useEffect(() => {
        const response = fetch("localhost:8080/signup", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userData),
        });
        // const data = response.json();
      }, []);
    } catch (error) {}
  }
  return (
    <StyledForm method="post" onSubmit={handleSubmitSignup}>
      <H2>Create an account</H2>

      <StyledLabel htmlFor="firstName">First Name</StyledLabel>
      <StyledInput
        type="text"
        id="firstName"
        name="firstName"
        ref={firstNameRef}
        required
      />
      <StyledLabel htmlFor="first">Last Name</StyledLabel>
      <StyledInput
        type="text"
        id="lastName"
        name="lastName"
        required
        ref={lastNameRef}
      />
      <StyledLabel htmlFor="first">Email</StyledLabel>
      <StyledInput
        type="text"
        id="email"
        name="email"
        required
        ref={emailRef}
      />
      <StyledLabel htmlFor="password">Password</StyledLabel>
      <StyledInput
        type="text"
        id="password"
        name="password"
        required
        ref={passwordRef}
      />
      <a>Forgot your password ?</a>
      <div>
        <button onClick={handleSubmitSignup}>Create</button>
      </div>
    </StyledForm>
  );
}

export default SignUpForm;
