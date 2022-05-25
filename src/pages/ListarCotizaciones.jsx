import { useEffect, useState } from "react"
import { getListCotizaciones, getListCotizacionesUsuario, DeleteQuotation, EditQuotation, EnviarCorreoos } from "../services/API/UserQuotation"
import { useHistory } from "react-router-dom";
import { Table } from "react-bootstrap";
import useUser from "../hooks/UseUser";
import { Dropdown } from "react-bootstrap";

import { Button } from "react-bootstrap";
import Fila from '../components/FilaCotizacion/Fila'

export default function PageListarCotizacion() {
    const [dataList, setDataList] = useState([]);
    const [dataLoaded, setDataLoaded] = useState(false);
    const { isLogged } = useUser();
    const [filtroF, setFiltroF] = useState((elemento) => (elemento) => true);
    const [filtroP, setFiltroP] = useState((elemento) => (elemento) => true);
    const [filtroV, setFiltroV] = useState((elemento) => (elemento) => true);
    const [filtro, setFiltro] = useState(0);
    const [filtro2, setFiltro2] = useState("");
    const [filtro3, setFiltro3] = useState("");
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
        console.log(username)

        var usuar = {
            numeroEmpleado: username
        }

        var data;
        if (username === "admin" | username === null) {
            data = await getListCotizaciones();
        } else {
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

    // const handleClick = (contact_id) => {
    //     DeleteQuotation(contact_id);
    //     setDataLoaded(false);
    // };

    // const handleClick2 = (contact_id) => {
    //     EditQuotation(contact_id);
    //     setDataLoaded(false);
    // };
    // const handleClick3 = (contact_id) => {
    //     // EditQuotation(contact_id);
    //     setDataLoaded(false);
    // };

    const enviarCorreo = () => {
        EnviarCorreoos();
    };

    const actualizarFiltro = () => {
        setFiltro(filtro + 1);
        switch (filtro % 3) {
            case 0:
                setFiltroP(() => (elemento) => elemento.activo)
                break;
            case 1:
                setFiltroP(() => (elemento) => !elemento.activo)
                break;
            case 2:
                setFiltroP(() => () => true)
                break;
            default:
                break;
        }
    };

    const actualizarFiltroTelevision = (dato) => {
        console.log(dato)

        if (dato == "") {
            setFiltroF(() => (elemento) => true)
        } else {
            setFiltroF(() => (elemento) => elemento.paquete.television == dato)
        }
    }

    const actualizarFiltroInternet = (dato) => {
        if (dato == "") {
            setFiltroV(() => (elemento) => true)
        } else {
            setFiltroV(() => (elemento) => elemento.paquete.velocidadInternet == dato)
        }
    }
    return (
        <>
            {dataList.length > 0 && isLogged &&
                <div
                    className="w-100 bg-dark"
                    style={{
                        justifyContent: "initial",
                    }}
                >
                    <h1 className="bg-dark text-center p-3 h1 text-white">Lista de cotizaciones</h1>
                    <div className="bg-dark w-75 m-auto h5">
                        <Button className="text-center p-3 inline-block bg-danger " onClick={actualizarFiltro}>Revisado</Button>
                        <Dropdown className="bg-dark w-75 text-center p-3 d-inline">
                            <Dropdown.Toggle variant="danger" id="dropdown-basic">
                                Television
                            </Dropdown.Toggle>

                            <Dropdown.Menu className="bg-success text-black">
                                <Dropdown.Item className="text-white" onClick={() => actualizarFiltroTelevision("")}>Sin filtro</Dropdown.Item>
                                <Dropdown.Item className="text-white" onClick={() => actualizarFiltroTelevision("0")}>No</Dropdown.Item>
                                <Dropdown.Item className="text-white" onClick={() => actualizarFiltroTelevision("1")}>TV Normal</Dropdown.Item>
                                <Dropdown.Item className="text-white" onClick={() => actualizarFiltroTelevision("2")}>Nuevo TotalPlay TV</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown className="bg-dark w-75 text-center p-3 d-inline">
                            <Dropdown.Toggle variant="danger" id="dropdown-basic">
                                Internet
                            </Dropdown.Toggle>

                            <Dropdown.Menu className="bg-success text-black">
                                <Dropdown.Item className="text-white" onClick={() => actualizarFiltroInternet("")}>Sin filtro</Dropdown.Item>
                                <Dropdown.Item className="text-white" onClick={() => actualizarFiltroInternet("20")}>20</Dropdown.Item>
                                <Dropdown.Item className="text-white" onClick={() => actualizarFiltroInternet("40")}>40</Dropdown.Item>
                                <Dropdown.Item className="text-white" onClick={() => actualizarFiltroInternet("100")}>100</Dropdown.Item>
                                <Dropdown.Item className="text-white" onClick={() => actualizarFiltroInternet("200")}>200</Dropdown.Item>
                                <Dropdown.Item className="text-white" onClick={() => actualizarFiltroInternet("500")}>500</Dropdown.Item>
                                <Dropdown.Item className="text-white" onClick={() => actualizarFiltroInternet("1000")}>1000</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Button className="text-center p-3 inline-block bg-danger " onClick={enviarCorreo}>Enviar recordatorios correo</Button>
                    </div>
                    <Table className="bg-black w-75 m-auto h5">
                        <thead>
                            <tr className="text-white">
                                <th className="tabla-elemento">Velocidad Internet</th>
                                <th className="tabla-elemento">Television</th>
                                <th className="tabla-elemento">Numero Telefono</th>
                                <th className="tabla-elemento">Correo Electronico</th>
                                <th>Revisado{(filtro % 3 == 0) ? "" : (filtro % 3 == 1) ? ":Si" : ":No"}</th>
                                <th className="tabla-elemento">Funciones</th>
                            </tr>
                        </thead>
                        <tbody className="text-white">
                            {dataList.filter(filtroF).filter(filtroP).filter(filtroV).map((item) => (
                                <Fila item={item} setDataLoaded={setDataLoaded}/>
                            ))}
                        </tbody>
                    </Table>
                </div>
            }

        </>
    )
}