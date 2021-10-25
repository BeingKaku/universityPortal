import React from "react";
import { Link, Redirect } from "react-router-dom";
import "./NavbarTeacher.css";
export default function NavbarTeacher() {
  const logout = () => {
    localStorage.clear();
    window.location.reload();
    <Redirect> </Redirect>;
  };
  return (
    <div>
      <div>
        <nav className="TeacherNav">
          <div className="left">
            {/* <div className="Body">
              <div className="Container" > */}
            <div className="Teacherlogo"></div>
          </div>
          <div className="right">
            <ul>
              <li className="TeacherHomepage">
                <Link to="/Teacher-home">Teacher Daseboard</Link>
              </li>
              <li>
                <Link to="/Teacher-home/student">Student Details </Link>
              </li>
              <li className="LogoutButton">
                <span onClick={logout}>Logout</span>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}
