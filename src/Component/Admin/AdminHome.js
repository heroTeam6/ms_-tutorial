import React from "react";
import { useSelector } from "react-redux";

import StudentDetail from "./../StudentInfo/StudentDetail";

const AdminHome = () => {
  const contacts = useSelector((state) => state);
  return (
    <div className=" m-5 p-5">
      <div className="container row">
        <div className="col-md-3 text-center my-2 bg-secondary text-white my-2 p-2">
          <h6>Name</h6>
        </div>
        <div className="col-md-3 text-center my-2 bg-secondary text-white my-2 p-2">
          <h6>Email</h6>
        </div>
        <div className="col-md-3 text-center my-2 bg-secondary text-white my-2 p-2">
          <h6>Phone</h6>
        </div>
        <div className="col-md-3 text-center my-2 bg-secondary text-white my-2 p-2">
          <h6> Edit/ Delete</h6>
        </div>
      </div>
      {contacts.map((contact, id) => (
        <StudentDetail contact={contact} key={id}></StudentDetail>
      ))}
    </div>
  );
};

export default AdminHome;
