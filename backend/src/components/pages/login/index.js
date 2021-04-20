import { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    console.log("=============");
    console.log(`Username: ${username}`);
    console.log(`Password: ${password}`);
    console.log("=============");
  };

  return (
    <div className="container-md border rounded shadow-lg mb-3 px-4 pb-5 py-3">
      <h3 className="text-center">Login</h3>
      <hr />

      <form>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="btn btn-primary"
            onClick={e => handleSubmit(e)}
            style={{ width: "100%" }}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
