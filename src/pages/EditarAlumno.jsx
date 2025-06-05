import {Container,Button,Row,Col,Form,Card,Stack} from "react-bootstrap";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../App.css";

import validarAlumno from "../components/validarAlumno";

function EditarAlumno ({ alumnos,onModificar }) {
    
    const {id} = useParams();
    const navegador = useNavigate();
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
    const validacion = validarAlumno(alumnoModificado,alumnos);
        if(validacion[0]){
    onModificar(alumnos.map(a=> {

        if(a.id==alumnoModificado.id){
            console.log(a.id)
            return {...a, ...alumnoModificado};
        }
            return a;
    }))

        navegador("/lista");
  }
    else{
      alert(validacion[1])
      console.log(validacion[1])
    }
    }

    return (
       <Container className="my-5 d-flex justify-content-center">
      <Card className="p-4 shadow-lg border-0 rounded-4 form-editar" style={{ maxWidth: "700px", width: "100%" }}>
        <Card.Body>
          <h2 className="text-center text-dark mb-4"> ✏️Editar Alumno</h2>

          <Form onSubmit={guardarCambios}>
            <Row className="mb-3">
              <Col md={6}>
                <Form.Label>👤 <strong>Apellido</strong></Form.Label>
                <Form.Control
                  type="text"
                  value={apellido}
                  onChange={(e) => setApellido(e.target.value)}
                  placeholder="Ingrese su apellido..."
                  required
                />
              </Col>
              <Col md={6}>
                <Form.Label>👤 <strong>Nombre</strong></Form.Label>
                <Form.Control
                  type="text"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  placeholder="Ingrese su nombre..."
                  required
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={6}>
                <Form.Label>🆔 <strong>LU</strong></Form.Label>
                <Form.Control
                  type="text"
                  value={lu}
                  onChange={(e) => setLu(e.target.value)}
                  placeholder="Ingrese su LU..."
                  required
                />
              </Col>
              <Col md={6}>
                <Form.Label>📚 <strong>Curso</strong></Form.Label>
                <Form.Control
                  type="text"
                  value={curso}
                  onChange={(e) => setCurso(e.target.value)}
                  placeholder="Ingrese su curso..."
                  required
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={6}>
                <Form.Label>📧 <strong>Email</strong></Form.Label>
                <Form.Control
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Ingrese su email..."
                  required
                />
              </Col>
              <Col md={6}>
                <Form.Label>🏠 <strong>Domicilio</strong></Form.Label>
                <Form.Control
                  type="text"
                  value={domicilio}
                  onChange={(e) => setDomicilio(e.target.value)}
                  placeholder="Ingrese su domicilio..."
                  required
                />
              </Col>
            </Row>

            <Row className="mb-4">
              <Col md={6}>
                <Form.Label>📞 <strong>Telefono</strong></Form.Label>
                <Form.Control
                  type="tel"
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                  placeholder="Ingrese su teléfono..."
                  required
                />
              </Col>
            </Row>

            <div className="text-center">
              <Button type="submit" size="lg" variant="warning" className="px-4 w-100 w-md-auto">
                💾<strong>Guardar Cambios</strong> 
              </Button>
            
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
    );
}

export default EditarAlumno