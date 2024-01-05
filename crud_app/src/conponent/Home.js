import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3005/users")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  console.log(data);
  const handleDelete = (id) => {
    console.log("hello");
    const confirm = window.confirm("Are you sure you want to delete?");
    if (confirm) {
      axios
        .delete("http://localhost:3005/users/" + id)
        .then((res) => {
          window.location.reload();
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div className="d-flex flex-column justify-content-center align-items-center bg-light vh-100">
      <div className="p-4 w-75  rounded bg-white border shadow">
        <h1>All Users</h1>
        <div className="d-flex justify-content-end">
          <Link to="/Create" className="btn btn-primary">
            Add +
          </Link>
        </div>

        <table className="table table-stipend">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {data.length &&
              data.map((d, i) => (
                <tr key={i}>
                  <td>{i+1}</td>
                  <td>{d.name}</td>
                  <td>{d.email}</td>
                  <td>{d.phone}</td>
                  <Link
                    to={`/Read/${d.id}`}
                    className="btn btn-sm btn-success me-2"
                  >
                    Read
                  </Link>
                  <Link
                    to={`/Update/${d.id}`}
                    className="btn btn-sm btn-info me-2"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={(e) => handleDelete(d.id)}
                    className="btn btn-sm btn-danger me-2"
                  >
                    Delete
                  </button>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
