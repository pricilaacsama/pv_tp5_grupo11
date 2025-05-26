import { useState } from "react";
import {
  Container,
  Form,
  Button,
  Row,
  Col,
  ListGroup,
  Card,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";


function NuevoAlumno({ alumnos, setAlumnos }) {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [curso, setCurso] = useState("");
  const [email, setEmail] = useState("");
  const [domicilio, setDomicilio] = useState("");
  const [telefono, setTelefono] = useState("");
  const [lu, setLu] = useState("");

  const navigate = useNavigate();


  const manejarSubmit = (e) => {
    e.preventDefault();
    const nuevoAlumno = {
      id: Date.now(),
      nombre,
      apellido,
      curso,
      lu,
      email,
      domicilio,
      telefono,
      estado: true,
    };
    setAlumnos([...alumnos, nuevoAlumno]);

      navigate("/lista");

    // Limpiar campos
    setNombre("");
    setApellido("");
    setCurso("");
    setLu("");
    setEmail("");
    setDomicilio("");
    setTelefono("");
  };

  return (
    <Container className="my-4">
      <h2 className="mb-4">Agregar Nuevo Alumno</h2>
      <Form onSubmit={manejarSubmit}>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Apellido</Form.Label>
              <Form.Control
                type="text"
                value={apellido}
                onChange={(e) => setApellido(e.target.value)}
                placeholder="Apellido"
                required
              />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Nombre"
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>LU</Form.Label>
              <Form.Control
                type="text"
                value={lu}
                onChange={(e) => setLu(e.target.value)}
                placeholder="Legajo Único"
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Curso</Form.Label>
              <Form.Control
                type="text"
                value={curso}
                onChange={(e) => setCurso(e.target.value)}
                placeholder="Curso"
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Domicilio</Form.Label>
              <Form.Control
                type="text"
                value={domicilio}
                onChange={(e) => setDomicilio(e.target.value)}
                placeholder="Domicilio"
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Teléfono</Form.Label>
              <Form.Control
                type="tel"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
                placeholder="Teléfono"
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Button variant="primary" type="submit">
          Agregar Alumno
        </Button>
      </Form>

    
    </Container>

  );
}

export default NuevoAlumno;
