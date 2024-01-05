import React from "react";
import axios from "axios";
import { useFormik } from "formik";
import { addUser } from "../Schema";
import { Link, useNavigate } from "react-router-dom";

const initialValues = {
  name: "",
  email: "",
  phone: "",
};
function Create() {
  const navigate = useNavigate();
  const { values, errors, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema : addUser,
    onSubmit: (values) => {
      console.log(values);
      axios
        .post("http://localhost:3005/users", values)
        .then((res) => {
          console.log(res);
          navigate("/");
        })
        .catch((err) => console.log(err));
    },
  });
  console.log(errors);
 
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
              onBlur={handleBlur}
            ></input>
            <p className="form-error" style={{color:'red'}}>{errors.name}</p>
          </div>

          <div className="mb-2">
            <label htmlFor="name">Email:</label>
            <input
              type="text"
              name="email"
              id="email"
              className="form-control"
              placeholder="Email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
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
              onBlur={handleBlur}
            ></input>
            <p className="form-error " style={{color:'red'}}>{errors.phone}</p>
          </div>
          <button className="btn btn-primary me-2">Add</button>
          <Link to="/" className="btn btn-success ">
            Back
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Create;
