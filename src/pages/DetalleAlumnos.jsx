import React from "react";
import { useParams } from "react-router-dom";
import { Container, Card, ListGroup, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function DetalleAlumnos({ alumnos }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const alumno = alumnos.find((a) => a.id.toString() === id);

  if (!alumno) {
    return (
      <Container className="my-4">
        <h2>Alumno no encontrado</h2>
        <Button variant="primary" onClick={() => navigate("/lista")}>
          Volver a la lista
        </Button>
      </Container>
    );
  }

  return (
    <Container className="my-4">
      <Card>
        <Card.Header>
          <h2>Detalle del Alumno</h2>
        </Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <strong>Nombre:</strong> {alumno.nombre} {alumno.apellido}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Curso:</strong> {alumno.curso}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>LU:</strong> {alumno.lu}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Email:</strong> {alumno.email}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Domicilio:</strong> {alumno.domicilio}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Teléfono:</strong> {alumno.telefono}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Estado:</strong> {alumno.estado ? "Activo" : "Inactivo"}
          </ListGroup.Item>
        </ListGroup>
        <Card.Footer>
          <Button variant="secondary" onClick={() => navigate("/lista")}>
            Volver a la lista
          </Button>
        </Card.Footer>
      </Card>
    </Container>
  );
}

export default DetalleAlumnos;
