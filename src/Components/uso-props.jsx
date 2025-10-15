/*
    2. Props

    👉 *Objetivo:* entender cómo pasar información a los componentes.

    *Ejercicio:*

    * Crea un componente TarjetaProducto.js que reciba como props:

    * titulo
    * precio
    * descripcion
    * Muestra esos datos dentro de un <div> con estilos simples.
    * Úsalo en App.js para mostrar al menos 3 productos distintos.
*/

import "../Styles/style-props.css"

function TarjetaProducto(props) {
    return (
        <>
            <div className="contenedor-principal">
                <figure>
                    <img src={props.urlImage} alt={props.titulo} className="img" />
                </figure>
                <h1>{props.titulo}</h1>
                <p>{props.descripcion}</p>
                <p><strong>${props.precio}</strong></p>
                <button className="btn btn-warning">Comprar</button>
            </div>
        </>
    )
}

export default TarjetaProducto;