import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function Read() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3005/users/" + id)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));  
  }, []);
  return (
    <div className="d-flex w-100 vh-100 justify-content-center  align-items-center bg-light">
      <div className="w-50 border bg-shadow px-5 pt-3 pb-5 rouded">
        <h1>User details</h1>

        <div className="mb-2">
          <strong>Name: {data.name}</strong>
        </div>

        <div className="mb-2">
          <strong>Email: {data.email}</strong>
        </div>

        <div className="mb-3">
          <strong>Phone: {data.phone}</strong>
        </div>
        <Link to={`/Update/${id}`} className="btn btn-primary me-2">
          Edit
        </Link>
        <Link to="/" className="btn btn-success ">
          Back
        </Link>
      </div>
    </div>
  );
}

export default Read;
