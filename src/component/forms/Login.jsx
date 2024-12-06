import { Link } from "react-router-dom";
import "./form.css";
import "./login.css";
import { useState } from "react";
import React from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassoword, setShowPassword] = useState(false);
  // handle login logic
  const formSubmited = (e) => {
    e.preventDefault();
    if (email.trim() === "") return toast.error("Email is required 👌");
    if (password.trim() === "") return toast.error("Passord is required 👌");
    console.log(email, password);
  };
  // toggle password visibility
  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  return (
    <div className="login">
      <h1>Login ❤️</h1>
      <form onSubmit={formSubmited}>
        <ToastContainer theme="colored" />
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Username"
        />
        <div className="pass">
        <input
          type={showPassoword ? 'text' : 'password' }
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        {showPassoword ? (
                <i
                onClick={togglePasswordVisibility}
                class="fa-solid fa-eye-slash hide-eye" 
              ></i>
        ) : (
            <i onClick={togglePasswordVisibility} class="fa-solid fa-eye show-eye"></i>
      
        )}

        </div>

        <button className="btn-login" type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
};

export default Login;
