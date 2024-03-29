import React from "react";
import LoginForm from "../features/Authentication/LoginForm";

function LoginPage(props) {
  console.log(localStorage.getItem("expiration"));
  return <LoginForm />;
}

export default LoginPage;
