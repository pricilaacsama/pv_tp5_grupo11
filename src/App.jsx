import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import NuevoAlumno from "./pages/NuevoAlumno";
import ListaAlumnos from "./pages/ListaAlumnos";
import Acerca from "./pages/Acerca";

function App() {
  const [alumnos, setAlumnos] = useState([]); // <-- ESTADO GLOBAL AQUÍ

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
          element={<ListaAlumnos alumnos={alumnos} />}
        />
        <Route path="/acerca" element={<Acerca />} />
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
