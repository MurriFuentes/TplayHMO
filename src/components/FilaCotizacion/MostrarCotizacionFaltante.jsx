import React from 'react'
import { Button } from "react-bootstrap";

function MostrarCotizacionFaltante({ item }) {
    return (
        <>
            <Button className="bg-black text-white" size="lg">{item.numeroTelefono}</Button>
            <Button className="bg-black text-white" size="lg">{item.correoElectronico}</Button>
            <Button className="bg-black text-white" size="lg">{item.fechaCotizacion.slice(0,10)}</Button>
            <Button variant={item.activo==false?"success":"danger"} size="lg">{item.activo==false?"Activo":"No Activo"}</Button>
            {item.paquete.velocidadInternet && <Button className="bg-black text-white" size="lg">{item.paquete.velocidadInternet} Megas</Button>}
            {item.paquete.amazon && <Button vclassName="bg-black text-white" size="lg">Amazon</Button>}
            {item.paquete.netflix && <Button className="bg-black text-white" size="lg">Netflix</Button>}
            {item.paquete.hbo && <Button className="bg-black text-white" size="lg">HBO</Button>}
            {item.paquete.star && <Button className="bg-black text-white" size="lg">Star plus</Button>}
            {item.paquete.canales140 && <Button className="bg-black text-white" size="lg">140 Canales</Button>}
            {item.paquete.canales230 && <Button className="bg-black text-white" size="lg">230 Canales</Button>}
            {item.paquete.canales280 && <Button className="bg-black text-white" size="lg">280 Canales</Button>}
            {item.paquete.television!=0 && <Button className="bg-black text-white" size="lg">{item.paquete.television=="1"?"TV Normal":"Nuevo Totalplay TV"}</Button>}
            {item.paquete.wifiExtender!=0 && <Button className="bg-black text-white" size="lg">{item.paquete.wifiExtender} WifiExtender</Button>}
            {item.paquete.tvAdicional!=0 && <Button className="bg-black text-white" size="lg">{item.paquete.tvAdicional} TV Adicional</Button>}
        </>
    )
}

export default MostrarCotizacionFaltante