import React from "react";
import { Card, Form, InputGroup, FormControl, Button } from "react-bootstrap";

import "./StudentProfile.css";
import styled from "styled-components";

export default function StudentProfile() {
  return (
    <div style={{ width: "100%", display: "flex" }}>
      <div style={{ width: "22%" }}>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Italianno&display=swap');
        </style>
        <LeftSide style={{ height: "1100px" }}>
          <Form>
            <h2 className="About">About</h2>

            <h2 className="LeftHeading">Harvard University</h2>
            <Form.Text className="text-muted">
              “Harvard is at the frontier of academic and intellectual
              discovery. Those who venture here—to learn, research, teach, work,
              and grow—join nearly four centuries of students and scholars in
              the pursuit of truth, knowledge, and a better world.”
            </Form.Text>
            <h2 className="GetTouch">Get in Touch</h2>
            <h2 className="ContactHarvard">#Contact Harvard</h2>
            <Form.Text className="text-m1uted">
              <p>Call</p>
              +110- 2200489 , +110- 2200499
            </Form.Text>
            <h2 className="ContactHarvard">#Directions</h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2947.382247540627!2d-71.11884878456532!3d42.37700287918576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e377427d7f0199%3A0x5937c65cee2427f0!2sHarvard%20University!5e0!3m2!1sen!2sin!4v1634723222263!5m2!1sen!2sin"
              width="600"
              height="450"
              allowfullscreen=""
              style={{ width: "100%", height: "35%" }}
              loading="lazy"
            ></iframe>
          </Form>
        </LeftSide>
      </div>
      <div style={{ width: "80%" }}>
        <Wrap>
          <Card10>
            <Form>
              <h2 className="PersonalDetails">
                <snap className="Hash">#</snap>Personal Details
              </h2>

              <Form.Group
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "5px 10px",
                }}
                className="mb-3"
                controlId="formBasicEmail"
              >
                <Form.Label>Name</Form.Label>
                <Form.Control
                  value={"Jayant Kumar"}
                  style={{
                    backgroundColor: "white",
                    width: "30%",
                  }}
                  readOnly
                />
                <Form.Label>Roll</Form.Label>
                <Form.Control
                  value={"25001"}
                  style={{ backgroundColor: "white", width: "20%" }}
                  readOnly
                />
                <Form.Label>Age</Form.Label>
                <Form.Control
                  value={"24"}
                  style={{ backgroundColor: "white", width: "20%" }}
                  readOnly
                />
              </Form.Group>

              <Form.Group
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "0px 10px",
                }}
                className="mb-3"
                controlId="formBasicEmail"
              >
                <Form.Label>Course</Form.Label>
                <Form.Control
                  value={"B-tech"}
                  style={{ backgroundColor: "white", width: "35%" }}
                  readOnly
                />
                <Form.Label>Batch</Form.Label>
                <Form.Control
                  value={"2020-21"}
                  style={{
                    backgroundColor: "white",
                    width: "35%",
                    padding: "0px 10px",
                  }}
                  readOnly
                />
              </Form.Group>

              <Form.Group
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "0px 10px",
                }}
                className="mb-3"
                controlId="formBasicEmail"
              >
                <Form.Label>Email</Form.Label>
                <Form.Control
                  value={"123jayantkumar@gmail.com"}
                  style={{ backgroundColor: "white", width: "35%" }}
                  readOnly
                />
                <Form.Label>Contact</Form.Label>
                <Form.Control
                  value={"9811956722"}
                  style={{ backgroundColor: "white", width: "35%" }}
                  readOnly
                />
              </Form.Group>

              <Form.Group
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "0px 10px",
                }}
                className="mb-3"
                controlId="formBasicEmail"
              >
                <Form.Label>FatherName</Form.Label>
                <Form.Control
                  value={"Sanjeev Kumar"}
                  style={{ backgroundColor: "white", width: "35%" }}
                  readOnly
                />
                <Form.Label>FatherContact</Form.Label>
                <Form.Control
                  value={"9811956722"}
                  style={{ backgroundColor: "white", width: "35%" }}
                  readOnly
                />
              </Form.Group>

              <Form.Group
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "0px 10px",
                }}
                className="mb-3"
                controlId="formBasicEmail"
              >
                <Form.Label>Address</Form.Label>
                <Form.Control
                  value={"Sanjeev Kumar"}
                  style={{ backgroundColor: "white", width: "90%" }}
                  readOnly
                />
              </Form.Group>

              <Form.Group
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "5px 10px",
                }}
                className="mb-3"
                controlId="formBasicEmail"
              >
                <Form.Label>City</Form.Label>
                <Form.Control
                  value={"Ghaziabad"}
                  style={{
                    backgroundColor: "white",
                    width: "30%",
                  }}
                  readOnly
                />
                <Form.Label>State</Form.Label>
                <Form.Control
                  value={"Uttar Pradesh"}
                  style={{ backgroundColor: "white", width: "20%" }}
                  readOnly
                />
                <Form.Label>Pincode</Form.Label>
                <Form.Control
                  value={"201012"}
                  style={{ backgroundColor: "white", width: "20%" }}
                  readOnly
                />
              </Form.Group>
            </Form>
          </Card10>
        </Wrap>
        <Wrap>
          <Card10>
            <Form>
              <h2 className="PersonalDetails">
                <snap className="Hash">#</snap>Report
              </h2>

              <Form.Group
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  padding: "5px 2px",
                }}
                className="mb-3"
                controlId="formBasicEmail"
              >
                <Form.Label>English</Form.Label>
                <Form.Control
                  value={"89"}
                  style={{
                    backgroundColor: "white",
                    width: "5%",
                  }}
                  readOnly
                />
                <Form.Label>Maths</Form.Label>
                <Form.Control
                  value={"78"}
                  style={{
                    backgroundColor: "white",
                    width: "5%",
                  }}
                  readOnly
                />
                <Form.Label>Science</Form.Label>
                <Form.Control
                  value={"82"}
                  style={{
                    backgroundColor: "white",
                    width: "5%",
                  }}
                  readOnly
                />
                <Form.Label>Hindi</Form.Label>
                <Form.Control
                  value={"91"}
                  style={{
                    backgroundColor: "white",
                    width: "5%",
                  }}
                  readOnly
                />
                <Form.Label>Socical Science</Form.Label>
                <Form.Control
                  value={"74"}
                  style={{
                    backgroundColor: "white",
                    width: "5%",
                  }}
                  readOnly
                />
              </Form.Group>
              <Form.Group
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  padding: "5px 2px",
                }}
                className="mb-3"
                controlId="formBasicEmail"
              >
                <Form.Label>Percentage</Form.Label>
                <Form.Control
                  value={"85.5"}
                  style={{
                    backgroundColor: "white",
                    width: "7%",
                  }}
                  readOnly
                />
                <Form.Label>Grade</Form.Label>
                <Form.Control
                  value={"A"}
                  style={{ backgroundColor: "white", width: "7%" }}
                  readOnly
                />
              </Form.Group>
            </Form>
          </Card10>
        </Wrap>
      </div>
    </div>
  );
}

const Wrap = styled.div`
  //   width: 80%;
  display: grid;
  padding: 10px;
  margin: 140px 20px;
  grid-template-columns: repeat(1, 3fr);
  grid-gap: 20px;
  border: 2px solid rgb(179, 22, 22);
  border-radius: 10px;
`;
const Card10 = styled.div`
margin: 20px
  height: 300px;
  background: #8080802b;
  background: white;

`;

const LeftSide = styled.div`
  display: grid;
  padding: 20px;
  margin: 120px 10px;
  grid-row: 1 / 9;
  background: black;
  border: 3px solid rgb(179, 22, 22);
  border-radius: 10px;
`;
