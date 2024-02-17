import React from "react";
import Button from "../../ui/Button";
import "./loginform.css";
import NavBar from "../../ui/NavBar";

function LoginForm(props) {
  return (
    <>
      <form>
        <h1>Login</h1>

        <div>
          <label htmlFor="first">Email</label>
          <input type="text" id="email" name="email" />
          <label htmlFor="password">Password</label>
          <input type="text" id="password" name="password" />
          <a>Forgot your password ?</a>
          <Button className="sign-in-btn">Sign In</Button>
        </div>
      </form>
    </>
  );
}

export default LoginForm;
