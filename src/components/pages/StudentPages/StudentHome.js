import React from "react";
import NavbarStudent from "./NavbarStudent";
import StudentProfile from "./StudentProfile";

export default function StudentHome() {
  return (
    <div style={{ position: "relative" }}>
      <NavbarStudent />
      <div className="AdminHomeBack">
        <StudentProfile />
      </div>
    </div>
  );
}
