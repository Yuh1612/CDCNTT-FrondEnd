import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from 'react-router-dom';
import { FcSearch } from 'react-icons/fc';
import { IoIosLogOut } from 'react-icons/io';
import { IoSettingsOutline, IoNotificationsOutline } from 'react-icons/io5';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./headerPageTeacher.css";
function HeaderPageTeacher() {
  return (

    <Navbar className='Navbar' bg="light" expand="lg" fixed='top'>
      <Container fluid>
        <Navbar.Brand href="/"><FcSearch />Finding Teacher </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            navbarScroll>
            <NavLink to="/" className='nav-link  '>Home</NavLink>
            <NavLink to="teacherprofile" className='nav-link  '>Profile</NavLink>
            <NavLink to="#" className='nav-link  ' >#</NavLink>

          </Nav>
   
            <Nav>
            <Navbar.Collapse id="navbar-dark-example">
              <Nav className='NavDropDown'>
                <NavDropdown
                  id="NavMultipleDropDownNotification"
                  title={ <IoNotificationsOutline className='IconNotification' />}
                  menuVariant="light"
                >
                  <NavDropdown.Item href="#" className='DropDownNotification'><IoSettingsOutline /> Setting </NavDropdown.Item>
                  <NavDropdown.Divider/>
                  <NavDropdown.Item href="/" className='DropDownNotification'><IoIosLogOut /> Log Out</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Nav>
    
          <Nav>
            <Navbar.Collapse id="navbar-dark-example">
              <Nav className='NavDropDown'>
                <NavDropdown
                  id="NavMultipleDropDown"
                  title={<div>
                    <img className="UserImage" src="https://lh3.googleusercontent.com/a/ALm5wu0dXL3X6-zphMIJINjtnocmJfYwlJy2itj0Anqp_Q=s96-c" alt='UserImage' />
                  </div>}
                  menuVariant="light"
                >
                  <NavDropdown.Item href="#" className='DropDown'><IoSettingsOutline /> Setting </NavDropdown.Item>
                  <NavDropdown.Item href="/" className='DropDown'><IoIosLogOut /> Log Out</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar >


  );
}

export default HeaderPageTeacher