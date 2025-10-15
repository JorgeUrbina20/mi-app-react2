/*
Retos nuevo con  ReactBootstrap
-> Crear un SPA 
 */ 

import Container from "react-bootstrap/Container";
import Nav from 'react-bootstrap/Nav';
import TargetaProduc from "../Components/index-TP.jsx";
import Contador from "./contador.jsx";
import ListaTarea from "./lista-tarea.jsx";
import SetCard from "./index-card.jsx";
import Inicio from './Inicio.jsx';
import {Routes, Route, NavLink} from "react-router-dom"

function Navbar() {

  return (
      <>
{/* Donde Key es el nombre de cualquier variable como e o event que le pasa el valor
 de eventKey automaticamente, es de reactBootstrap no de React nativo */}
        <Nav 
            variant="tabs" 
            className='fs-5'
        >
            <Nav.Item>
                <Nav.Link as={NavLink} to="/">Inicio</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={NavLink} to="/Tarjeta1">Tarjeta 1</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={NavLink} to="Tarjeta2">Targeta 2</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={NavLink} to="/Contador">Contador</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={NavLink} to="/Lista_Tarea">Lista Tarea</Nav.Link>
            </Nav.Item>
        </Nav>

        <Container className='mt-4' fluid>
            <Routes>
                <Route path="/" element={<Inicio/>} />
                <Route path="/Tarjeta1" element={<TargetaProduc />}/>
                <Route path="/Tarjeta2" element={<SetCard />} />
                <Route path="/Contador" element={<Contador />} />
                <Route path="/Lista_Tarea" element={<ListaTarea />} />
            </Routes>
        </Container>
    </>
  );
}

export default Navbar;