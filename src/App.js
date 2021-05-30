import "./App.css";
import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./Component/PrivateRoute/PrivateRoute";
import Navbar from "./Component/Navbar/Navbar";
import Home from "./Component/HomePage/Home/Home";
import Footer from "./Component/Footer/Footer/Footer";
import About from "./Component/About/About";
import Contact from "./Component/Contact/Contact/Contact";
import Login from "./Component/Login/Login";
import AdminHome from "./Component/Admin/AdminHome";
import toast from "react-hot-toast";
import axios from "axios";
import { useEffect } from "react";
import EditContact from "./Component/Shared/EditContact";
import StudentHome from "./Component/StudentInfo/StudentHome";
export const UserContext = createContext();

function App() {
  // eslint-disable-next-line
  const [adminLoading, setAdminLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState({});
  useEffect(() => {
    axios
      .get(
        `https://enigmatic-island-44538.herokuapp.com/isAdmin?email=${loggedInUser?.email}`
      )
      .then((res) => {
        setIsAdmin(res.data);
        setAdminLoading(false);
      })
      .catch((error) => toast.error(error.message));
  }, [loggedInUser?.email]);
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser, isAdmin]}>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route path="/aboutUs">
            <About></About>
          </Route>

          <PrivateRoute path="/profile">
            <StudentHome />
          </PrivateRoute>
          <PrivateRoute path="/admin">
            <AdminHome />
          </PrivateRoute>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/Courses">{/* <Profile></Profile> */}</Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/edit/:id">
            <EditContact></EditContact>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
