import React from "react";
import "./Header.css";
import avatar from "../images/pfp.png";
import hori_logo from "../images/logo-text.png";
import {
  BrowserRouter,
  Route,
  NavLink,
  Link,
  useNavigate,
} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const navigate = useNavigate();
  function handleclickhome() {
    navigate("/home");
  }
  /* function handleclickcourses(){
        navigate('/courses')
    } */
  function handleclickquizlets() {
    navigate("/quizlets");
  }
  /* function handleclickinterviews(){
        navigate('/interviews')
    } */
  function handleclickprofile() {
    navigate("/profile");
  }
  function handleclickcontests() {
    navigate("/contests");
  }
  function handleclicklogin() {
    navigate("/login");
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
                <span
                  className="input-group-text bg-transparent border-0 pr-2 pr-sm-3"
                  id="basic-addon1"
                >
                  <i className="mdi mdi-magnify"></i>
                </span>
                </div>
                <input
                  type="search"
                  className="form-control"
                  placeholder="Search"
                  aria-label="Search Dashboard"
                />
                <div className="drop-down animated flipInX d-md-none">
                  <form action="#">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search"
                    />
                  </form>
                </div>
                <button className="nav-btn" onClick={handleclickhome}>
                  Home
                </button>
                <button className="nav-btn" /* onClick={handleclickcourses} */>
                  Courses
                </button>
                <button className="nav-btn" onClick={handleclickquizlets}>
                  Quizlets
                </button>
                <button className="nav-btn" /* onClick={handleclickinterviews} */>
                  Interviews
                </button>
                <button className="nav-btn" onClick={handleclickcontests}>
                  Contests
                </button>
            </div>
          </div>
          <div className="header-right">
            <button className="auth-btn" onClick={handleclicklogin}>
                Sign-In/Sign-Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;