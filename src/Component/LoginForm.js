import React, { useState } from "react";

function LoginForm() {
  const [formData, handleFormData] = useState({
    email: "",
    password: "",
  });

  const handleUserInput = (e) => {
    handleFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submit = () => {
    alert(`${formData.email} login successful`);
  };

  return (
    <>
      <div>
        <form action="" method="post">
          <input
            type="email"
            autoComplete="Username"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleUserInput}
            name="email"
          />
          <input
            type="password"
            autoComplete="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleUserInput}
            name="password"
          />
          <button className="loginBtn" onClick={submit}>
            LOGIN
          </button>
          <p className="c-pink fp">Forget password?</p>
        </form>
      </div>

      <p className="loginW">or login with</p>
    </>
  );
}

export default LoginForm;
