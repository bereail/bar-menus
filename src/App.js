import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RositaBebidas from '../src/Screens/RositaScreens/RositaBebidas';
import RositaComidas from '../src/Screens/RositaScreens/RositaComidas';
import Home from '../src/Components/Home/Home';
import RositaMenu from '../src/Screens/RositaScreens/RositaMenu';


function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<Home />} />


        {/*RositaDescorcha*/}
        <Route path="/menuRosita" element={<RositaMenu />} />
        <Route path="/rositaComidas" element={<RositaComidas />} />
        <Route path="/rositaBebidas" element={<RositaBebidas />} />

        
      </Routes>
    </Router>
  );
}

export default App;
