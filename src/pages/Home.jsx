import { Container, Card } from "react-bootstrap";
import "../App.css"; 

function Home() {
  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "90vh" }}>
      <Card
        className="text-center shadow-lg border-0 card-hover"
        style={{
          width: "40rem",
          borderRadius: "1.5rem",
          background: "linear-gradient(135deg, #fef9ff, #e0f7fa)",
          padding: "2rem",
        }}
      >
        <Card.Body>
          <Card.Title className="display-6 fw-bold text-dark mt-3">
            ¡Bienvenido/a a Programación Visual!
            <div style={{ fontSize: "3rem" }}>💻✨</div>
          </Card.Title>
          <Card.Text className="mt-4 fs-5 text-secondary">
            Esta aplicación está diseñada para <strong>gestionar alumnos y consultar</strong> información de manera clara.
          </Card.Text>
          <Card.Text className="mt-3 text-muted">
            Usamos <span className="fw-semibold text-primary">React Vite</span> y <span className="fw-semibold text-info">React Bootstrap</span> para crear interfaces modernas.
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Home;
