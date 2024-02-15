import React from "react";
import Button from "../ui/Button";
import "./loginform.css";
import NavBar from "../ui/NavBar";

function LoginForm(props) {
  return (
    <>
      <NavBar />
      <form>
        <h1>Login</h1>

        <div>
          <label for="first">Email</label>
          <input type="text" id="email" name="email" />
          <label for="password">Password</label>
          <input type="text" id="password" name="password" />
          <a>Forgot your password ?</a>
          <Button className="sign-in-btn">Sign In</Button>
        </div>
      </form>
    </>
  );
}

export default LoginForm;
