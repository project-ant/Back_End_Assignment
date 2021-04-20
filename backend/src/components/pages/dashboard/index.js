import { useState, useEffect } from "react";
import axios from "axios";

import Card from "../../molecules/card";

function Dashboard() {
  const [users, setUsers] = useState([]);

  const endpoint = "http://localhost:3003/users";

  useEffect(() => {
    axios.get(endpoint).then(response => {
      setUsers(response.data.reverse());
    });
  }, []);

  useEffect(() => {}, [users]);

  return (
    <div className="container-md border rounded shadow-lg mb-3 px-3 pb-5 py-3">
      <h3 className="text-center">Dashboard</h3>
      <hr />

      <div className="row p-0">
        {users.map(e => {
          return (
            <div className="col-sm-4 p-0" key={e.id}>
              <Card
                first_name={e.first_name}
                last_name={e.last_name}
                email={e.email}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Dashboard;
