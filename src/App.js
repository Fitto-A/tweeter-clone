import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Browser, Route, Routes } from "react-router-dom";

import { AppWrapper } from "./App.styles";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import Perfil from "./pages/Perfil";
import Registro from "./pages/Registro";

import { auth } from "./firebase/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";

const App = () => {
  const [usuarioLogueado, setUsuarioLogueado] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUsuarioLogueado(currentUser);
  });

  return (
    <Browser>
      <AppWrapper>
        <Sidebar />
        <Routes>
          {usuarioLogueado ? (
            <Route
              exact
              path="/"
              element={<Home correoUsuario={usuarioLogueado.email} />}
            />
          ) : (
            <Route exact path="/" element={<Home />} />
          )}

          <Route exact path="/perfil" element={<Perfil />} />
          <Route exact path="/registro" element={<Registro />} />
        </Routes>
      </AppWrapper>
    </Browser>
  );
};

export default App;
