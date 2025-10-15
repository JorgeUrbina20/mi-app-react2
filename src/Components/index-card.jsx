{/* Componente importado desde Materia UI */}
import MUI1 from "../Images/pantalonVenta.png";
import MUI2 from "../Images/gorraVenta.webp";
import MUI3 from "../Images/camisaVenta.webp";
import ImgMediaCard from "./card.jsx";

export default function SetCard(){
    return(
        <>
            <div className="divMUI">
                <ImgMediaCard 
                    img={MUI1} 
                    descripcion="Pantalon Venta"
                />
                <ImgMediaCard 
                    img={MUI2} 
                    descripcion="Gorra Venta"
                />
                <ImgMediaCard 
                    img={MUI3} 
                    descripcion="Camisa Venta"
                />
            </div>
        </>
    )
}