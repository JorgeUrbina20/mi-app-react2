/*
4. useState – Lista de Tareas

👉 *Objetivo:* trabajar con arrays en el estado.

*Ejercicio:*

* Crea un componente ListaTareas.js.
* Usa useState para manejar un array de tareas.
* Ten un input y un botón para *agregar* nuevas tareas.
* Muestra la lista en pantalla.
 */
import React, { useState } from "react";
import { FaCirclePlus } from "react-icons/fa6";
import "../Styles/lista-tarea.css"
import Reloj from "./reloj.jsx";

function ListaTareas() {
  const [array, setArray] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState("");

  const entradaTexto = (event) => {
    setNuevaTarea(event.target.value);
  };

  const agregarTarea = () => {
    if (nuevaTarea.trim() === "") return;

    setArray([...array, nuevaTarea.trim()]);
    setNuevaTarea(""); // Limpia el input
  };

  return (
    <div className="contenedorPadre" style={{ padding: "20px" }}>
      <span className="contenedorPrincipalInputText">
        <span className="contenedorInputText">
          <input
            className="inputText"
            type="text"
            name="tareas"
            value={nuevaTarea}
            onChange={entradaTexto}
            placeholder="Escribe una tarea"
            />
          <FaCirclePlus
            style={{ fontSize: "2.5rem", cursor: "pointer", marginLeft: "10px" }}
            onClick={agregarTarea}
            />
        </span>
        <Reloj />
      </span>

      <div className="contenedorTareas">
        <ul className="ordenTareas" style={{lineHeight:"30px"}}>
          {array.map((tarea, index) => (
            <li key={index} style={{fontSize:"1.5rem", margin:"10px 0px"}}>➡️
              {tarea}
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}

export default ListaTareas;

/*
Colocar este ejercicio en un documento word y decirle que explique 
la estructura de map, los valores como parametros que son opcionales
y cuales no.
 */