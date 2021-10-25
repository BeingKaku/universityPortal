import React, { useState } from "react";
import { Button, Modal, Form, Row, Col } from "react-bootstrap";
import axios from "axios";

export default function ViewStudentProfile(props) {
  const [show, setShow] = useState(props.showModal1);

  const handleClose1 = () => {
    setShow(false);
    props.handleCallback1(false);
  };

  const config = {
    headers: {
      Authorization: `${localStorage.getItem("token")}`,
    },
  };
  const deletepost = async (u_id) => {
    console.log(u_id, "-------id----------");
    let res = await axios.delete(
      `http://192.168.1.20:3000/student/delStudent/${u_id}`,
      config
    );

    console.log(res);
    handleClose1();
    window.location.reload();
  };

  return (
    <>
      <Modal show={show} onHide={handleClose1} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>
            Student - {props.detail.name}{" "}
            <snap
              value={props.detail.name}
              style={{
                color: "#e27333",
              }}
            ></snap>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Profile</Form.Label>
                <div className="uploadImage" action="upload.jpg">
                  <Form.Control
                    type="file"
                    // onChange={(e) =>
                    //   e.target.files.length > 0
                    //     ? getImage(e.target.files[0])
                    //     : setImgUrl(null)
                    // }
                  />
                  {/* <img src={imgUrl} alt="" /> */}
                </div>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Rollno.</Form.Label>{" "}
                <Form.Control
                  type="number"
                  readOnly
                  value={props.detail.roll}
                />
              </Form.Group>
            </Row>{" "}
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Course</Form.Label>{" "}
                <Form.Control readOnly value={props.detail.course} />{" "}
              </Form.Group>{" "}
              <Form.Group as={Col} controlId="formGridPassword">
                {" "}
                <Form.Label>Batch</Form.Label>{" "}
                <Form.Control readOnly value={props.detail.batch} />{" "}
              </Form.Group>{" "}
            </Row>{" "}
            <Row className="mb-3">
              {" "}
              <Form.Group as={Col} controlId="formGridEmail">
                {" "}
                <Form.Label>Email</Form.Label>{" "}
                <Form.Control
                  readOnly
                  value={props.detail.email}
                  // value={email}
                  // onChange={(e) => setEmail(e.target.value)}
                />{" "}
              </Form.Group>{" "}
              <Form.Group as={Col} controlId="formGridPassword">
                {" "}
                <Form.Label>Contact Number</Form.Label>{" "}
                <Form.Control readOnly value={props.detail.mobile} />{" "}
              </Form.Group>{" "}
            </Row>{" "}
            <Row className="mb-3">
              {" "}
              <Form.Group as={Col} controlId="formGridEmail">
                {" "}
                <Form.Label>English</Form.Label>{" "}
                <Form.Control
                  readOnly
                  value={"89"}
                  // onChange={(e) => setEmail(e.target.value)}
                />{" "}
              </Form.Group>{" "}
              <Form.Group as={Col} controlId="formGridEmail">
                {" "}
                <Form.Label>Maths</Form.Label>{" "}
                <Form.Control
                  readOnly
                  value={"81"}

                  // value={email}
                  // onChange={(e) => setEmail(e.target.value)}
                />{" "}
              </Form.Group>{" "}
              <Form.Group as={Col} controlId="formGridEmail">
                {" "}
                <Form.Label>Science</Form.Label>{" "}
                <Form.Control
                  readOnly
                  value={"77"}
                  // value={email}
                  // onChange={(e) => setEmail(e.target.value)}
                />{" "}
              </Form.Group>{" "}
              <Form.Group as={Col} controlId="formGridEmail">
                {" "}
                <Form.Label>Hindi</Form.Label>{" "}
                <Form.Control
                  readOnly
                  value={"92"}
                  // value={email}
                  // onChange={(e) => setEmail(e.target.value)}
                />{" "}
              </Form.Group>{" "}
              <Form.Group as={Col} controlId="formGridEmail">
                {" "}
                <Form.Label>SocialScience</Form.Label>{" "}
                <Form.Control
                  readOnly
                  value={"74"}
                  // value={email}
                  // onChange={(e) => setEmail(e.target.value)}
                />{" "}
              </Form.Group>{" "}
            </Row>{" "}
            <Row className="mb-3">
              {" "}
              <Form.Group as={Col} controlId="formGridEmail">
                {" "}
                <Form.Label>Percentage</Form.Label>{" "}
                <Form.Control
                  readOnly
                  value={"85.5%"}
                  // value={course}
                  // onChange={(e) => setCourse(e.target.value)}
                />{" "}
              </Form.Group>{" "}
              <Form.Group as={Col} controlId="formGridPassword">
                {" "}
                <Form.Label>Grade</Form.Label>{" "}
                <Form.Control
                  readOnly
                  value={"A++"}
                  // value={batch}
                  // onChange={(e) => setBatch(e.target.value)}
                />{" "}
              </Form.Group>{" "}
            </Row>{" "}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="danger"
            style={{ width: "100%" }}
            onClick={() => deletepost(props.detail.u_id)}
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
