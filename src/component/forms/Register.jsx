import { Link } from "react-router-dom";
import "./form.css";
import "./register.css";
import { useState } from "react";
import React from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Register = () => {
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassoword, setShowPassword] = useState(false);
  // handle login logic
  const formSubmited = (e) => {
    e.preventDefault();
    if (username.trim() === "") return toast.error("Username is required 👌");
    if (phone.trim() === "") return toast.error("Phone is required 👌");
    if (password.trim() === "") return toast.error("Passord is required 👌");
  };
  // toggle password visibility
  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  return (
    <div className="login">
      <h1>  NEW ACCOUNT </h1>
      <form onSubmit={formSubmited}>
        <ToastContainer theme="colored" />
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone"
        />
        <div className="pass">
          <input
            type={showPassoword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          {showPassoword ? (
            <i
              onClick={togglePasswordVisibility}
              class="fa-solid fa-eye-slash"
            ></i>
          ) : (
            <i onClick={togglePasswordVisibility} class="fa-solid fa-eye"></i>
          )}
        </div>

        <button className="btn-register" type="submit">
          Register
        </button>
      </form>
      <p>
        Do u have an account? <Link to="/login">log in</Link>
      </p>
    </div>
  );
};

export default Register;
