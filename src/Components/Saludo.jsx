/*
    1. Importaciones y Exportaciones

  👉 *Objetivo:* practicar cómo dividir componentes en archivos y usarlos en tu app.

  *Ejercicio:*

  * Crea un componente Saludo.js que reciba un nombre como *prop* y muestre un mensaje:

    import React from "react";

    function Saludo({ nombre }) {
      return <h1>¡Hola, {nombre}!</h1>;
    }

    export default Saludo;
    
  * En App.js importa Saludo y úsalo varias veces con distintos nombres.
*/

function Saludar (props){
    return(
        <h1>Hola, {props.nombre}</h1>
    )
}

export default Saludar;