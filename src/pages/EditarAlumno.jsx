import {Container,Button,Row,Col,Form,} from "react-bootstrap";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

function EditarAlumno ({ alumnos,onModificar }) {
    
    const {id} = useParams();
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

    const [nombre, setNombre] = useState(alumno.nombre);
    const [apellido, setApellido] = useState(alumno.apellido);
    const [curso, setCurso] = useState(alumno.curso);
    const [email, setEmail] = useState(alumno.email);
    const [domicilio, setDomicilio] = useState(alumno.domicilio);
    const [telefono, setTelefono] = useState(alumno.telefono);
    const [lu, setLu] = useState(alumno.lu);
    const [idNum,setIdNum] = useState(alumno.id)
    const [estado,setEstado] = useState(alumno.estado)

    const guardarCambios =(event) => {
        event.preventDefault();
        const alumnoModificado = {
        id: idNum,
        nombre,
        apellido,
        curso,
        lu,
        email,
        domicilio,
        telefono,
        estado,
    };

    onModificar(alumnos.map(a=> {
        if(a.id==alumnoModificado.id){
            console.log(a.id)
            return {...a, ...alumnoModificado};
        }
            return a;
    }))

        console.log("Guardar")
    }

    return (
       <Container className="my-4">
      <h2 className="mb-4">Modificar Datos del Alumno</h2>
      <Form onSubmit={guardarCambios}>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Apellido</Form.Label>
              <Form.Control
                type="text"
                value={apellido}
                onChange={(e) =>setApellido(e.target.value)}
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
          Guardar Cambios
        </Button>
      </Form>

    
    </Container>
    )
}

export default EditarAlumno