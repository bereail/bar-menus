import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ParaComer from '../src/Screens/ParaComer';
import ParaTomar from '../src/Screens/ParaTomar';

const Home = () => <h1>Bienvenido al Bar</h1>;
const Menu1 = () => <h1>Menú 1: Bebidas</h1>;
const Menu2 = () => <h1>Menú 2: Comidas</h1>;

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/menu">Menú Bebidas</Link></li>
          <li><Link to="/rositaComidas">Menú Comidas</Link></li>
          <li><Link to="/rositaBebidas">Menú Bebidas</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<ParaComer />} />
        <Route path="/rositaComidas" element={<ParaComer />} />
        <Route path="/rositaBebidas" element={<ParaTomar />} />
      </Routes>
    </Router>
  );
}

export default App;
