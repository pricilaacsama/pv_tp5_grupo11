import React from "react";
import { Container, Card } from "react-bootstrap";

function Home() {
  return (
    <Container className="mt-5 d-flex justify-content-center">
      <Card style={{ width: "350rem", textAlign: "center" }} className="shadow">
        <Card.Body>
          <Card.Title className="display-5">¡Bienvenido/a!</Card.Title>
          <Card.Text className="lead mt-3">
            Esta es una aplicación para registrar y consultar información de alumnos.
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Home;
