import { useEffect, useState } from "react";
import { getList } from "../services/API/contactList";
import { useHistory } from "react-router-dom";
import { Table } from "react-bootstrap";
import useUser from "../hooks/useUser";

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
              </tr>
            </thead>
            <tbody>
              {dataList.map((item) => (
                <tr key={item.id}>
                  <td>{item.nombre}</td>
                  <td>{item.paquete}</td>
                  <td>{item.telefono}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )}
    </>
  );
}
