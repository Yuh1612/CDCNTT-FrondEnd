import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./headerPage.css";
import logo from "../../assets/logo.jpg";
function HeaderPage() {
  return (
    <Navbar className="Navbar" expand="lg" fixed="top">
      <Container fluid>
        <Navbar.Brand href="/" className="logo-container">
          <img src={logo} alt="logo" className="logo" />
          Finding Teacher{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="navbar-button">
          <Nav>
            <Button className="btn" variant="outline-primary">
              <NavLink to="signup" className="nav-link" id="signup">
                {" "}
                Sign up
              </NavLink>
            </Button>
            <Button className="btn" variant="outline-primary">
              <NavLink to="login" className="nav-link" id="login">
                {" "}
                Sign in
              </NavLink>
            </Button>
            <Button className="btn" variant="outline-primary">
              <NavLink to="infoGV" className="nav-link" id="login">
                {" "}
                Teacher
              </NavLink>
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderPage;
