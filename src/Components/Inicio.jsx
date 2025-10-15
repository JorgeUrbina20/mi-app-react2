import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import imgGeorge from "../Images/ft-paginWeb.jpeg";
import { FaSquareWhatsapp } from "react-icons/fa6";
import "../Styles/inicio-style.css"

export default function Inicio(){

    let numeroWhatsapp="50582****79";
    let mensajeWhatsapp="Hola, me gustaria saber como puedo aprender react con usted."
    let urlWhatsapp=`https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(mensajeWhatsapp)}`;

    return(
        <Container fluid>
            <Row>
                <Col sm={12} lg={6}>
                    <p style={{fontFamily:"'Open Sans', sans-serif", fontOpticalSizing: "auto", fontStyle: "normal",
                     fontVariationSettings:"'width' 100"}}>
                        Este es un proyecto basado en react, comenzo como una simple practica de como funcionan los componente
                        pero ahora se ha vuelto una aplicacion, en donde los componentes se comportan como un SPA, puedes ver
                        el funcionamiento de la app y el codigo fuente en mi cuenta de <a href="https://github.com/JorgeUrbina20" target="_blank" rel="noopener noreferrer"> github</a>,
                        es una SPA real, creada en <strong style={{fontSize:"1rem"}}>React Router</strong> pero tambien tengo una aplicacion SPA simulada con estado, para verla <a href="https://reactjn.netlify.app/" ree="noopener noreferrer" target="_blank">haz clic aqui</a>, tomemos en cuenta que esta pagina es una copia de la pagina original la cual es SPA con estado. Se implemento esta clonación para ver el funcionamiento de ambas técnologias, ventajas y desventajas, SPA mediante estado y con React Router.
                    </p>
                    <Container className="d-flex justify-content-between">
                        <p><small>Jorge Nuñez</small></p>
                        <p><small><a href="https://github.com/JorgeUrbina20" target="_blank" rel="noopener noreferrer">Clic para ir a mi github</a></small></p>
                    </Container>
                </Col>
                <Col sm={12} lg={6} className="d-flex justify-content-center align-items-center">
                    <Image src={imgGeorge} alt="mi foto de perfil" style={{height:"47vh", objectFit:"contain", width:"100%", userSelect:"none"}} fluid/>
                </Col>
                <Col sm={12} lg={12} className="d-flex justify-content-end mt-5">
                    <a href="#" target="_self" rel="noopener noreferrer">{/*Pagina no accesible, por vulnerabilidades a que accedan a mi numero facilmente*/}
                        <FaSquareWhatsapp className="text-success logoWhat" title="Chatea por whatsapp" />
                    </a>
                </Col>
                <Col sm={12} lg={12} className="mt-5">
                    <footer className="bg-dark  text-center py-3 mt-5 fs-6">
                    <small>© {new Date().getFullYear()} Jorge Nuñez | Hecho con React ⚛️</small>
                    </footer>
                </Col>
            </Row>
        </Container>
    )
}