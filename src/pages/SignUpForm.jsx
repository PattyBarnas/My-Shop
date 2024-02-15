import React from "react";

function SignUpForm(props) {
  return (
    <form>
      <h1>Sign up</h1>
      <div>
        <label for="fName">First Name</label>
        <input type="text" id="fName" name="fName" />
        <label for="lname">Last Name</label>
        <input type="text" id="lName" name="lName" />
        <label for="email">Email</label>
        <input type="text" id="email" name="email" />
        <label for="password">Password</label>
        <input type="text" id="password" name="password" />

        <Button className="sign-in-btn">Create</Button>
      </div>
    </form>
  );
}

export default SignUpForm;
