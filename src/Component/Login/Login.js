import React, { useContext, useState } from "react";
import { UserContext } from "../../App";
import "firebase/auth";
import "./Login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { useHistory, useLocation } from "react-router";
import { handleGoogleSignIn, initializeLoginFramework } from "./loginManager";
import login from "../../images/login.jpg";

const Login = () => {
  // eslint-disable-next-line
  const [user, setUser] = useState({
    isSignedIn: false,
    name: "",
    email: "",
    password: "",
    photo: "",
  });

  initializeLoginFramework();

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const googleSignIn = () => {
    handleGoogleSignIn().then((res) => {
      handleResponse(res, true);
    });
  };

  const handleResponse = (res, redirect) => {
    setUser(res);
    setLoggedInUser(res);
    if (redirect) {
      history.replace(from);
      console.log(loggedInUser);
    }
  };

  return (
    <div class="row pt-5 d-flex align-items-center " style={{ width: "100%" }}>
      <div class="col-md-7">
        <img src={login} alt="" srcSet="" style={{ width: "100%" }} />
      </div>
      <div class="col-md-5 d-flex justify-content-center">
        <div className="d-flex mt-5 pt-5">
          <button
            className="btn btn-info text-white p-2 fw-bold fs-3 align-items-center"
            onClick={googleSignIn}
          >
            <FontAwesomeIcon
              icon={faGoogle}
              className="me-2 align-items-center"
            />
            Sign In With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
