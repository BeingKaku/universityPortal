import React from "react";
import { Route, Switch } from "react-router";
import Nav from "./Navbar";
import Student from "./Student";
// import StudentForm from "./StudentForm";
import Teacher from "./Teacher";

function Home() {
  return (
    <div>
      <Nav />
      <div className="AdminHomeBack">
        <Switch>
          <Route exact path="/Admin-home/student" component={Student} />
          {/* <Route exact path="/home/add-student" component={StudentForm} /> */}
          <Route exact path="/Admin-home/teacher" component={Teacher} />
        </Switch>
      </div>
    </div>
  );
}

export default Home;
