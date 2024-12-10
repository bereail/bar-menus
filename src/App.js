import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import RositaBebidas from "./Screens/RositaBebidas";
import RositaComidas from "./Screens/RositaComidas";
import MenuScreen from "./Screens/MenuScreen";

const Home = () => <h1>Bienvenido al Bar</h1>;

function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<MenuScreen />} />
        <Route path="/rositaComidas" element={<RositaComidas />} />
        <Route path="/rositaBebidas" element={<RositaBebidas />} />
      </Routes>
    </Router>
  );
}

export default App;
