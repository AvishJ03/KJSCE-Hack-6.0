import React from "react";
import "./Header.css";
import avatar from "../images/pfp.png";
import hori_logo from "../images/logo-text.png";
import {
  useNavigate
} from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  function handleclickhome(e) {
    e.preventDefault();
    navigate("/home");
  }
  function handleclickquizlets(e) {
    e.preventDefault();
    navigate("/quizlets");
  }
  function handleclickprofile(e) {
    e.preventDefault();
    navigate("/profile");
  }
  function handleclickcontests(e) {
    e.preventDefault();
    navigate("/contests");
  }
  function handleclicklogin(e) {
    e.preventDefault();
    navigate("/login");
  }
  function handleclickinterviews(e) {
    e.preventDefault();
    navigate("/interviews");
  }
  return (
    <div>
      <div className="nav-header">
        <div className="brand-logo">
          <a href="#">
            <span className="logo-compact" onClick={handleclickhome}>
              <img src={hori_logo} alt="" />
            </span>
          </a>
        </div>
      </div>
      <div className="header">
        <div className="header-content clearfix">
          <div className="header-left">
            <div className="input-group icons">
              <div className="input-group-prepend">
                <input
                  type="search"
                  className="form-control"
                  placeholder="Search"
                  aria-label="Search Dashboard"
                />
                <button className="nav-btn" onClick={handleclickhome}>
                  Home
                </button>
                <button className="nav-btn" /* onClick={handleclickcourses} */>
                  Courses
                </button>
                <button className="nav-btn" onClick={handleclickquizlets}>
                  Quizlets
                </button>
                <button className="nav-btn" onClick={handleclickinterviews}>
                  Interviews
                </button>
                <button className="nav-btn" onClick={handleclickcontests}>
                  Contests
                </button>
                <button className="auth-btn" onClick={handleclicklogin}>
                  Sign-In/Sign-Up
                </button>
              </div>
            </div>
          </div>
          <div className="header-right"></div>
        </div>
      </div>
    </div>
  );
}

export default Header;
