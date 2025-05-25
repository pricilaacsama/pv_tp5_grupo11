import { useState } from "react";

function NuevoAlumno({ alumnos, setAlumnos }) {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [curso, setCurso] = useState("");
  const [email, setEmail] = useState("");
  const [domicilio, setDomicilio] = useState("");
  const [telefono, setTelefono] = useState("");

  const manejarSubmit = (e) => {
    e.preventDefault();
    const nuevoAlumno = {
      id: Date.now(),
      nombre,
      apellido,
      curso,
      email,
      domicilio,
      telefono,
    };
    setAlumnos([...alumnos, nuevoAlumno]);

    // Limpiar campos
    setNombre("");
    setApellido("");
    setCurso("");
    setEmail("");
    setDomicilio("");
    setTelefono("");
  };

  return (
    <div>
      <h2>Agregar Nuevo Alumno</h2>
      <form onSubmit={manejarSubmit}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
            placeholder="Nombre"
          />
        </div>
        <div>
          <label>Apellido:</label>
          <input
            type="text"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
            required
            placeholder="Apellido"
          />
        </div>
        <div>
          <label>Curso:</label>
          <input
            type="text"
            value={curso}
            onChange={(e) => setCurso(e.target.value)}
            required
            placeholder="Curso"
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Email"
          />
        </div>
        <div>
          <label>Domicilio:</label>
          <input
            type="text"
            value={domicilio}
            onChange={(e) => setDomicilio(e.target.value)}
            required
            placeholder="Domicilio"
          />
        </div>
        <div>
          <label>Teléfono:</label>
          <input
            type="tel"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            required
            placeholder="Telefono"
          />
        </div>
        <button type="submit">Agregar Alumno</button>
      </form>

      <h3>Listado de Alumnos</h3>
      {alumnos.length === 0 ? (
        <p>No hay alumnos registrados.</p>
      ) : (
        <ul>
          {alumnos.map((alumno) => (
            <li key={alumno.id}>
              <strong>{alumno.nombre} {alumno.apellido}</strong> - Curso: {alumno.curso} - Email: {alumno.email} - Domicilio: {alumno.domicilio} - Tel: {alumno.telefono}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default NuevoAlumno;
