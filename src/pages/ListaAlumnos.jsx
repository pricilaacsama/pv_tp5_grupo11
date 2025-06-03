import {Container,Button,Row,Col,Card,} from "react-bootstrap";
import { Link } from "react-router-dom";
import "../App.css";


function ListaAlumnos({ alumnos, eliminarAlumno }) {
    const activos = alumnos.filter((a) => a.estado);



  return (
    <Container className="my-5">
      <h2 className="text-center mb-4 display-6 fw-bold text-dark">
        👩‍🎓 Lista de Alumnos 👨‍🎓
      </h2>

      {activos.length === 0 ? (
        <p className="text-center fs-5 text-muted">No hay alumnos aún.</p>
      ) : (
        <Row>
          {activos.map((alumno) => (
            <Col key={alumno.id} md={6} lg={4} className="mb-4">
              <Card className="shadow-sm border-0 card-hover h-100">
                <Card.Body>
                  <Card.Title className="fs-5 fw-semibold text-dark mb-3 text-center">
                    📘 {alumno.nombre} {alumno.apellido}
                  </Card.Title>
                  <div className="d-flex flex-wrap gap-2 justify-content-center">
                    <Button variant="outline-danger" size="sm" onClick={() => eliminarAlumno(alumno.id)}>
                      Eliminar
                    </Button>
                    <Button variant="outline-success" size="sm" as={Link} to={`/editar/${alumno.id}`}>
                      Modificar
                    </Button>
                    <Button variant="outline-primary" size="sm" as={Link} to={`/alumnos/${alumno.id}`}>
                      Detalles
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
}

export default ListaAlumnos;



/*function ListaAlumnos({ alumnos }) {
  return (
    <div>
      <h2>Lista de Alumnos</h2>
      {alumnos.length === 0 ? (
        <p>No hay alumnos aún.</p>
      ) : (
        <ul>
          {alumnos.map((alumno, i) => (
            <li key={i}>
              <strong>{alumno.nombre} {alumno.apellido}</strong><br />
              <span>Curso: {alumno.curso}</span><br />
              <span>Email: {alumno.email}</span><br />
              <span>Domicilio: {alumno.domicilio}</span><br />
              <span>Teléfono: {alumno.telefono}</span><br />
              <hr />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ListaAlumnos;*/
