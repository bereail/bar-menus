// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./Components/Login/AuthContext";
import Home from "./Components/Home/Home";
import RositaMenu from "./Components/RositaComponents/Screens/Menu/RositaMenu";
import ProductList from "./Components/RositaComponents/MenuRosita/ProductList";
import Login from "./Components/Login/Login";
import CreateCategory from "./Components/CrudProduct/Caterogy/CreateCategory";
import CategoryList from "./Components/CrudProduct/Caterogy/CaterogyList";
import GetMenu from "./Components/CrudProduct/Menu/GetMenu";
import AuthenticatedLayout from "./Components/Login/AuthenticatedLayout";
import PublicLayout from "./Components/Login/PublicLayout";
import RositaNavbar from "./Components/Navbar/RositaNavbar";

function App() {
  return (
    <AuthProvider> {/* AuthProvider debe envolver todo el árbol */}
      <Router>

        <Routes>
          {/* Rutas públicas */}
          <Route element={<PublicLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/menuRosita" element={<RositaMenu />} />
            <Route path="/rositaComidas" element={<ProductList category="comidas" />} />
            <Route path="/rositaBebidas" element={<ProductList category="bebidas" />} />
            <Route path="/login" element={<Login />} />

          </Route>

          {/* Rutas protegidas */}
          <Route element={<AuthenticatedLayout />}>
          <RositaNavbar />
          <Route path="/allMenuRosita" element={<GetMenu />} />
            <Route path="/categorias" element={<CategoryList />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}


export default App;