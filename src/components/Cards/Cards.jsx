import * as icons from "react-icons/bs";
import { Button} from "reactstrap";
import { Modal } from "react-bootstrap";
import { useEffect, useState } from "react";
import Page_Contratar from '../../../src/pages/Contratar'

export default function Card(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     guardarCliente(nombre,paquete,telefono);
// }
  return (
    <>
      <div className="cardContainer">
        <div className="cardHeader">
          {props.titulo}
          <br></br>
          {props.subtitulo}
        </div>
        <div className="cardBody">
          <p className="cardPrice">{props.precio}</p>
          <div>
            <icons.BsArrowDown />
            <icons.BsArrowUp />
          </div>
          <div className="Megas">
            {props.velbajada} {props.velsubida}
          </div>
          <div className="cardInfo">
            {props.descripcion}
            <br></br>
            {props.descripcion2}
          </div>
          <Button
            onClick={handleShow}
            className="btnContratar"
          >
            Contratar
          </Button>

        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="bg-success">
          <div className="h1 m-auto">Solicitar Llamada</div>
        </Modal.Header>
        <Page_Contratar paqueteC={props.subtitulo} handleC={handleClose}/>
      </Modal>
    </>
  );
}
