import React from "react";
import { NavLink } from "react-router-dom";
import Form from "react-bootstrap/Form";
import "./index.css";
function LogIn() {
  return (
    <div className="row" id="Login-form-container">
      <div className="col-3"></div>
      <div className="col-6" id="FormLoginDiv">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Login</h3>
            <div className="form-group1">
              <label className="text">Username</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Enter username"
              />
            </div>
            <div className="form-group1">
              <label className="text">Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
              />
            </div>
            <Form.Group className="mb-3" id="Genderradiobutton">
              <Form.Label>Log in as: </Form.Label>
              <Form.Check inline label="Teacher" name="group1" type="radio" />
              <Form.Check inline label="Student" name="group1" type="radio" />
            </Form.Group>
            <div>
              <p>
                <NavLink to="/signup" className="nav-link  ">
                  Haven't had account yet? <i>Sign up now </i>
                </NavLink>
              </p>
            </div>
            <div className="gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Log in
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="col-3"></div>
    </div>
  );
}
export default LogIn;
