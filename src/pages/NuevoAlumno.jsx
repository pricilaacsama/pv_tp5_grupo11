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
import "../App.css";

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
    <Container className="my-5">
      <Card className="p-4 shadow-lg form-card">
        <h2 className="text-center mb-4 text-dark fw-bold">
          📋 Agregar Nuevo Alumno
        </h2>
        <Form onSubmit={manejarSubmit}>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>👤 <strong>Apellido</strong></Form.Label>
                <Form.Control
                  type="text"
                  value={apellido}
                  onChange={(e) => setApellido(e.target.value)}
                  placeholder="Ingrese su apellido..."
                  className="rounded-input"
                  required
                />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>👤 <strong>Nombre</strong></Form.Label>
                <Form.Control
                  type="text"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  placeholder="Ingrese su nombre..."
                  className="rounded-input"
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>🆔 <strong>LU</strong></Form.Label>
                <Form.Control
                  type="text"
                  value={lu}
                  onChange={(e) => setLu(e.target.value)}
                  placeholder="Ingrese su LU..."
                  className="rounded-input"
                  required
                />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>📚 <strong>Curso</strong></Form.Label>
                <Form.Control
                  type="text"
                  value={curso}
                  onChange={(e) => setCurso(e.target.value)}
                  placeholder="Ingrese su curso..."
                  className="rounded-input"
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>📧 <strong>Email</strong></Form.Label>
                <Form.Control
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Ingres su correo... Ej: ejemplo@correo.com"
                  className="rounded-input"
                  required
                />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>🏠 <strong>Domicilio</strong></Form.Label>
                <Form.Control
                  type="text"
                  value={domicilio}
                  onChange={(e) => setDomicilio(e.target.value)}
                  placeholder="Ingrese su domicilio"
                  className="rounded-input"
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Form.Group className="mb-4">
                <Form.Label>📞 <strong>Telefono</strong></Form.Label>
                <Form.Control
                  type="tel"
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                  placeholder="Ingrese su numero de telefono"
                  className="rounded-input"
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <div className="text-center">
            <Button variant="success" type="submit" className="px-4 py-2 rounded-pill">
              <strong>Agregar Alumno</strong>
            </Button>
          </div>
        </Form>
      </Card>
    </Container>

  );
}

export default NuevoAlumno;
