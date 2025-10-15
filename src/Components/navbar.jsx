import React from "react";
import { Routes, Route, NavLink, useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from 'react-bootstrap/Nav';

import Inicio from './Inicio.jsx';
import TargetaProduc from "../Components/index-TP.jsx";
import SetCard from "./index-card.jsx";
import Contador from "./contador.jsx";
import ListaTarea from "./lista-tarea.jsx";
import PNfound from "./not-page-found.jsx";

function NavbarApp() {
  const location = useLocation();

  // Detectar si estamos en la página 404
  const isNotFound = location.pathname !== "/" &&
                     location.pathname !== "/Tarjeta1" &&
                     location.pathname !== "/Tarjeta2" &&
                     location.pathname !== "/Contador" &&
                     location.pathname !== "/Lista_Tarea";

  return (
    <>
      {/* Mostrar navbar solo si no es 404 */}
      {!isNotFound && (
        <Nav variant="tabs" className='fs-5'>
          <Nav.Item>
            <Nav.Link as={NavLink} to="/">Inicio</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={NavLink} to="/Tarjeta1">Tarjeta 1</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={NavLink} to="/Tarjeta2">Tarjeta 2</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={NavLink} to="/Contador">Contador</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={NavLink} to="/Lista_Tarea">Lista Tarea</Nav.Link>
          </Nav.Item>
        </Nav>
      )}

      <Container className='mt-4' fluid>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/Tarjeta1" element={<TargetaProduc />} />
          <Route path="/Tarjeta2" element={<SetCard />} />
          <Route path="/Contador" element={<Contador />} />
          <Route path="/Lista_Tarea" element={<ListaTarea />} />
          <Route path="*" element={<PNfound />} />
        </Routes>
      </Container>
    </>
  );
}

export default NavbarApp;
