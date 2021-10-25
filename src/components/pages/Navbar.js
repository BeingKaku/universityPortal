import React from "react";
// import { Nav } from "react-bootstrap";
// import { Nav, Navbar, Container } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import "./Navbar.css";
// import * as BsIcons from "react-icons/bs";
import * as ImIcons from "react-icons/im";

export default function N() {
  const logout = () => {
    localStorage.clear();
    window.location.reload();
    <Redirect>  </Redirect>
  };
  return (
    <div>
      <nav>
        <div className="left">
          <div className="logo">
            {/* <ImIcons.ImCamera/> */}
            <ImIcons.ImCamera className="CameraIcon"></ImIcons.ImCamera>
          </div>
        </div>
        <div className="right">
          <ul>
            <li className="AdminHomepage">
              <Link to="/Admin-home">Admin Homepage</Link>
            </li>
            <li>
              <Link to="/Admin-home/student">Student Details </Link>
            </li>
            <li>
              <Link to="/Admin-home/teacher">Teacher Details </Link>
            </li>
            <li className="LogoutButton">
              <span onClick={logout}>Logout</span>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
