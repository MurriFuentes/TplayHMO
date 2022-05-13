import { useEffect, useState } from "react"
import { getListCotizaciones, getListCotizacionesUsuario } from "../services/API/UserQuotation"
import { useHistory } from "react-router-dom";
import { Table } from "react-bootstrap";
import useUser from "../hooks/UseUser";


export default function PageListarCotizacion() {
    const [dataList, setDataList] = useState([]);
    const [dataLoaded, setDataLoaded] = useState(false);
    const { isLogged } = useUser();
    let history = useHistory();
    
    useEffect(() => {
        if (!isLogged) {
            history.replace("./")
        }
    }, [history, isLogged])
    /**
     * Trae la lista de cotizaciones dependiendo si eres usuario o administrador.
     * @async
     * @returns {Array.<{idCotizacion:number, paquete: Array, usuario: Array, numeroTelefono:string, correoElectronico:string}>} Lista de cotizaciones en la BD.
     */
    const getListData = async () => {
        var username = window["username"];
        
        var usuar = {
            numeroEmpleado: username
        }

        var data;
        if (username === "admin" | username === null){
            data = await getListCotizaciones();
        }else{
            data = await getListCotizacionesUsuario(usuar);
        }
        setDataList(data ? data : []);
        setDataLoaded(true);
    }

    useEffect(() => {
        if (!dataLoaded) {
            getListData();
        }
    }, [dataList, dataLoaded])

    return (
        <>
            {dataList.length > 0 && isLogged &&
                <div
                    className="Section"
                    style={{
                    justifyContent: "initial",
                    }}
                >
                    <Table striped bordered hover size="xl">
                        <thead>
                            <tr>
                                <th className="tabla-elemento">Velocidad Internet</th>
                                <th className="tabla-elemento">Televison</th>
                                <th className="tabla-elemento">NTPlay TV</th>
                                <th className="tabla-elemento">Netflix</th>
                                <th className="tabla-elemento">Amazon</th>
                                <th className="tabla-elemento">Can Pant Netflix</th>
                                <th className="tabla-elemento">WifiExtender</th>
                                <th className="tabla-elemento">Tv Adicional</th>
                                <th className="tabla-elemento">NTPlay TV Adic</th>
                                <th className="tabla-elemento">140 canales</th>
                                <th className="tabla-elemento">230 canales</th>
                                <th className="tabla-elemento">280 Canales</th>
                                <th className="tabla-elemento">Numero Telefono</th>
                                <th className="tabla-elemento">Correo Electronico</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dataList.map((item) => (
                                <tr key={item.idCotizacion} >
                                    <td className="tabla-elemento">{item.paquete.velocidadInternet}</td>
                                    <td className="tabla-elemento">{item.paquete.television?"Si":"NO"}</td>
                                    <td className="tabla-elemento">{item.paquete.nuevoTotalPlayTv?"Si":"NO"}</td>
                                    <td className="tabla-elemento">{item.paquete.netflix?"Si":"NO"}</td>
                                    <td className="tabla-elemento">{item.paquete.amazon?"Si":"NO"}</td>
                                    <td className="tabla-elemento">{item.paquete.cantidadPantallasNetflix}</td>
                                    <td className="tabla-elemento">{item.paquete.wifiExtender}</td>
                                    <td className="tabla-elemento">{item.paquete.tvAdicional}</td>
                                    <td className="tabla-elemento">{item.paquete.nuevoTotalPlayTvAdicional}</td>
                                    <td className="tabla-elemento">{item.paquete.canales140?"Si":"NO"}</td>
                                    <td className="tabla-elemento">{item.paquete.canales230?"Si":"NO"}</td>
                                    <td className="tabla-elemento">{item.paquete.canales280?"Si":"NO"}</td>
                                    <td className="tabla-elemento">{item.numeroTelefono}</td>
                                    <td className="tabla-elemento">{item.correoElectronico}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            }
        
        </>
    )
}