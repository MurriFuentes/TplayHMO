import React from 'react'
import { Button } from "react-bootstrap";

function MostrarCotizacionFaltante({ item }) {
    return (
        <>
            <Button variant="primary" size="lg">{item.numeroTelefono}</Button>
            <Button variant="primary" size="lg">{item.correoElectronico}</Button>
            <Button variant={item.activo==false?"success":"danger"} size="lg">{item.activo==false?"Activo":"No Activo"}</Button>
            {item.paquete.velocidadInternet && <Button variant="primary" size="lg">{item.paquete.velocidadInternet} Megas</Button>}
            {item.paquete.amazon && <Button variant="primary" size="lg">Amazon</Button>}
            {item.paquete.netflix && <Button variant="primary" size="lg">Netflix</Button>}
            {item.paquete.hbo && <Button variant="primary" size="lg">HBO</Button>}
            {item.paquete.star && <Button variant="primary" size="lg">Star plus</Button>}
            {item.paquete.canales140 && <Button variant="primary" size="lg">140 Canales</Button>}
            {item.paquete.canales230 && <Button variant="primary" size="lg">230 Canales</Button>}
            {item.paquete.canales280 && <Button variant="primary" size="lg">280 Canales</Button>}
            {item.paquete.television!=0 && <Button variant="primary" size="lg">{item.paquete.television=="1"?"TV Normal":"Nuevo Totalplay TV"}</Button>}
            {item.paquete.wifiExtender!=0 && <Button variant="primary" size="lg">{item.paquete.wifiExtender} WifiExtender</Button>}
            {item.paquete.tvAdicional!=0 && <Button variant="primary" size="lg">{item.paquete.tvAdicional} TV Adicional</Button>}
        </>
    )
}

export default MostrarCotizacionFaltante