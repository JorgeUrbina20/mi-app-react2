/*
3. useState – Contador

👉 *Objetivo:* manejar el estado con useState.

*Ejercicio:*

* Crea un componente Contador.js con un número que empieza en 0.
* Añade 2 botones: *Incrementar* y *Decrementar*.
* Cada clic debe actualizar el estado usando useState.
*/

import { useState } from "react";
import "../Styles/contStyles.css";

function Contador(){

    const [cont, setCont]=useState(0);

    function incrementar(){
        setCont(cont=>cont + 1);
    }

    const decrementar=()=>{
        setCont(()=>cont - 1);
    }

    function actualizar(){
        setCont(0);
    }

    /*const setContador=()=>{
    }*/
    return(
        <>
        <span className="styleContador">
            <h1>{cont}</h1>
        </span>
        <span className="styleBtn">
            <button className="btnCont" onClick={incrementar}>Incrementar</button>
            <button className="btnCont" onClick={decrementar}>Decrementar</button>
            <button className="btnCont" onClick={actualizar}>Actualizar a 0</button>
        </span>
        </>
    )
}

export default Contador;