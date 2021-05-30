import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import StudentDetail from "./../StudentInfo/StudentDetail";

const AdminHome = () => {
  const contacts = useSelector((state) => state);
  return (
    <div className=" mt-5 pt-5">
      <div className="row">
        <div className="col-md-3 col-sm-4 bg-warning">
          <ul class="list-group">
            <Link
              class="p-3 list-group-item text-white bg-warning border-warning"
              to="/admin"
            >
              Student Status
            </Link>

            <Link
              class="p-3 list-group-item text-white bg-warning border-warning"
              to="/admin/addAdmin"
            >
              Make Admin
            </Link>
          </ul>
        </div>
        <div className="col-md-9 col-sm-8">
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
      </div>
    </div>
  );
};

export default AdminHome;
