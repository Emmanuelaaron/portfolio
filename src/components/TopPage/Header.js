import React from 'react';
import {
  Navbar,
  Container,
  Nav,
} from 'react-bootstrap';

const Header = () => (
  <Navbar expand="lg">
    <Container fluid>
      <Navbar.Brand href="#" className="d-md-none">Welcome</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll" className="justify-content-center align-items-center">
        <Nav
          className="me-au my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link href="#portfolio" className="p-1">Portfolio</Nav.Link>
          <Nav.Link href="#about" className="p-1">About</Nav.Link>
          <Nav.Link href="#contact" className="p-1">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Header;
