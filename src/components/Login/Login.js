import React, { useState } from "react";
import "./Login.css";
import { db, auth } from "../../utils/init-firebase";
import { useAuth } from "../../contexts/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, currentUser } = useAuth();
  const [isSubmiting, setIsSubmiting] = useState(false);

  function handleEmail(e) {
    setEmail(e.target.value);
  }
  function handlePassword(e) {
    setPassword(e.target.value);
  }

  const log = async (e) => {
    e.preventDefault();
    // your login logic here
    if (!email || !password) {
      console.log("Please enter email and password");
    }
    setIsSubmiting(true);
    login(email, password);
    // navigate("/dashboard");
    console.log(currentUser);
  };

  return (
    <div className="login-wrapper flex-full-center">
      <div className="login-box flex-col-full-center">
        <div className="login-text-wrapper">
          <p className="login-text">Login</p>
          <p className="login-subtext">Enter your credentials below</p>
        </div>
        <form action="submit">
          <div className="flex-col-full-center">
            <div className="login-input-wrapper">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={handleEmail}
                className="username-input"
              />
              <input
                type="password"
                placeholder="Password"
                className="password-input"
                value={password}
                onChange={handlePassword}
              />
            </div>
            <button value="Submit" className="submit-button" onClick={log}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
