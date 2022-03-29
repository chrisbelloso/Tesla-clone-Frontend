import { Navbar, Container, Nav, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './NavBar.css';

const NavBar = () => {
    return (
        <div>
          <Navbar bg="transparent" expand="lg">
  <Container>
    <Navbar.Brand href="#home">TESLA</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#ModelSDetails">Model S</Nav.Link>
        <Nav.Link href="#Model3Details">Model 3</Nav.Link>
        <Nav.Link href="#ModelXDetails">Model X</Nav.Link>
        <Nav.Link href="#ModelYDetails">Model Y</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    )
}

export default NavBar;


