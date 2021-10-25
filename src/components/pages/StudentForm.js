import axios from "axios";
import React, { useState } from "react";
import { Form, Row, Col, Button, Modal } from "react-bootstrap";
import "./StudentForm.css";

export default function StudentForm(props) {
  const [show, setShow] = useState(props.showModal);

  const handleClose = () => {
    setShow(false);
    props.handleCallback(false);
  };

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [rollno, setRollno] = useState("");
  const [age, setAge] = useState("");
  const [course, setCourse] = useState("");
  const [batch, setBatch] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [fatherContact, setFatherContact] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");

  const validation = () => {
    if (!name) {
      alert("Value is Required");
      return false;
    } else {
      return true;
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (validation()) {
      var data = new FormData();
      data.append("name", name);
      data.append("roll", rollno);
      data.append("age", age);
      data.append("course", course);
      data.append("batch", batch);
      data.append("email", email);
      data.append("mobile", contact);
      data.append("father_name", fatherName);
      data.append("father_mobile", fatherContact);
      data.append("address", address);
      data.append("city", city);
      data.append("state", "UP");
      data.append("pin", pincode);
      data.append("image", image);
      data.append("password", "Abc@123");
      data.append("t_id", localStorage.getItem("id"));

      const config = {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      };
      console.log(config);
      axios
        .post("http://192.168.1.20:3000/student/addStudent", data, config)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err.response));
      //  console.log(data);
    }
    handleClose();
  };
  const getImage = (file) => {
    setImage(file);
    setImgUrl(URL.createObjectURL(file));
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Student Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Profile</Form.Label>
                <div className="uploadImage" action="upload.jpg">
                  <Form.Control
                    type="file"
                    onChange={(e) =>
                      e.target.files.length > 0
                        ? getImage(e.target.files[0])
                        : setImgUrl(null)
                    }
                  />
                  <img src={imgUrl} alt="" />
                </div>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Fisrt Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Rollno.</Form.Label>{" "}
                <Form.Control
                  type="number"
                  placeholder="Enter rollno"
                  value={rollno}
                  onChange={(e) => setRollno(e.target.value)}
                />{" "}
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPassword">
                {" "}
                <Form.Label>Age</Form.Label>{" "}
                <Form.Control
                  type="number"
                  placeholder="Enter Age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />{" "}
              </Form.Group>{" "}
            </Row>{" "}
            <Row className="mb-3">
              {" "}
              <Form.Group as={Col} controlId="formGridEmail">
                {" "}
                <Form.Label>Course</Form.Label>{" "}
                <Form.Control
                  type="text"
                  placeholder="Enter course"
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                />{" "}
              </Form.Group>{" "}
              <Form.Group as={Col} controlId="formGridPassword">
                {" "}
                <Form.Label>Batch</Form.Label>{" "}
                <Form.Control
                  type="text"
                  placeholder="Enter batch"
                  value={batch}
                  onChange={(e) => setBatch(e.target.value)}
                />{" "}
              </Form.Group>{" "}
            </Row>{" "}
            <Row className="mb-3">
              {" "}
              <Form.Group as={Col} controlId="formGridEmail">
                {" "}
                <Form.Label>Email</Form.Label>{" "}
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />{" "}
              </Form.Group>{" "}
              <Form.Group as={Col} controlId="formGridPassword">
                {" "}
                <Form.Label>Contact Number</Form.Label>{" "}
                <Form.Control
                  type="number"
                  placeholder="Enter Phone number"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                />{" "}
              </Form.Group>{" "}
            </Row>{" "}
            <Row className="mb-3">
              {" "}
              <Form.Group as={Col} controlId="formGridEmail">
                {" "}
                <Form.Label>Father Name</Form.Label>{" "}
                <Form.Control
                  type="text"
                  placeholder="Enter father name"
                  value={fatherName}
                  onChange={(e) => setFatherName(e.target.value)}
                />
              </Form.Group>{" "}
              <Form.Group as={Col} controlId="formGridPassword">
                {" "}
                <Form.Label>Father's Contact Number</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter Phone number"
                  value={fatherContact}
                  onChange={(e) => setFatherContact(e.target.value)}
                />
              </Form.Group>
            </Row>
            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Address 2</Form.Label>
              <Form.Control
                placeholder="Apartment, studio, or floor"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </Form.Group>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter City"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>Andhra Pradesh </option>
                  <option>Arunachal Pradesh</option>
                  <option>Assam </option>
                  <option>Bihar</option>
                  <option>Chandigarh</option>
                  <option>Chhattisgarh</option>
                  <option>Goa</option>
                  <option>Gujarat</option>
                  <option>Haryana </option>
                  <option>Himachal Pradesh </option>
                  <option>Jammu and Kashmir</option>
                  <option>Jharkhand</option>
                  <option>Karnataka</option>
                  <option>Kerala</option>
                  <option>Madhya Pradesh</option>
                  <option>Maharashtra</option>
                  <option>Meghalaya</option>
                  <option>New Delhi</option>
                  <option>Nagaland</option>
                  <option>Odisha</option>
                  <option>Punjab</option>
                  <option>Rajasthan</option>
                  <option>Tamil Nadu</option>
                  <option>Uttar Pradesh</option>
                  <option>Uttarakhand</option>
                  <option>West Bengal</option>
                </Form.Select>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Pincode</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter Pincode"
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                />
              </Form.Group>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" type="submit" onClick={submitHandler}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
