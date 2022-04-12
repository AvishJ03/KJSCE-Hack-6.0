import React, { useState } from "react";
import "./Login.css";
import { db, auth } from "../../utils/init-firebase";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUserName] = useState("");
  const { register, currentUser } = useAuth();
  const [isSubmiting, setIsSubmiting] = useState(false);
  const userCollectionRef = collection(db, "users");

  function handleName(e) {
    setUserName(e.target.value);
  }
  function handleEmail(e) {
    setEmail(e.target.value);
  }
  function handlePassword(e) {
    setPassword(e.target.value);
  }

  const sign = async (e) => {
    e.preventDefault();
    // your login logic here
    if (!email || !password) {
      console.log("Please enter email and password");
    }
    setIsSubmiting(true);
    try {
      const authUser = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("Firebase Signup Succesfull ", authUser);
      await addDoc(userCollectionRef, {
        user_id: authUser.user.uid,
        name: username,
        score: [],
      });
    } catch (error) {
      console.log(error);
    }
    navigate("/");
  };

  const navigate = useNavigate();
  function handleclicklogin(e) {
    e.preventDefault();
    navigate("/login");
  }
  return (
    <div className="login-container">
      <div className="login-wrapper flex-full-center">
        <div className="login-box flex-col-full-center">
          <div className="login-text-wrapper">
            <p className="login-text">Sign Up</p>
          </div>
          <form action="submit">
            <div className="flex-col-full-center">
              <div className="login-input-wrapper">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="input"
                  value={username}
                  onChange={handleName}
                />
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
              <button value="Submit" className="submit-button" onClick={sign}>
                Create Account
              </button>
            </div>
          </form>
          <div className="login-below slide-up">
            <div className="center">
              <p className="login-text">
                or{" "}
                <button className="auth-btn" onClick={handleclicklogin}>
                  Log In
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
