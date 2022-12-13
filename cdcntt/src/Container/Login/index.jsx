import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import "./index.css";
import api from "../../api/ApiFunction";

function LogIn() {
  const [error, setError] = React.useState(null);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const isTeacher = e.target.isTeacher.value;
    const username = e.target.username.value;
    const password = e.target.password.value;
    if (username === "" || password === "") {
      setError("Please fill in all the fields");
      return;
    }
    if (isTeacher === "") {
      setError("Please choose your role");
      return;
    }
    if (isTeacher === "true") {
      api.loginWithTeacher(username, password).then((res) => {
        console.log(res);
        if (res.errCode === 0) {
          localStorage.setItem("user", res);
          navigate("/");
        } else {
          setError("Wrong username or password");
        }
      });
    } else {
      api.loginWithStudent(username, password).then((res) => {
        if (res.errCode === 0) {
          localStorage.setItem("user", res);

          navigate("/");
        } else {
          setError("Wrong username or password");
        }
      });
    }
  };

  return (
    <div className="row" id="Login-form-container">
      <div className="col-3"></div>
      <div className="col-6" id="FormLoginDiv">
        <form className="Auth-form" onSubmit={handleSubmit}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Login</h3>
            <div className="form-group1">
              <label className="text">Username</label>
              <input
                type="text"
                className="form-control mt-1"
                name="username"
                required
                placeholder="Enter username"
              />
            </div>
            <div className="form-group1">
              <label className="text">Password</label>
              <input
                type="password"
                className="form-control mt-1"
                name="password"
                required
                placeholder="Enter password"
              />
            </div>
            <Form.Group className="mb-3" id="Genderradiobutton">
              <Form.Label>Log in as: </Form.Label>
              <Form.Check
                inline
                label="Teacher"
                name="isTeacher"
                type="radio"
                value="true"
                defaultChecked="true"
              />
              <Form.Check
                inline
                label="Student"
                name="isTeacher"
                type="radio"
                value="false"
              />
            </Form.Group>
            {error && <div className="alert alert-danger">{error}</div>}
            <div className="gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Log in
              </button>
            </div>
            <div>
              <p>
                <NavLink to="/signup" className="nav-link mt-3">
                  Haven't had account yet? <i>Sign up now </i>
                </NavLink>
              </p>
            </div>
          </div>
        </form>
      </div>
      <div className="col-3"></div>
    </div>
  );
}
export default LogIn;
