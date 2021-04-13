import React, { useState, useEffect } from "react";
import Dashboard from "../dashboard";
import Registration from "../register";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";

const Login = ({ title, angka }) => {
  const [welcomeText, setWelcomeText] = useState("Login");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    console.log("Mount Complete");
  }, []);

  useEffect(() => {
    console.log("Mount Updated");
  }, [welcomeText, username, password]);

  const handleSubmit = () => {
    setWelcomeText("Confirmation");
    const data = {
      username: username,
      password: password,
    };
    console.log(data);
    console.log("Finish, Waiting Input");
  };

  return (
    //JSX
    <div className="container mt-5">
      <h3>{welcomeText}</h3>
      <h5>
        {title} {angka}
      </h5>
      <p className="form-label mt-5">Username</p>
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

export default Login;