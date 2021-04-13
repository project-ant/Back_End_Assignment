import React, { useState, useEffect } from "react";
import Dashboard from "../dashboard";
import Login from "../login";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";

const Registration = ({ title, angka }) => {
  const [welcomeText, setWelcomeText] = useState("Register");
  const [fullname, setFullname] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [address, setAddress] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    console.log("Mount Complete");
  }, []);

  useEffect(() => {
    console.log("Mount Updated");
  }, [welcomeText, fullname, phonenumber, address , username, password]);

  const handleSubmit = () => {
    setWelcomeText("Confirmation");
    const data = {
      fullname: fullname,
      phonenumber: phonenumber,
      address: address,
      username: username,
      password: password,
    };
    console.log(data);
    console.log("Finish");
  };

  return (

    //Routing


    //JSX
    <div className="container mt-5">
      <h3>{welcomeText}</h3>
      <h5>
        {title} {angka}
      </h5>
      <p className="form-label mt-3">Full Name</p>
      <input
        className="form-control"
        placeholder="Masukan Nama Lengkap"
        value={fullname}
        onChange={(e) => setFullname(e.target.value)}
      />
      <p className="form-label mt-3">Phone Number</p>
      <input
        className="form-control"
        placeholder="Masukan Nomor Handphone"
        value={phonenumber}
        onChange={(e) => setPhonenumber(e.target.value)}
      />
      <p className="form-label mt-3">Address</p>
      <input
        className="form-control"
        placeholder="Masukan Alamat"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <p className="form-label mt-3">Username</p>
      <input
        className="form-control"
        placeholder="Masukan Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <p className="form-label mt-3">Password</p>
      <input
        className="form-control"
        placeholder="Masukan password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <br />
      <button type="button" onClick={handleSubmit} className="btn btn-primary">
        Sign In
      </button>
    </div>
  );
};

export default Registration;