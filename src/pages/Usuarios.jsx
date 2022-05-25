import { Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { getUsers } from "../services/API/UsersAdmon";
import {
  Table,
  Button,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
} from "reactstrap";
//import Registrar_Usuario from "../services/API/UsersSignUp"
import { Registrar_Usuario } from "../services/API/UsersSignUp";
import useUser from "../hooks/UseUser";
import { useHistory } from "react-router-dom";

export default function Page_Usuarios() {
  const [dataList, setDataList] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);
  const { isLogged } = useUser();
  let history = useHistory();

  const getListUsers = async () => {
    const data = await getUsers();
    setDataList(data);
    setDataLoaded(true);
    console.log(dataList);
  };

  useEffect(() => {
    if (!isLogged) {
      history.replace("./");
    }
    console.log("Componente renderizado");
    if (isLogged && dataList.length === 0) {
      getListUsers();
    }
    if (window["users"]) {
      userSelected.data = window["users"].data;
    }

    console.log(window["users"]);
  }, [history, isLogged, dataList, dataLoaded]);

  const userInitialState = {
    nombre: "",
    apellidoPaterno: "",
    apellidoMaterno: "",
    fechaNacimiento: "",
    numeroEmpleado: 0,
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
      numeroEmpleado: 0,
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

  const eliminar = (dato) => {
    var opcion = window.confirm(
      "Estás Seguro que deseas Eliminar al usuario " + dato.id + "?"
    );
    if (opcion === true) {
      var contador = 0;
      var arreglo = userSelected.data;
      arreglo.map((registro) => {
        if (dato.numeroEmpleado === registro.numeroEmpleado) {
          arreglo.splice(contador, 1);
        }
        contador++;
      });
      setuserSelected({ data: arreglo, modalActualizar: false });
    }
  };

  // const insertar = () => {
  //   var valorNuevo = { ...userState };
  //   valorNuevo.numeroEmpleado = userState.numeroEmpleado;
  //   var lista = userSelected.data;
  //   lista.push(valorNuevo);
  //   console.log(lista);
  //   setuserSelected({ data: lista, modalInsertar: false });
  // };

  const onSubmit = (event) => {
    event.preventDefault();
    Registrar_Usuario(userState);
    setuserState(userInitialState);
    setDataLoaded(false);
    cerrarModalInsertar();
  };

  return (
    <><div className="container-fluid alturaUsuarios">
      <Container className="bg-dark text-white border">
        <br />
        <Button color="success" onClick={() => mostrarModalInsertar()}>
          Crear nuevo usuario
        </Button>
        <br />
        <br />
        <Table>
          <thead>
            <tr className="text-white">
              <th>Nombre</th>
              <th>Apellido Paterno</th>
              <th>Apellido Materno</th>
              <th>Fecha Nacimiento</th>
              <th>Numero Empleado</th>
            </tr>
          </thead>
          {isLogged && (
            <tbody>
              {userSelected.data.map((dato) => (
                <tr key={dato.id} className="text-white h5">
                  <td>{dato.nombre}</td>
                  <td>{dato.apellidoPaterno}</td>
                  <td>{dato.apellidoMaterno}</td>
                  <td>{dato.fechaNacimiento.slice(0,10)}</td>
                  <td>{dato.numeroEmpleado}</td>
                  <td>
                    <Button
                      color="primary"
                      onClick={() => mostrarModalActualizar(dato)}
                    >
                      Editar
                    </Button>
                    <Button color="danger" onClick={() => eliminar(dato)}>
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
            <h3>Registrar nuevo usuario</h3>
          </div>
        </ModalHeader>

        <ModalBody>
          <Form onSubmit={onSubmit}>
            <FormGroup>
              <label>Numero de Empleado:</label>

              <Form.Control
                required
                className="form-control"
                type="number"
                name="numeroEmpleado"
                maxLength="10" 
                minLength="10"
                onChange={(e) => onChange(e.target.name, e.target.value)}
              />
            </FormGroup>

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
              <label>Fecha de Nacimiento:</label>
              <Form.Control
                required
                className="form-control"
                type="date"
                name="fechaNacimiento"
                onChange={(e) => onChange(e.target.name, e.target.value)}
              />
            </FormGroup>
            <Button type="submit" color="primary">
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
      </div>
    </>
  );
}
