import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const Navs = () => {
  return (
    <div>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="#home">QuiEZ</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto nav-pills nav-fill">
              <NavLink
                as={Link}
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-link active text-white" : "nav-link"
                }
              >
                Home
              </NavLink>
              <NavLink
                as={Link}
                to="/about"
                className={({ isActive }) =>
                  isActive ? "nav-link active text-white" : "nav-link"
                }
              >
                About
              </NavLink>
              <NavLink
                as={Link}
                to="/quiz"
                className={({ isActive }) =>
                  isActive ? "nav-link active text-white" : "nav-link"
                }
              >
                Quiz
              </NavLink>
              {/* <Nav.Link as={Link} to="/admin">
                Admin
              </Nav.Link> */}
              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navs;
