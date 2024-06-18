import { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";

function UserList() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8090/api/users")
      .then((response) => {
        if (response.status === 200) {
          setUsers(response.data);
          setMessage("");
        } else if (response.status === 204) {
          setMessage("No hay usuarios registrados.");
        }
      })
      .catch((error) => {
        if (error.response && error.response.status === 500) {
          setError("Error de comunicación con el servidor.");
        } else {
          setError("Error desconocido.");
        }
      });
  }, []);

  if (error) {
    return (
      <div className="container">
        <h1 className="text-center my-4">Bienvenido a la lista de usuarios</h1>
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      </div>
    );
  }

  if (message) {
    return (
      <div className="container">
        <h1 className="text-center my-4">Bienvenido a la lista de usuarios</h1>
        <div className="alert alert-info" role="alert">
          {message}
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <h1 className="text-center my-4">Bienvenido a la lista de usuarios</h1>
      <div className="row justify-content-center">
        {users.map((user) => (
          <div className="col-md-6" key={user.id}>
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">{user.name}</h5>
                <p className="card-text">{user.email}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserList;
