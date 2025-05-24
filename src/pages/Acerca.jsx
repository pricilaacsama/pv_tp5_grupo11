import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Acerca() {
  const integrantes = [
    {
      nombre: 'Juan Lamas',
      descripcion: 'Estudiante.',
      foto: 'https://i.imgur.com/0y8Ftya.jpg', // Reemplazar por imagen real si se desea
    },
    {
      nombre: 'Priscila',
      descripcion: 'estudiante.',
      foto: 'https://i.imgur.com/0y8Ftya.jpg',
    },
    {
      nombre: 'Delia Cusipuma',
      descripcion: 'Estudiante.',
      foto: 'https://i.imgur.com/0y8Ftya.jpg',
    },
  ];

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">Acerca del Grupo 11</h2>
      <p className="text-center">Este proyecto fue realizado por el Grupo 11, conformado por:</p>
      <Row>
        {integrantes.map((persona, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card className="h-100 text-center">
              <Card.Img variant="top" src={persona.foto} alt={persona.nombre} />
              <Card.Body>
                <Card.Title>{persona.nombre}</Card.Title>
                <Card.Text>{persona.descripcion}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Acerca;
