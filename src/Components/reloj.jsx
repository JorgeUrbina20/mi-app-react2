/*
5. useEffect – Reloj

👉 *Objetivo:* aprender a ejecutar efectos secundarios.

*Ejercicio:*

* Crea un componente Reloj.js.
* Usa useState para guardar la hora actual.
* Usa useEffect para actualizar la hora cada segundo con setInterval.
* Importante: limpia el intervalo en el return del useEffect.
 */
import {useState, useEffect} from "react";

function Reloj(){ 
    const [fecha, setFecha]=useState(new Date());
    
    useEffect(()=>{
        const miIntervalo=setInterval(()=>{
            setFecha(new Date());
            console.log("Render de setInterval");
        },1000)

        return()=>{
            clearInterval(miIntervalo);
        }
        
    },[]);
    
    let hora=fecha.getHours();
    let minutos=fecha.getMinutes();
    let segundos=fecha.getSeconds();

    return(
        <>
        <span>
            <h1>{hora}:{minutos}:{segundos}</h1>
        </span>
        </>
    )
}

export default Reloj;