import React from 'react'
import { DeleteQuotation, EditQuotation } from "../../services/API/UserQuotation"
import { BsFillTrashFill, BsFillBrushFill, BsFillEyeFill } from "react-icons/bs";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { useEffect, useState } from "react";
import MostrarCotizacionFaltante from './MostrarCotizacionFaltante'

function Fila({ item, setDataLoaded }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleClick = (contact_id) => {
        DeleteQuotation(contact_id);
        setDataLoaded(false);
    };

    const handleClick2 = (contact_id) => {
        EditQuotation(contact_id);
        setDataLoaded(false);
    };
    const handleClick3 = (contact_id) => {
        // EditQuotation(contact_id);
        setDataLoaded(false);
    };
    return (
        <>
            <tr key={item.idCotizacion} >
                <td className="tabla-elemento">{item.paquete.velocidadInternet}</td>
                <td className="tabla-elemento">{item.paquete.television == 0 ? "No" : item.paquete.television == 1 ? "TV Normal" : "Nuevo TotalPlay TV"}</td>
                {/* <td className="tabla-elemento">{item.paquete.nuevoTotalPlayTv?"Si":"NO"}</td>
                                    <td className="tabla-elemento">{item.paquete.netflix?"Si":"NO"}</td>
                                    <td className="tabla-elemento">{item.paquete.amazon?"Si":"NO"}</td>
                                    <td className="tabla-elemento">{item.paquete.cantidadPantallasNetflix}</td>
                                    <td className="tabla-elemento">{item.paquete.wifiExtender}</td>
                                    <td className="tabla-elemento">{item.paquete.tvAdicional}</td>
                                    <td className="tabla-elemento">{item.paquete.nuevoTotalPlayTvAdicional}</td>
                                    <td className="tabla-elemento">{item.paquete.canales140?"Si":"NO"}</td>
                                    <td className="tabla-elemento">{item.paquete.canales230?"Si":"NO"}</td>
                                    <td className="tabla-elemento">{item.paquete.canales280?"Si":"NO"}</td> */}
                <td className="tabla-elemento">{item.numeroTelefono}</td>
                <td className="tabla-elemento">{item.correoElectronico}</td>
                <td className="tabla-elemento">{item.activo ? "Si" : "No"}</td>
                <td style={{ display: "flex", justifyContent: "center" }}>
                    <Button onClick={() => handleClick2(item.idCotizacion)}>< BsFillBrushFill /></Button>
                    <Button onClick={() => handleClick(item.idCotizacion)}>< BsFillTrashFill /></Button>
                    <Button onClick={handleShow}>< BsFillEyeFill /></Button>
                </td>
            </tr>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton className="bg-dark text-success">
                    <div className="h1 m-auto">Cotizacion completa</div>
                </Modal.Header>
                <MostrarCotizacionFaltante  item={item} handleC={handleClose} />
            </Modal>
        </>
    )
}

export default Fila