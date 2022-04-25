import React from "react";
import "./Header.css";
import avatar from "../images/pfp.png";
import hori_logo from "../images/logo-text.png";
import { useAuth } from "../contexts/AuthContext";
import {
  useNavigate
} from "react-router-dom";

function Header() {
  const { currentUser, logout } = useAuth();
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
  function handleclicklogout() {
    logout();
    {
      !currentUser && navigate("/login");
    }
  }
  function handleclickinterviews(e) {
    e.preventDefault();
    navigate("/interviews");
  }
  function handleclickcourses(e) {
    e.preventDefault();
    navigate("/courses");
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
                <button className="nav-btn" onClick={handleclickcourses}>
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
                <button className="auth-btn" onClick={handleclicklogout}>
                  Log Out
                </button>
              </div>
            </div>
          </div>
          <div className="header-right">
            <ul className="clearfix">
              <li className="icons dropdown">
                <div
                  className="user-img c-pointer position-relative"
                  data-toggle="dropdown"
                >
                  <span className="activity active"></span>
                  <button onClick={handleclickprofile}>
                    <img src={avatar} height="40" width="40" alt="" />
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
