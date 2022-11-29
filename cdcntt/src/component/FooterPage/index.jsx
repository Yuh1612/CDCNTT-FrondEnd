import React from "react";
import { Navbar, NavLink } from "react-bootstrap";
import { TiSocialYoutube, TiSocialTwitter, TiSocialFacebookCircular } from "react-icons/ti";
import './index.css'
function FooterPage() {
  return (
      <div class='row' >
      <div className="col-4">
        <Navbar.Brand href="/"><h5>Finding Teacher </h5></Navbar.Brand>
      </div>
      <div className="col-4">
        <h5>For You</h5>
        <NavLink to="/" className='nav-link  '> Home
        </NavLink>
        <NavLink to="#" className='nav-link  '> Finding Teacher
        </NavLink>
      </div>
      <div className="col-4">
        <h5>Contact us</h5>
        <NavLink to="#" className='nav-link  '>
          <TiSocialFacebookCircular />Facebook
        </NavLink>
        <NavLink to="#" className='nav-link  '>
          <TiSocialTwitter />Twitter
        </NavLink>
        <NavLink to="#" className='nav-link  '><TiSocialYoutube />
          Youtube
        </NavLink>
      </div>
    </div>

    
  );
}

export default FooterPage