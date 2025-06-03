import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

// Importá las imágenes desde la carpeta src/components/img
import img1 from '../components/img/img1.jpg';
import img2 from '../components/img/img2.jpg';
import img3 from '../components/img/img3.jpg';
const integrantes = [
  {
    nombre: 'Juan Lamas',
    descripcion: 'Líder del grupo.',
    foto: img3,
  },
  {
    nombre: 'Priscila Acsama',
    descripcion: 'Organizador de Proyectos.',
    foto: img1,
  },
  {
    nombre: 'Delia Maribbel Cusipuma',
    descripcion: 'Dar formato al Proyecto.',
    foto: img2,
  },
];

function Acerca() {
  return (
    <>
      <h2 className="text-center mt-4">Acerca del Grupo 11</h2>
      <p className="text-center mb-4">Este proyecto fue realizado por el Grupo 11, conformado por:</p>
      <Carousel>
        {integrantes.map((persona, index) => (
          <Carousel.Item key={index} interval={1500}>
            <div className="d-flex justify-content-center">
              <img
                className="d-block"
                src={persona.foto}
                alt={persona.nombre}
                style={{
                  width: '500px',
                  height: '500px',
                  objectFit: 'cover',
                  marginBottom: '1rem',
                }}
              />
            </div>
            <Carousel.Caption>
              <h3>{persona.nombre}</h3>
              <p>{persona.descripcion}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
}

export default Acerca;
