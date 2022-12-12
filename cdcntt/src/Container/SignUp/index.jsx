import React from "react";
import "./index.css";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import api from "../../api/ApiFunction";

function SignUp() {
  const [role, setRole] = useState("teacherRole");
  const handleSubmit = async (e) => {
    e.preventDefault();
    let username = e.target.userName.value || "";
    let password = e.target.password.value || "";
    let firstname = e.target.firstName.value || "";
    let lastname = e.target.lastName.value || "";
    let photo = e.target.photo.value || "";
    let phone = e.target.phone.value || "";
    let address = e.target.address.value || "";
    let experience = e.target.experience.value || "";
    let degree = e.target.degree.value || "";
    let certificate = e.target.certificate.value || "";

    console.log(username);
    console.log(password);
    console.log(firstname);
    console.log(lastname);
    console.log(photo);
    console.log(phone);
    console.log(address);
    console.log(experience);
    console.log(certificate);

    if (role === "teacherRole") {
      console.log(role);
      await api.createTeacher(
        username,
        password,
        firstname,
        lastname,
        photo,
        phone,
        address,
        experience,
        degree,
        certificate
      );
    } else {
      console.log(role);

      await api.createStudent(username, password, firstname, lastname, phone);
    }
  };

  return (
    <div className="row" id="Signup-form-container">
      <div className="col-3"></div>
      <div className="col-6">
        <form className="Auth-form" onSubmit={handleSubmit}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign Up</h3>
            <div className="form-group mt-3">
              <label>First Name</label>
              <input
                required
                name="firstName"
                type="text"
                className="form-control mt-1"
                placeholder="First Name"
              />
            </div>
            <div className="form-group mt-3">
              <label>Last Name</label>
              <input
                required
                name="lastName"
                type="text"
                className="form-control mt-1"
                placeholder="Last name"
              />
            </div>
            <div className="form-group mt-3">
              <label className="text">Username</label>
              <input
                required
                name="userName"
                type="text"
                className="form-control mt-1"
                placeholder="Username"
              />
            </div>
            <div className="form-group mt-3">
              <label className="text">Password</label>
              <input
                required
                name="password"
                type="password"
                className="form-control mt-1"
                placeholder="Password"
              />
            </div>
            {role === "teacherRole" && (
              <>
                <div className="form-group mt-3">
                  <label className="text">Phone</label>
                  <input
                    required
                    name="phone"
                    type="text"
                    className="form-control mt-1"
                    placeholder="Phone"
                  />
                </div>
                <div className="form-group mt-3">
                  <label className="text">Photo</label>
                  <input
                    required
                    name="photo"
                    type="text"
                    className="form-control mt-1"
                    placeholder="Link Photo"
                  />
                </div>
                <div className="form-group mt-3">
                  <label className="text">Address</label>
                  <input
                    required
                    name="address"
                    type="text"
                    className="form-control mt-1"
                    placeholder="Address"
                  />
                </div>
                <div className="form-group mt-3">
                  <label className="text">Experience</label>
                  <input
                    required
                    name="experience"
                    type="text"
                    className="form-control mt-1"
                    placeholder="Experience"
                  />
                </div>
                <div className="form-group mt-3">
                  <label className="text">Degree</label>
                  <input
                    required
                    name="degree"
                    type="text"
                    className="form-control mt-1"
                    placeholder="Degree"
                  />
                </div>
                <div className="form-group mt-3">
                  <label className="text">Certificate</label>
                  <input
                    required
                    name="certificate"
                    type="text"
                    className="form-control mt-1"
                    placeholder="Certificate"
                  />
                </div>
              </>
            )}

            <Form.Group className="mb-3" id="Genderradiobutton">
              <Form.Label>Sign up as: </Form.Label>
              <Form.Check
                inline
                defaultChecked
                label="Teacher"
                name="group1"
                type="radio"
                value="teacherRole"
                onClick={(e) => setRole(e.target.value)}
              />
              <Form.Check
                inline
                label="Student"
                name="group1"
                type="radio"
                value="studentRole"
                onClick={(e) => setRole(e.target.value)}
              />
            </Form.Group>
            <div className="gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="col-3"></div>
    </div>
  );
}
export default SignUp;
