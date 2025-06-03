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
    <Container className="my-5">
      <Card className="shadow-lg rounded-4 border-0">
        <Card.Header className="bg-info text-white text-center rounded-top-4">
          <h2 className="mb-0">👩‍🎓 Detalle del Alumno</h2>
        </Card.Header>

        <ListGroup variant="flush" className="fs-5">
          <ListGroup.Item>
            🧑‍🏫 <strong>Nombre y Apellido:</strong> {alumno.nombre} {alumno.apellido}
          </ListGroup.Item>
          <ListGroup.Item>
            📘 <strong>Curso:</strong> {alumno.curso}
          </ListGroup.Item>
          <ListGroup.Item>
            🆔 <strong>LU:</strong> {alumno.lu}
          </ListGroup.Item>
          <ListGroup.Item>
            📧 <strong>Email:</strong> {alumno.email}
          </ListGroup.Item>
          <ListGroup.Item>
            🏠 <strong>Domicilio:</strong> {alumno.domicilio}
          </ListGroup.Item>
          <ListGroup.Item>
            📞 <strong>Teléfono:</strong> {alumno.telefono}
          </ListGroup.Item>
          <ListGroup.Item>
            🔄 <strong>Estado:</strong>{" "}
            {alumno.estado ? "✅ Activo" : "❌ Inactivo"}
          </ListGroup.Item>
        </ListGroup>

        <Card.Footer className="text-center bg-light rounded-bottom-4">
          <Button variant="outline-secondary" onClick={() => navigate("/lista")}>
            🔙 Volver a la lista
          </Button>
        </Card.Footer>
      </Card>
    </Container>
  );
}

export default DetalleAlumnos;
