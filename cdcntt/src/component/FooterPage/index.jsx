import React from "react";
import { Navbar, NavLink } from "react-bootstrap";
import {
  TiSocialYoutube,
  TiSocialTwitter,
  TiSocialFacebookCircular,
} from "react-icons/ti";
import { FaSchool } from "react-icons/fa";
import "./index.css";
function FooterPage() {
  return (
    <div className="row">
      <div className="col-4">
        <h5>FOR STUDENTS</h5>
        <NavLink to="#" className="nav-link  ">
          {" "}
          Finding English teacher{" "}
        </NavLink>
        <NavLink to="#" className="nav-link  ">
          {" "}
          Contact to teacher you want
        </NavLink>
        <NavLink to="#" className="nav-link  ">
          {" "}
          Questions and Answers
        </NavLink>
        <NavLink to="#" className="nav-link  ">
          {" "}
          Rating teacher
        </NavLink>
      </div>
      <div className="col-4">
        <h5>FOR TUTORS</h5>
        <NavLink to="/" className="nav-link  ">
          {" "}
          Connect to your students
        </NavLink>
        <NavLink to="#" className="nav-link  ">
          {" "}
          Public your CV
        </NavLink>
        <NavLink to="#" className="nav-link  ">
          {" "}
          Find job easier{" "}
        </NavLink>
      </div>
      <div className="col-4">
        <h5>CONTACT US </h5>
        <NavLink to="#" className="nav-link  ">
          <TiSocialFacebookCircular />
          Facebook
        </NavLink>
        <NavLink to="#" className="nav-link  ">
          <TiSocialTwitter />
          Twitter
        </NavLink>
        <NavLink to="#" className="nav-link  ">
          <TiSocialYoutube />
          Youtube
        </NavLink>
        <NavLink to="#" className="nav-link  ">
          <FaSchool />
          Lien Chieu District, Da Nang City
        </NavLink>
      </div>
    </div>
  );
}

export default FooterPage;
