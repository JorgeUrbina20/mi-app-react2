import Container from "react-bootstrap/Container";
import {useNavigate} from "react-router-dom";

function PNfound(){
const navigate=useNavigate();

    return(
        <Container fluid>
            <h1>404 pagina no encontrada</h1>
            <button type="button" onClick={()=>navigate("/")}>Ir al inicio</button>
        </Container>
    )
}

export default PNfound;