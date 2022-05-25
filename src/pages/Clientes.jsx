import { Form, Dropdown } from "react-bootstrap";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { getClients } from "../services/API/UsersClients";
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
import { Registrar_Cliente, Eliminar_Cliente, Actualizar_ClientePrimer, Actualizar_ClienteSegundo } from "../services/API/UsersSignUp";
import useUser from "../hooks/UseUser";
import { useHistory } from "react-router-dom";
import Push from 'push.js'
import Notificaciones from './Notificaciones'

export default function Page_Clientes() {
  const [dataList, setDataList] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);
  const { isLogged } = useUser();
  const [dataListNotification, setDataListNotification] = useState([]);
  let history = useHistory();
  var username = window["username"];
  var usuar = {
    numeroEmpleado: username,
  };


  const getListUsers = async () => {
    const data = await getClients(usuar);
    setDataList(data);
    cargarNotificaciones();
    setDataLoaded(true);

    // console.log(dataList);

  };


  const cargarNotificaciones = () => {
    var dateLN = [];
    var fechaInicio = new Date().getTime();

    dataList.forEach((element, index) => {
      var sqlDateArr1 = element.fechaNacimiento.split("-");
      var sYear = sqlDateArr1[0];
      var sMonth = (Number(sqlDateArr1[1]) - 1).toString();
      var sqlDateArr2 = sqlDateArr1[2].split("T");
      var sDay = sqlDateArr2[0];

      var fechaFin = new Date(sYear, sMonth, sDay, 0, 0, 0, 0);

      var diff = fechaFin - fechaInicio;
      console.log((diff / (1000 * 60 * 60 * 24) * (-1)))
      if ((diff / (1000 * 60 * 60 * 24) * (-1)) > 30 && (element.primerPago == false || element.segundoPago == false)) {
        dateLN.push(element);
      }
    });
    console.log(dateLN)
    setDataListNotification(dateLN);
  }

  useEffect(() => {
    if (!isLogged) {
      history.replace("./");
    }
    console.log("Componente renderizado");
    if (isLogged && dataList.length === 0) {
      getListUsers();
    }
    if (window["clients"]) {
      userSelected.data = window["clients"].data;
    }
  }, [history, isLogged, dataList, dataLoaded]);

  const userInitialState = {
    nombre: "",
    apellidoPaterno: "",
    apellidoMaterno: "",
    fechaNacimiento: "",
    paqueteContratado: "",
    primerPago: false,
    segundoPago: false,
    usuario: usuar,
  };

  const initialState = {
    data: dataList,
    modalActualizar: false,
    modalInsertar: false,
    form: {
      nombre: "",
      apellidoPaterno: "",
      apellidoMaterno: "",
      fechaNacimiento: "",
      paqueteContratado: "",
      primerPago: false,
      segundoPago: false,
      usuario: usuar,
    },
  };

  const [userState, setuserState] = useState(userInitialState);
  const [userSelected, setuserSelected] = useState(initialState);

  const onChange = (name, value) => {
    setuserState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const mostrarModalInsertar = () => {
    setuserSelected((prev) => ({
      ...prev,
      modalInsertar: true,
    }));
  };

  const cerrarModalInsertar = () => {
    setuserSelected((prev) => ({
      ...prev,
      modalInsertar: false,
    }));
  };

  const mostrarModalActualizar = (dato) => {
    console.log("TEST");
  };

  useEffect(() => {
    if (!dataLoaded) {
      getListUsers();
    }
  }, [dataList, dataLoaded]);

  const eliminar = (dato) => {
    Eliminar_Cliente(dato);
    setDataLoaded(false);
  };

  const Act1 = (id, primer, segundo) => {
    Actualizar_ClientePrimer(id, primer, segundo);
    setDataLoaded(false);
  };

  const Act2 = (id, segundo, primer) => {
    Actualizar_ClienteSegundo(id, segundo, primer);
    setDataLoaded(false);
  };

  const insertar = (prev) => {
    // var valorNuevo = { ...userState };
    // valorNuevo.id = userState.id + 1;
    // var lista = userSelected.data;
    // lista.push(valorNuevo);
    //setuserSelected({ ...prev,  modalInsertar: false });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    Registrar_Cliente(userState);
    setuserState(userInitialState);
    cerrarModalInsertar();
    setDataLoaded(false);
  };

  return (
    <>
      <Container>
        <h1 className="bg-dark text-center p-3 h1 text-white">Clientes</h1>
        <br />
        <div className="d-flex justify-content-between">
          <Button color="success" className="" onClick={() => mostrarModalInsertar()}>
            Crear nuevo cliente
          </Button>

          
          {dataListNotification.length>0 && <Notificaciones data={dataListNotification}/>}
        </div>

        <br />
        <br />
        <Table className="bg-black m-auto h5">
          <thead>
            <tr className="text-white">
              <th>Nombre</th>
              <th>Apellido Paterno</th>
              <th>Apellido Materno</th>
              <th>Fecha contratacion</th>
              <th>Paquete Contratado</th>
              <th>Primer pago</th>
              <th>Segundo pago</th>
              <th>Funciones</th>
            </tr>
          </thead>
          {isLogged && (
            <tbody className="text-white">
              {userSelected.data.map((dato) => (
                <tr key={dato.id} className="text-white">
                  <td>{dato.nombre}</td>
                  <td>{dato.apellidoPaterno}</td>
                  <td>{dato.apellidoMaterno}</td>
                  <td>{dato.fechaNacimiento.slice(0, 10)}</td>
                  <td>{dato.paqueteContratado}</td>
                  <td>
                    <Button color={dato.primerPago == false ? "danger" : "success"} onClick={() => Act1(dato.id, dato.primerPago, dato.segundoPago)}>
                      {dato.primerPago == false ? "No" : "Si"}
                    </Button>
                  </td>
                  <td>
                    <Button color={dato.segundoPago == false ? "danger" : "success"} onClick={() => Act2(dato.id, dato.segundoPago, dato.primerPago)}>
                      {dato.segundoPago == false ? "No" : "Si"}
                    </Button>
                  </td>
                  <td>
                    <Button color="danger" onClick={() => eliminar(dato.id)}>
                      Eliminar
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </Table>
      </Container>

      <Modal isOpen={userSelected.modalInsertar}>
        <ModalHeader>
          <div>
            <h3>Registrar nuevo cliente</h3>
          </div>
        </ModalHeader>

        <ModalBody>
          <Form onSubmit={onSubmit}>
            <FormGroup>
              <label>Nombre:</label>
              <Form.Control
                required
                className="form-control"
                type="text"
                name="nombre"
                onChange={(e) => onChange(e.target.name, e.target.value)}
              />
            </FormGroup>

            <FormGroup>
              <label>Apellido Paterno:</label>
              <Form.Control
                required
                className="form-control"
                type="text"
                name="apellidoPaterno"
                onChange={(e) => onChange(e.target.name, e.target.value)}
              />
            </FormGroup>

            <FormGroup>
              <label>Apellido Materno:</label>
              <Form.Control
                required
                className="form-control"
                type="text"
                name="apellidoMaterno"
                onChange={(e) => onChange(e.target.name, e.target.value)}
              />
            </FormGroup>

            <FormGroup>
              <label>Fecha de contratacion:</label>
              <Form.Control
                required
                className="form-control"
                type="date"
                name="fechaNacimiento"
                onChange={(e) => onChange(e.target.name, e.target.value)}
              />
            </FormGroup>

            <FormGroup>
              <label>paquete:</label>
              <select
                value="Internet 40 megas"
                name="paqueteContratado"
                required
                onChange={(e) => onChange(e.target.name, e.target.value)}
              >
                <option selected value="Internet 20 megas">
                  Internet 20 megas
                </option>
                <option value="Internet 40 megas">Internet 40 megas</option>
                <option value="Internet 100 megas">Internet 100 megas</option>
                <option value="Internet 200 megas">Internet 200 megas</option>
                <option value="Internet 500 megas">Internet 500 megas</option>
                <option value="Internet 1000 megas">Internet 1000 megas</option>
                <option value="TV + Internet 20 megas">
                  TV + Internet 20 megas
                </option>
                <option value="TV + Internet 40 megas">
                  TV + Internet 40 megas
                </option>
                <option value="TV + Internet 100 megas">
                  TV + Internet 100 megas
                </option>
                <option value="TV + Internet 200 megas">
                  TV + Internet 200 megas
                </option>
                <option value="TV + Internet 500 megas">
                  TV + Internet 500 megas
                </option>
                <option value="TV + Internet 1000 megas">
                  TV + Internet 1000 megas
                </option>
              </select>
            </FormGroup>

            <FormGroup>
              <label>Primer pago:</label>
              <Form.Control
                className="form-control"
                type="checkbox"
                name="primerPago"
                onChange={(e) => onChange(e.target.name, e.target.value)}
              />
            </FormGroup>

            <FormGroup>
              <label>Segundo pago:</label>
              <Form.Control
                className="form-control"
                type="checkbox"
                name="segundoPago"
                onChange={(e) => onChange(e.target.name, e.target.value)}
              />
            </FormGroup>

            <Button type="submit" color="primary" onClick={() => insertar()}>
              Insertar
            </Button>
            <Button
              className="btn btn-danger"
              onClick={() => cerrarModalInsertar()}
            >
              Cancelar
            </Button>
          </Form>
        </ModalBody>

        <ModalFooter></ModalFooter>
      </Modal>
    </>
  );
}
