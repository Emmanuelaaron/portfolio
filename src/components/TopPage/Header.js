import React from 'react';
import {
  Navbar,
  Container,
  Nav,
} from 'react-bootstrap';

const Header = () => (
  <Navbar expand="lg" className="header">
    <Container fluid>
      <Navbar.Brand href="#" className="d-md-none">Welcome</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll" className="justify-content-center">
        <Nav
          className="me-au my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link href="#action1">Portfolio</Nav.Link>
          <Nav.Link href="#action2">About</Nav.Link>
          <Nav.Link href="#action2">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Header;
