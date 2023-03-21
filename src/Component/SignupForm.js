import React from "react";

function SignupForm() {
  return (
    <>
      <div>
        <form action="" method="post">
        <input type="text" autoComplete="Username" placeholder="Username" />
        <input type="email" placeholder="Email Address" />
        <input type="password" autoComplete="Password" placeholder="Password" />
        <button className="loginBtn">Register</button>
        </form>
      </div>

      <p className="loginW">or register with</p>
    </>
  );
}

export default SignupForm;
