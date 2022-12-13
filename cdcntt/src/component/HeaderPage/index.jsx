import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, useNavigate } from "react-router-dom";
import { FcSearch } from "react-icons/fc";
import "bootstrap/dist/css/bootstrap.min.css";
import "./headerPage.css";
function HeaderPage() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };
  return (
    <Navbar className="Navbar" bg="light" expand="lg" fixed="top">
      <Container fluid>
        <Navbar.Brand href="/">
          <FcSearch />
          Finding Teacher{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <NavLink to="/" className="nav-link  ">
              Home
            </NavLink>
          </Nav>
          <Nav>
            {!user ? (
              <>
                <Button className="btn" variant="outline-primary">
                  <NavLink to="signup" className="nav-link  " id="signup">
                    {" "}
                    Sign up
                  </NavLink>
                </Button>
                <Button className="btn" variant="outline-primary">
                  <NavLink to="login" className="nav-link " id="login">
                    {" "}
                    Log in
                  </NavLink>
                </Button>
              </>
            ) : (
              <div style={{ display: "flex", alignItems: "center" }}>
                <div>
                  Welcome <strong>{user.username}</strong> ! {"  "}
                </div>
                <Button
                  style={{ margin: 0 }}
                  variant="outline-primary"
                  onClick={handleLogout}
                >
                  {" "}
                  Log out
                </Button>
              </div>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderPage;
