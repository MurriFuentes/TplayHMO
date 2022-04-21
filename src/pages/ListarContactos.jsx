import { useEffect, useState } from "react";
import { DeleteContact } from "../services/API/ContactList";
import { Button } from "react-bootstrap";
import { getList } from "../services/API/ContactList";
import { useHistory } from "react-router-dom";
import { Table } from "react-bootstrap";
import { BsFillTrashFill } from "react-icons/bs";
import useUser from "../hooks/UseUser";

export default function Page_Listar() {
  const [dataList, setDataList] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  const { isLogged } = useUser();
  let history = useHistory();

  useEffect(() => {
    if (!isLogged) {
      history.replace("./");
    }
  }, [history, isLogged]);

  const getListData = async () => {
    const data = await getList();
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

  const borrarTodo = () => {
    setDataLoaded(false);
  };

  return (
    <>
      {dataList.length > 0 && isLogged && (
        <div
          className="Section"
          style={{
            justifyContent: "initial",
          }}
        >
          <Table striped bordered hover size="xl">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Paquete</th>
                <th>Telefono</th>
                <th style={{display:"flex", justifyContent: "center"}}><Button variant="danger" onClick={borrarTodo}>Borrar Todo < BsFillTrashFill  /></Button></th>
              </tr>
            </thead>
            <tbody>
              {dataList.map((item) => (
                <tr key={item.id}>
                  <td>{item.nombre}</td>
                  <td>{item.paquete}</td>
                  <td>{item.telefono}</td>
                  <td style={{display:"flex", justifyContent: "center"}}><Button onClick={() => handleClick(item.id)}>< BsFillTrashFill  /></Button></td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )}
    </>
  );
}
