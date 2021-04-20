import { useState } from "react";
import axios from "axios";

function AddUser() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    // console.log("=============");
    // console.log(`Name: ${firstName} ${lastName}`);
    // console.log(`Email: ${email}`);
    // console.log("=============");

    // save data to json-server
    const data = {
      first_name: firstName,
      last_name: lastName,
      email: email,
    };

    axios
      .post("http://localhost:3003/users", data)
      .then(() => alert(`${firstName} ${lastName} Berhasil Ditambahkan`))
      .catch(() => {
        alert("Tidak Bisa Terhubung ke json-server");
      });

    // clean the input
    setFirstName("");
    setLastName("");
    setEmail("");
  };

  return (
    <div className="container-md border rounded shadow-lg mb-3 px-4 pb-5 py-3">
      <h3 className="text-center">Add User</h3>
      <hr />

      <form>
        <div className="mb-3">
          <label htmlFor="first-name" className="form-label">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            id="first-name"
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="last-name" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            id="last-name"
            value={lastName}
            onChange={e => setLastName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="btn btn-primary"
            onClick={e => handleSubmit(e)}
            style={{ width: "100%" }}
          >
            Add User
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddUser;
