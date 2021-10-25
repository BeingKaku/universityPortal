import React, { useState, useEffect } from "react";
import "./Login.css";
import { Card, InputGroup, FormControl, Button } from "react-bootstrap";
import * as FiIcons from "react-icons/fi";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import axios from "axios";

// import SignUp from "./SignUp";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setpasswordError] = useState("");

  const validation = () => {
    if (!email) {
      setEmailError("Email Required");
      return false;
    }
    if (!password) {
      setpasswordError("Password Required");
      return false;
    } else {
      return true;
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setEmailError("");
    setpasswordError("");
    if (validation()) {
      const data = { email: email, password: password };
      let res = await axios.post("http://192.168.1.20:3000/home/login", data);

      if (res.status === 200) {
        console.log("hey guys");
        console.log("success", res);
        // localStorage.setItem("data", JSON.stringify(res.data));
        localStorage.setItem("token", res.data.data.token);
        localStorage.setItem("usertype", res.data.data.usertype);
        localStorage.setItem("id", res.data.data.id);
        window.location.reload();
        // localStorage.setItem("usertype", res.data.usertype);
      } else {
        alert("hey");
        console.log("heello");
        console.log("catch", res);
      }
    }
  };
  return (
    <div className="Q1">
      <div className="LoginfirstDiv">
        <form>
          <Card style={{ width: "25rem" }} className="LoginCard">
            <Card.Header className="logoIm">
              <FaIcons.FaUniversity /> Harvard University
            </Card.Header>
            <Card.Body>
              <Card.Title>Login Page </Card.Title>
              <Card.Text>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">
                    <FiIcons.FiMail />
                  </InputGroup.Text>
                  <FormControl
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </InputGroup>
                {emailError && <h6 style={{ color: "Red" }}>{emailError}</h6>}
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">
                    <AiIcons.AiFillLock />
                  </InputGroup.Text>
                  <FormControl
                    placeholder="Password"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </InputGroup>
                {passwordError && (
                  <h6 style={{ color: "Red" }}>{passwordError}</h6>
                )}
                <Button
                  type="submit"
                  onClick={submitHandler}
                  variant="outline-primary"
                  className="LoginButton"
                >
                  Login
                </Button>
                <hr></hr>
                <Card.Body>
                  <Button
                    style={{ width: "20.5rem" }}
                    type="submit"
                    // onClick={submitHandler}
                    variant="outline-danger"
                  >
                    Sign Up
                  </Button>
                </Card.Body>
                {/* </div> */}
              </Card.Text>
            </Card.Body>
          </Card>
        </form>
      </div>
    </div>
  );
}
export default Login;
