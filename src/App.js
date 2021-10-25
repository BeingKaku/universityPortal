import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from "./components/pages/Login";
import Home from "./components/pages/AdminHome";
import TeacherHome from "./components/pages/TeacherPages/StudentPages/TeacherHome";
import StudentHome from "./components/pages/StudentPages/StudentHome";

function App() {
  const token = localStorage.getItem("token");
  const type = localStorage.getItem("usertype");

  if (token) {
    if (type === "teacher") {
      return (
        <Router>
          <Switch>
            <Route path="/Teacher-home" component={TeacherHome} />
            <Redirect to="/Teacher-home" />
          </Switch>
        </Router>
      );
    } else if (type === "admin") {
      return (
        <Router>
          <Switch>
            <Route path="/Admin-home" component={Home} />
            <Redirect to="/Admin-home" />
          </Switch>
        </Router>
      );
    } else if (type === "student") {
      return (
        <Router>
          <Switch>
            <Route path="/student" component={StudentHome} />
            <Redirect to="/student" />
          </Switch>
        </Router>
      );
    }
  } else {
    return (
      <Router>
        <Switch>
          <Route path="/" component={Login} />
          <Redirect to="/" />
        </Switch>
      </Router>
    );
  }
}

export default App;
