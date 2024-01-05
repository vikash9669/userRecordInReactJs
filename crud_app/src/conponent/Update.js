import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { updateUser } from "../Schema";
import { useFormik } from "formik";
import { Link, useNavigate, useParams } from "react-router-dom";

const initialValues = {
  name: "",
  email: "",
  phone: "",
};

function Update() {
  const navigate = useNavigate();
  const { id } = useParams();

  const { values, setValues, errors, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: updateUser,
      onSubmit: (values) => {
        axios
          .put("http://localhost:3005/users/" + id, values)
          .then((res) => {
            console.log(res);
            navigate("/");
          })
          .catch((err) => console.log(err));
      },
    });

  useEffect(() => {
    axios
      .get("http://localhost:3005/users/" + id)
      .then((res) => setValues(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="d-flex w-100 vh-100 justify-content-center  align-items-center bg-light">
      <div className="w-50 border bg-shadow px-5 pt-3 pb-5 rouded">
        <h1>Add A User</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              className="form-control"
              placeholder="Name"
              value={values.name}
              onChange={handleChange}
              onblur={handleBlur}
            ></input>
            <p className="form-error" style={{color:'red'}}>{errors.name}</p>
          </div>

          <div className="mb-2">
            <label htmlFor="name">Email:</label>
            <input
              type="text"
              name="email"
              id="phone"
              className="form-control"
              placeholder="Email"
              value={values.email}
              onChange={handleChange}
              onblur={handleBlur}
            ></input>
            <p className="form-error" style={{color:'red'}}>{errors.email}</p>
          </div>

          <div className="mb-3">
            <label htmlFor="name">Phone:</label>
            <input
              type="text"
              name="phone"
              id="phone"
              className="form-control"
              placeholder="Phone"
              value={values.phone}
              onChange={handleChange}
              onblur={handleBlur}
            ></input>
            <p className="form-error" style={{color:'red'}}>{errors.phone}</p>
          </div>
          <button className="btn btn-primary me-2">Update</button>
          <Link to="/" className="btn btn-success ">
            Back
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Update;
