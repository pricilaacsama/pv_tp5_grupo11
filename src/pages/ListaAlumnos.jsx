import Table from 'react-bootstrap/Table';

function ListaAlumnos({ alumnos }) {
  return (
    <div>
      <h2 className="mt-4 mb-3 text-center">Lista de Alumnos</h2>
      {alumnos.length === 0 ? (
        <p className="text-center">No hay alumnos aún.</p>
      ) : (
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Curso</th>
              <th>Email</th>
              <th>Domicilio</th>
              <th>Teléfono</th>
            </tr>
          </thead>
          <tbody>
            {alumnos.map((alumno, index) => (
              <tr key={alumno.id}>
                <td>{index + 1}</td>
                <td>{alumno.nombre}</td>
                <td>{alumno.apellido}</td>
                <td>{alumno.curso}</td>
                <td>{alumno.email}</td>
                <td>{alumno.domicilio}</td>
                <td>{alumno.telefono}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
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
