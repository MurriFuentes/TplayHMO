

import { useState, useEffect } from "react";
import {
    Table,
    Button,
    Container,
    Modal,
    ModalHeader,
    ModalBody,
    FormGroup,
    ModalFooter,
    Alert
} from "reactstrap";
import { Form, Dropdown } from "react-bootstrap";

function Notificaciones({ data }) {
    const [lista, setLista] = useState([])
    const [show, setShow] = useState(false)

    useEffect(() => {
        console.log("Componente renderizado notifi")
        console.log(data)
        setLista(data)
        setShow(true)
    }, [])


    return (
        <>
            {/* <div className="text-white">
                HOLA
                {lista.length}
                {lista.map(element => (
                    <h1 className="bg-info">HOla</h1>   
                ))}
            </div> */}
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Notificaciones
                </Dropdown.Toggle>

                <Dropdown.Menu className="bg-danger">
                    {/* <Dropdown.Item >
                        <div class="card">
                            <div class="card-body bg-info">
                                <h4 class="card-title ">Primer: </h4>
                                <p class="card-text">
                                    No se ha registrado el pago de Ejemplo 1
                                </p>
                            </div>
                        </div>
                    </Dropdown.Item> */}


                    {show && data.map(element => (
                    <Dropdown.Item >
                        <div class="card">
                            <div class="card-body bg-warning">
                                <h4 class="card-title font-weight-bold">Falta pago</h4>
                                <p class="card-text">
                                    No se ha registrado el pago de {element.nombre} {element.apellidoPaterno} {element.apellidoMaterno}
                                    <hr/>
                                    Cobrar porfavor
                                </p>
                            </div>
                        </div>
                    </Dropdown.Item>
                ))}
                </Dropdown.Menu>
            </Dropdown>
        </>
    )
}

export default Notificaciones