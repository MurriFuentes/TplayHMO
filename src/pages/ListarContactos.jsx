import { useEffect, useState } from "react";
import { DeleteContact, EditContact } from "../services/API/ContactList";
import { Button } from "react-bootstrap";
import { getList } from "../services/API/ContactList";
import { useHistory } from "react-router-dom";
import { Table, Dropdown } from "react-bootstrap";
import { BsFillTrashFill, BsFillBrushFill } from "react-icons/bs";
import useUser from "../hooks/UseUser";

export default function Page_Listar() {
  const [dataList, setDataList] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  const [filtroF, setFiltroF] = useState((elemento) => (elemento) => true);
  const [filtroP, setFiltroP] = useState((elemento) => (elemento) => true);
  const [filtro, setFiltro] = useState(0);
  const [filtro2, setFiltro2] = useState("");


  const { isLogged } = useUser();
  let history = useHistory();

  useEffect(() => {
    if (!isLogged) {
      history.replace("./");
    }
  }, [history, isLogged]);

  const getListData = async () => {
    const data = await getList();
    console.log(data);
    setDataList(data ? data : []);
    setDataLoaded(true);
  };

  useEffect(() => {
    if (!dataLoaded) {
      getListData();
    }
  }, [dataList, dataLoaded]);

  const handleClick = (contact_id) => {
    DeleteContact(contact_id);
    setDataLoaded(false);
  };

  const handleClick2 = (contact_id) => {
    EditContact(contact_id);
    setDataLoaded(false);
  };

  const borrarTodo = () => {
    setDataLoaded(false);
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

  const actualizarFiltroPaquete = (dato) => {
    if (dato == "") {
      setFiltroF(() => (elemento) => true)
    } else {
      setFiltroF(() => (elemento) => elemento.paquete == dato)
    }
  }


  return (
    <>
      {dataList.length > 0 && isLogged && (
        <div
          className="w-100 bg-dark alturaUsuarios"
          style={{
            justifyContent: "initial",
          }}
        >
          <div className="">
            <h1 className="bg-dark text-center p-3 h1 text-white">Lista de solicitudes de llamada</h1>
            <div className="bg-dark w-75 m-auto h5">
              <Button className="text-center p-3 inline-block bg-danger " variant="dark" onClick={actualizarFiltro}>Filtrar </Button>
              <Dropdown className="bg-dark w-75 text-center p-3 d-inline">
                <Dropdown.Toggle variant="danger" id="dropdown-basic">
                  Filtrar Paquete
                </Dropdown.Toggle>

                <Dropdown.Menu className="bg-success text-black">
                  <Dropdown.Item className="text-white"  onClick={() => actualizarFiltroPaquete("")}>Sin filtro</Dropdown.Item>
                  <Dropdown.Item className="text-white"  onClick={() => actualizarFiltroPaquete("Internet 20 megas")}>Internet 20 Megas</Dropdown.Item>
                  <Dropdown.Item className="text-white"  onClick={() => actualizarFiltroPaquete("Internet 40 megas")}>Internet 40 Megas</Dropdown.Item>
                  <Dropdown.Item className="text-white"  onClick={() => actualizarFiltroPaquete("TV + Internet 20 megas")}>TV + Internet 20 megas</Dropdown.Item>
                  <Dropdown.Item className="text-white"  onClick={() => actualizarFiltroPaquete("TV + Internet 40 megas")}>TV + Internet 40 megas</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>

          <Table className="bg-light w-75 m-auto rounded h5" >
            <thead className="border bg-black">
              <tr className="text-white">
                <th>Nombre</th>
                <th>Paquete</th>
                <th>Telefono</th>
                <th>Fecha</th>
                <th>Revisado{(filtro % 3 == 0) ? "" : (filtro % 3 == 1) ? ":Si" : ":No"}</th>
                <th>Funciones</th>
              </tr>
            </thead>
            <tbody className="text-center border bg-black text-white">
              {dataList.filter(filtroF).filter(filtroP).map((item) => (
                <tr key={item.id}>
                  <td>{item.nombre}</td>
                  <td>{item.paquete}</td>
                  <td>{item.telefono}</td>
                  <td>{item.fechaProspeccion.substr(0,10)}</td>
                  <td>{item.activo ? "Si" : "No"}</td>

                  <td style={{ display: "flex", justifyContent: "center" }}><Button onClick={() => handleClick2(item.id)}>< BsFillBrushFill /></Button><Button onClick={() => handleClick(item.id)}>< BsFillTrashFill /></Button></td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )}
    </>
  );
}
