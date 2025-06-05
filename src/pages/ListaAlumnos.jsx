import {Container,Button,Row,Col,Card,} from "react-bootstrap";
import { Link } from "react-router-dom";



function ListaAlumnos({ alumnos, eliminarAlumno }) {
    const activos = alumnos.filter((a) => a.estado);



  return (
    <Container className="my-4">
      <h2 className="text-center mb-4">Lista de Alumnos</h2>
      {activos.length === 0 ? (
        <p className="text-center">No hay alumnos aún.</p>
      ) : (
        <Row>
          {activos.map((alumno, index) => (
            <Col key={alumno.id} md={4} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>
                    {alumno.nombre} {alumno.apellido}
                  </Card.Title>
                  <div className="d-flex justify-content-between">
                    <Button variant="danger" onClick={() => eliminarAlumno(alumno.id)}>Eliminar</Button>
                    <Button variant="success" as={Link} to={`/editar/${alumno.id}`}>Modificar</Button>
                    <Button as={Link} to={`/alumnos/${alumno.id}`} variant="primary">Ver Detalles</Button>
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
