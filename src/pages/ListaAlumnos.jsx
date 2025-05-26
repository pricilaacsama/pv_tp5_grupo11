import {Container,Button,Row,Col,Card,} from "react-bootstrap";
import { Link } from "react-router-dom";

//falta botone de editar;

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
