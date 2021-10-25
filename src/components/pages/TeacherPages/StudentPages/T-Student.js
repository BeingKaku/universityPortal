// import Button from '@restart/ui/esm/Button'
import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import * as FcIcons from "react-icons/fc";
import StudentForm from "../../StudentForm";
import "./T-Student.css";
import axios from "axios";
import TViewStudent from "./T-ViewStudent";

export default function TStudent() {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState([]);
  const [detail, setDetail] = useState();
  const handleCallback = (childData) => {
    setShowModal(childData);
  };
  const handleShowModal = () => {
    setShowModal(true);
  };
  const [showModal1, setShowModal1] = useState(false);
  const handleCallback1 = (childData) => {
    setShowModal1(childData);
  };
  const handleShowModal1 = (item) => {
    setShowModal1(true);
    setDetail(item);
  };
  const config = {
    headers: {
      Authorization: `${localStorage.getItem("token")}`,
    },
  };
  const getData = async () => {
    console.log("-----------------");
    let res = await axios.get(
      `http://192.168.1.20:3000/student/listStudent/${localStorage.getItem(
        "id"
      )}`,
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
        <TViewStudent
          showModal1={showModal1}
          handleCallback1={handleCallback1}
          detail={detail}
        />
      )}
      <ul className="TAddStudent">
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
          <input type="search" className="TSearchBar"></input>
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
            <tr>
              <td>{1}</td>
              <td>{"Jayant Kumar"}</td>
              <td>{"24510"}</td>
              <td>{"24"}</td>
              <td>{"B-Tech"}</td>
              <td>{"2020-21"}</td>
              <td>{"Jay21@gmail.com"}</td>
              <td>{"9811956421"}</td>
              <td>{"Sanjeev Kumar"}</td>
              <td>{"9876541243"}</td>
              <td>{"House no-347 , Sector - 5 , Vasundhara"}</td>
              <td>{"Ghaziabad"}</td>
              <td>{"Uttar Pradesh"}</td>
              <td>{"201012"}</td>
              <td>
                <Button
                  type="submit"
                  onClick={() => handleShowModal1()}
                  variant="outline-warning"
                  // className="LoginButton"
                >
                  View
                </Button>
              </td>
            </tr>
          </tbody>
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
