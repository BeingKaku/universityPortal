import React from "react";
import { Link, Redirect } from "react-router-dom";
import "./NavbarStudent.css";

export default function NavbarStudent() {
  const logout = () => {
    localStorage.clear();
    window.location.reload();
    <Redirect> </Redirect>;
  };
  return (
    <nav className="StudentNav">
      <div className="left">
        <div className="Studentlogo"></div>
      </div>
      <div className="right">
        <ul>
          <li className="StudentHomePage">
            <Link to="/Student-home">Student HomePage</Link>
          </li>
          {/* <li>
            <Link to="/Student-home/student">Student Details </Link>
          </li> */}
          <li className="LogoutButton">
            <span onClick={logout}>Logout</span>
          </li>
        </ul>
      </div>
    </nav>
  );
}
