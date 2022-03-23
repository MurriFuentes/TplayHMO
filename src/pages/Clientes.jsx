import {Form} from "react-bootstrap";
import { useState , useEffect} from "react";
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
} from "reactstrap";
import {Registrar_Cliente} from "../services/API/UsersSignUp"
import useUser from "../hooks/useUser";
import { useHistory } from "react-router-dom";
import { Empty } from "antd";

export default function Page_Clientes() {
    const [dataList, setDataList] = useState([]);
    const [dataLoaded, setDataLoaded] = useState(false);
    const { isLogged } = useUser();
    let history = useHistory();
    var username = window["username"];
    var usuar = {
        numeroEmpleado: username
    }

  const getListUsers = async () => {

    const data = await getClients(usuar);

    setDataList(data);
    setDataLoaded(true);

    console.log(dataList);
  };

  useEffect(() => {
    if (!isLogged) {
      history.replace("./");
    }
    console.log("Componente renderizado")
    if (isLogged && dataList.length === 0) {
      getListUsers();
    }
    if(window["clients"]){
      userSelected.data = window["clients"].data
    }
    console.log("WINDOW")
    console.log(window["clients"])
  }, [history, isLogged, dataList, dataLoaded]);

    const userInitialState = {
      nombre : "",
      apellidoPaterno: "",
      apellidoPaterno: "",
      fechaNacimiento: "",
      paqueteContratado: "",
      primerPago: false,
      segundoPago: false,
      usuario: usuar
    }
  const initialState = {
      data: dataList,
      modalActualizar: false,
      modalInsertar: false,
      form: {
        nombre : "",
        apellidoPaterno: "",
        apellidoPaterno: "",
        fechaNacimiento: "",
        paqueteContratado: "",
        primerPago: false,
        segundoPago: false,
        usuario: usuar
      }
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
        console.log("TEST")
      };

    const eliminar = (dato) => {
        var opcion = window.confirm("Estás Seguro que deseas Eliminar al cliente "+ dato.id+ "?");
        if (opcion === true) {
            var contador = 0;
            var arreglo = userSelected.data;
            arreglo.map((registro) => {
            if (dato.id_usuario === registro.id_usuario) {
                arreglo.splice(contador, 1);
            }
                contador++;
            });
            setuserSelected({ data: arreglo, modalActualizar: false });
        }
    };
    
    const insertar= ()=>{
        var valorNuevo= {...userState};
        valorNuevo.id = userState.id +1;
        var lista = userSelected.data;
        lista.push(valorNuevo);
        setuserSelected({ data: lista, modalInsertar: false });
    }

    const onSubmit= (event)=>{
        event.preventDefault();
        Registrar_Cliente(userState)
        setuserState(userInitialState);
    }
    
    return(
    <>
        
        <Container>
        <br />
          <Button color="success" onClick={() => mostrarModalInsertar()}>Crear nuevo cliente</Button>
          <br />
          <br />
          <Table>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Apellido Paterno</th>
                <th>Apellido Materno</th>
                <th>Fecha contratacion</th>
                <th>Paquete Contratado</th>
                <th>Primer pago</th>
                <th>Segundo pago</th>
                <th>Numero Empleado</th>
              </tr>
            </thead>
            {isLogged &&
            <tbody>
              {userSelected.data.map((dato) => (
                <tr key={dato.id}>
                  <td>{dato.nombre}</td>
                  <td>{dato.apellidoPaterno}</td>
                  <td>{dato.apellidoMaterno}</td>
                  <td>{dato.fechaNacimiento}</td>
                  <td>{dato.paqueteContratado}</td>
                  <td>{dato.primerPago}</td>
                  <td>{dato.segundoPago}</td>
                  <td>
                    <Button color="primary"onClick={() => mostrarModalActualizar(dato)}>
                      Editar
                    </Button>
                    <Button color="danger" onClick={()=> eliminar(dato)}>Eliminar</Button>
                  </td>
                </tr>
              ))}
            </tbody>
            }
          </Table>
        </Container>
        
        <Modal  isOpen={userSelected.modalInsertar}>
          <ModalHeader>
           <div><h3>Registrar nuevo cliente</h3></div>
          </ModalHeader>

          <ModalBody>
            <Form onSubmit={onSubmit}>
                
                <FormGroup >
                    <label>
                        Nombre: 
                    </label>
                    <Form.Control 
                        required 
                        className="form-control"
                        type="text"
                        name="nombre" 
                        onChange={(e) => onChange( e.target.name ,e.target.value)} />
                </FormGroup>
                    
                <FormGroup>
                    <label>
                            Apellido Paterno: 
                    </label>
                    <Form.Control 
                        required 
                        className="form-control"
                        type="text"
                        name="apellidoPaterno" 
                        onChange={(e) => onChange( e.target.name ,e.target.value)} />
                </FormGroup>

                <FormGroup>
                    <label>
                        Apellido Materno: 
                    </label>
                    <Form.Control 
                        required 
                        className="form-control"
                        type="text"
                        name="apellidoMaterno" 
                        onChange={(e) => onChange( e.target.name ,e.target.value)} />
                </FormGroup>

                <FormGroup>
                    <label>
                        Fecha de contratacion: 
                    </label>
                    <Form.Control 
                        required 
                        className="form-control"
                        type="date"
                        name="fechaNacimiento" 
                        onChange={(e) => onChange( e.target.name ,e.target.value)} />
                </FormGroup>

                <FormGroup>
                    <label>
                        paquete: 
                    </label>
                    <select value="Internet 40 megas" name="paqueteContratado" required onChange={(e) => onChange( e.target.name ,e.target.value)}>
                        <option selected value="Internet 20 megas">Internet 20 megas</option>
                        <option value="Internet 40 megas">Internet 40 megas</option>
                        <option value="Internet 100 megas">Internet 100 megas</option>
                        <option value="Internet 200 megas">Internet 200 megas</option>
                        <option value="Internet 500 megas">Internet 500 megas</option>
                        <option value="Internet 1000 megas">Internet 1000 megas</option>
                        <option value="TV + Internet 20 megas">TV + Internet 20 megas</option>
                        <option value="TV + Internet 40 megas">TV + Internet 40 megas</option>
                        <option value="TV + Internet 100 megas">TV + Internet 100 megas</option>
                        <option value="TV + Internet 200 megas">TV + Internet 200 megas</option>
                        <option value="TV + Internet 500 megas">TV + Internet 500 megas</option>
                        <option value="TV + Internet 1000 megas">TV + Internet 1000 megas</option>
                    </select>
                    </FormGroup>
                  
                    <FormGroup>
                      <label>
                          Primer pago: 
                      </label>
                      <Form.Control
                          className="form-control"
                          type="checkbox"
                          name="primerPago" 
                          onChange={(e) => onChange( e.target.name ,e.target.value)} />
                    </FormGroup>

                    <FormGroup>
                    <label>
                        Segundo pago: 
                    </label>
                    <Form.Control
                        className="form-control"
                        type="checkbox"
                        name="segundoPago" 
                        onChange={(e) => onChange( e.target.name ,e.target.value)} />
                    </FormGroup>

                <Button
                    type="submit"
                    color="primary"
                    onClick={() => insertar()}
                    >
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

          <ModalFooter>
           
          </ModalFooter>
        </Modal>
    </>  
    );
}