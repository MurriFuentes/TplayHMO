import { useEffect, useState } from "react"
import { getListCotizaciones } from "../services/contactListService"
import { useHistory } from "react-router-dom";
import useUser from "../hooks/useUser";

export default function Page_Listar() {
    const [dataList, setDataList] = useState([]);
    const [dataLoaded, setDataLoaded] = useState(false);
    const { isLogged } = useUser();
    let history = useHistory();
    
    useEffect(() => {
        if (!isLogged) {
            history.push("./")
        }
    }, [history, isLogged])

    const getListData = async () => {
        const data = await getListCotizaciones();
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
                <div className="Section">
                    {/* <ul className="lista-items">
                        {dataList.map((item) => (
                            <li key={item.idCotizacion} >
                                <p>{item.paquete.velocidadInternet}</p>
                                <p>{item.numeroTelefono}</p>
                                <p>{item.correoElectronico}</p>
                            </li>
                            

                        ))}
                    </ul> */}
                    <table className="tabla-items">
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
                        {dataList.map((item) => (
                            <tr key={item.idCotizacion} >
                                <td className="tabla-elemento">{item.paquete.velocidadInternet}</td>
                                <td className="tabla-elemento">{item.paquete.television}</td>
                                <td className="tabla-elemento">{item.paquete.nuevoTotalPlayTv}</td>
                                <td className="tabla-elemento">{item.paquete.netflix}</td>
                                <td className="tabla-elemento">{item.paquete.amazon}</td>
                                <td className="tabla-elemento">{item.paquete.cantidadPantallasNetflix}</td>
                                <td className="tabla-elemento">{item.paquete.wifiExtender}</td>
                                <td className="tabla-elemento">{item.paquete.tvAdicional}</td>
                                <td className="tabla-elemento">{item.paquete.nuevoTotalPlayTvAdicional}</td>
                                <td className="tabla-elemento">{item.paquete.canales140}</td>
                                <td className="tabla-elemento">{item.paquete.canales230}</td>
                                <td className="tabla-elemento">{item.paquete.canales280}</td>
                                <td className="tabla-elemento">{item.numeroTelefono}</td>
                                <td className="tabla-elemento">{item.correoElectronico}</td>
                            </tr>
                        ))}
                    </table>
                </div>
            } : <h1 className="Section"> SIN ACCESO </h1>
        
        </>
    )
}