import React, { useState } from "react";
import "./Login.css";
import { db, auth } from "../../utils/init-firebase";
import { useAuth } from "../../contexts/AuthContext";
import {
  BrowserRouter,
  Route,
  NavLink,
  Link,
  useNavigate,
} from "react-router-dom";

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
    {
      currentUser && navigate("/home");
    }
    console.log(currentUser);
  };

  const navigate = useNavigate();
  function handleclicksignup(e) {
    e.preventDefault();
    navigate("/signup");
  }

  return (
    <div className="login-container">
      <div className="login-wrapper flex-full-center">
        <div className="login-box flex-col-full-center">
          <div className="login-text-wrapper">
            <p className="login-text">Login</p>
          </div>
          <form action="submit">
            <div className="flex-col-full-center">
              <div className="login-input-wrapper">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={handleEmail}
                  className="input"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="input"
                  value={password}
                  onChange={handlePassword}
                />
              </div>
              <button value="Submit" className="submit-button" onClick={log}>
                Submit
              </button>
            </div>
          </form>
          <div className="login-below slide-up">
            <div className="center">
              <p className="login-text">
                or{" "}
                <button className="auth-btn" onClick={handleclicksignup}>
                  Sign Up
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
