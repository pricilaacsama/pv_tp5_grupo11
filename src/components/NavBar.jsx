import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <Navbar expand="lg" className="custom-navbar" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/" className="custom-brand">
          🧑‍💻 Programacion Visual
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto custom-nav-links">
            <Nav.Link as={Link} to="/" className="nav-link-emoji">
              🏠 Inicio
            </Nav.Link>
            <Nav.Link as={Link} to="/lista" className="nav-link-emoji">
              📋 Lista de alumnos
            </Nav.Link>
            <Nav.Link as={Link} to="/nuevo" className="nav-link-emoji">
              ➕ Nuevo alumno
            </Nav.Link>
            <Nav.Link as={Link} to="/acerca" className="nav-link-emoji">
              👨‍👩‍👧‍👦 Acerca del grupo
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;


