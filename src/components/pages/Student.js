import React, { useState, useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import "./student.css";
import * as FcIcons from "react-icons/fc";
import StudentForm from "./StudentForm";
import ViewStudentProfile from "./ViewStudentProfile";
import axios from "axios";

function Student() {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState([]);
  const [detail, setDetail] = useState();
  const handleCallback = (childData) => {
    setShowModal(childData);
  };
  const handleShowModal = () => {
    setShowModal(true);
  };

  const config = {
    headers: {
      Authorization: `${localStorage.getItem("token")}`,
    },
  };
  const [showModal1, setShowModal1] = useState(false);
  const handleCallback1 = (childData) => {
    setShowModal1(childData);
  };
  const handleShowModal1 = (item) => {
    setShowModal1(true);
    setDetail(item);
  };
  const getData = async () => {
    console.log("-----------------");
    let res = await axios.get(
      "http://192.168.1.20:3000/student/listStudent/12",
      config
    );
    console.log(res, "---------------student");
    if (res.status === 200) {
      setData(res.data.data);
      console.log(res);
    } else {
      console.log(res);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div style={{ width: "100%" }}>
      {showModal && (
        <StudentForm showModal={showModal} handleCallback={handleCallback} />
      )}
      {showModal1 && (
        <ViewStudentProfile
          showModal1={showModal1}
          handleCallback1={handleCallback1}
          detail={detail}
        />
      )}
      <ul className="AddStudent">
        <li>
          <Button
            type="submit"
            onClick={handleShowModal}
            variant="outline-danger"
          >
            Add Students
          </Button>
        </li>
        <li>
          <input
            type="search"
            className="SearchBar"
            placeholder="Search Anything.."
          ></input>
          <span>
            <FcIcons.FcSearch />
          </span>
        </li>
      </ul>
      <hr />
      <div>
        <Table className="TableList">
          <thead>
            <tr>
              <th>#</th>
              <th>Full Name</th>
              <th>Rollno</th>
              <th>Age</th>
              <th>Course</th>
              <th>Batch</th>
              <th>Email</th>
              <th>Contact Number</th>
              <th>Father Name</th>
              <th>Father's Contact Number</th>
              <th>Address</th>
              <th>City</th>
              <th>State</th>
              <th>Pincode</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((item, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.roll}</td>
                  <td>{item.age}</td>
                  <td>{item.course}</td>
                  <td>{item.batch}</td>
                  <td>{item.email}</td>
                  <td>{item.mobile}</td>
                  <td>{item.father_name}</td>
                  <td>{item.father_mobile}</td>
                  <td>{item.address}</td>
                  <td>{item.city}</td>
                  <td>{item.state}</td>
                  <td>{item.pin}</td>
                  <td>
                    <Button
                      type="submit"
                      onClick={() => handleShowModal1(item)}
                      variant="outline-warning"
                      // className="LoginButton"
                    >
                      View
                    </Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Student;
