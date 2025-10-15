/* Componente de TarjetaProducto */
import TP from "../Components/uso-props";
import img1 from "../Images/camisaVenta.webp"
import img2 from "../Images/gorraVenta.webp"
import img3 from "../Images/pantalonVenta.png"

export default function setTP(){
    return(
        <>
        <div className="principal">
            <TP
                titulo="Elegante camisa"
                precio="20"
                descripcion="Hermosa Camisa color gris ideal para andar en casa"
                urlImage={img1} 
            />
            <TP
                titulo="Gorra para hombre"
                precio="5"
                descripcion="Gorra para hombres una buena convinacion con cualquier look"
                urlImage={img2} 
            />
            <TP
                titulo="Elegante pantalon"
                precio="23"
                descripcion="Pantalon Jim para hombre ideal para salidas casuales"
                urlImage={img3} 
            />
        </div>
        </>
    )
}