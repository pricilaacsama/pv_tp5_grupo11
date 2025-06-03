import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import NuevoAlumno from "./pages/NuevoAlumno";
import ListaAlumnos from "./pages/ListaAlumnos";
import Acerca from "./pages/Acerca";
import DetalleAlumnos from "./pages/DetalleAlumnos";
import EditarAlumno from "./pages/EditarAlumno";


function App() {
  const [alumnos, setAlumnos] = useState([
    { id: 1, nombre: "Juan", apellido: "Pérez", curso: "Matemática", lu: "0001", email: "juan@mail.com", domicilio: "Calle 1", telefono: "123456", estado: true },
    { id: 2, nombre: "Ana", apellido: "Gómez", curso: "Historia", lu: "0005", email: "ana@mail.com", domicilio: "Calle 2", telefono: "654321", estado: true },
  ]); 

  const eliminarAlumno = (id) => {
  if (window.confirm('¿Seguro que querés eliminar al alumno?')) {
    const actualizados = alumnos.map((a) =>
      a.id === id ? { ...a, estado: false } : a
    );
    setAlumnos(actualizados);
  }
};

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/nuevo"
          element={<NuevoAlumno alumnos={alumnos} setAlumnos={setAlumnos} />}
        />
        <Route
          path="/lista"
          element={<ListaAlumnos alumnos={alumnos} eliminarAlumno={eliminarAlumno} />}
        />
        <Route path="/acerca" element={<Acerca />} />
        <Route path="/alumnos/:id" element={<DetalleAlumnos alumnos={alumnos} />} />
        <Route path="/editar/:id" element={<EditarAlumno alumnos={alumnos} onModificar={setAlumnos}/>}></Route>
        
      </Routes>
    </>
  );
}

export default App;

/*import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import ListaAlumnos from "./pages/ListaAlumnos";
import NuevoAlumno from "./pages/NuevoAlumno"; // si tenés este
import Acerca from "./pages/Acerca"; // si ya creaste esta

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lista" element={<ListaAlumnos />} />
        <Route path="/nuevo" element={<NuevoAlumno />} />
        <Route path="/acerca" element={<Acerca />} />
      </Routes>
    </>
  );
}

export default App;*/
