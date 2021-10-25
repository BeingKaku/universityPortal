import React, { useState } from "react";
import { Form, Modal, Row, Col, Button } from "react-bootstrap";
import axios from "axios";

export default function ViewTeacherProfile(props) {
  const [show, setShow] = useState(props.showModal1);
  console.log(props, "------props");
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
      `http://192.168.1.20:3000/teacher/delTeacher/${u_id}`,
      config
    );

    console.log(res);
    handleClose1();
    window.location.reload();
  };

  return (
    <div>
      <Modal show={show} onHide={handleClose1} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>
            {" "}
            Teacher - {props.detail.name}{" "}
            <snap
              value={props.detail.name}
              style={{
                color: "#e27333",
              }}
            ></snap>
          </Modal.Title>
        </Modal.Header>{" "}
        <Modal.Body>
          {" "}
          {/* {JSON.stringify(props.detail)}{" "} */}
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label> Profile </Form.Label>{" "}
                <div className="uploadImage" action="upload.jpg">
                  <Form.Control type="file" />
                  <img
                    src={"http://192.168.1.20:3000/" + props.detail.image}
                    alt=""
                  />
                </div>{" "}
              </Form.Group>{" "}
            </Row>{" "}
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label> EmpID. </Form.Label>{" "}
                <Form.Control
                  type="number"
                  readOnly
                  value={props.detail.empId}
                />{" "}
              </Form.Group>{" "}
            </Row>{" "}
            <Row className="mb-3">
              {" "}
              <Form.Group as={Col} controlId="formGridEmail">
                {" "}
                <Form.Label> Qualification </Form.Label>{" "}
                <Form.Control readOnly value={props.detail.qualification} />{" "}
              </Form.Group>{" "}
              <Form.Group as={Col} controlId="formGridPassword">
                {" "}
                <Form.Label> Total Experience </Form.Label>{" "}
                <Form.Control readOnly value={props.detail.exp} />{" "}
              </Form.Group>{" "}
            </Row>{" "}
            <Row className="mb-3">
              {" "}
              <Form.Group as={Col} controlId="formGridEmail">
                {" "}
                <Form.Label> Email </Form.Label>{" "}
                <Form.Control readOnly value={props.detail.email} />{" "}
              </Form.Group>{" "}
              <Form.Group as={Col} controlId="formGridPassword">
                {" "}
                <Form.Label> Contact Number </Form.Label>{" "}
                <Form.Control readOnly value={props.detail.mobile} />{" "}
              </Form.Group>{" "}
            </Row>{" "}
          </Form>{" "}
        </Modal.Body>{" "}
        <Modal.Footer>
          <Button
            variant="danger"
            style={{
              width: "100%",
            }}
            onClick={() => deletepost(props.detail.u_id)}
          >
            Delete{" "}
          </Button>{" "}
        </Modal.Footer>{" "}
      </Modal>{" "}
    </div>
  );
}
