import {Form} from "react-bootstrap";
import { useState , useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { getClients } from "../services/API/UsersClient";
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

export default function Page_Clientes() {
    const [dataList, setDataList] = useState([]);
    const [dataLoaded, setDataLoaded] = useState(false);
    const { isLogged } = useUser();
    let history = useHistory();
    

  const getListUsers = async () => {
    const data = await getClients();
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

    console.log(window["clients"])
  }, [history, isLogged, dataList, dataLoaded]);

    const userInitialState = {
      nombre : "",
      apellido_paterno: "",
      apellido_materno: "",
      fecha_contratacion: "",
      paquete_contratado: "",
      primer_pago: "",
      segundo_pago: "",
      id_usuario: 0
  };

  const initialState = {
      data: dataList,
      modalActualizar: false,
      modalInsertar: false,
      form: {
        nombre : "",
        apellido_paterno: "",
        apellido_materno: "",
        fecha_contratacion: "",
        paquete_contratado: "",
        primer_pago: "",
        segundo_pago: "",
        id_usuario: 0
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
        valorNuevo.id_usuario = userState.id_usuario;
        var lista = userSelected.data;
        lista.push(valorNuevo);
        console.log(lista);
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
                <th>Fecha Nacimiento</th>
                <th>Numero Empleado</th>
              </tr>
            </thead>
            {isLogged &&
            <tbody>
              {userSelected.data.map((dato) => (
                <tr key={dato.id_usuario}>
                  <td>{dato.nombre}</td>
                  <td>{dato.apellido_paterno}</td>
                  <td>{dato.apellido_materno}</td>
                  <td>{dato.fecha_contratacion}</td>
                  <td>{dato.paquete_contratado}</td>
                  <td>{dato.primer_pago}</td>
                  <td>{dato.segundo_pago}</td>
                  <td>{dato.id_usuario}</td>
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
               
                <FormGroup>
                    <label>
                        Empleado: 
                    </label>
                    
                    <Form.Control
                        required
                        className="form-control"
                        type="number"
                        name="id_usuario"
                        minlenght={7}
                        onChange={(e) => onChange( e.target.name ,e.target.value)}
                    />
                </FormGroup>
                
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
                        name="apellido_paterno" 
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
                        name="apellido_materno" 
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
                        name="fecha_contratacion" 
                        onChange={(e) => onChange( e.target.name ,e.target.value)} />
                </FormGroup>

                <FormGroup>
                    <label>
                        paquete: 
                    </label>
                    <select name="paquete_contratado" required onChange={(e) => onChange( e.target.name ,e.target.value)}>
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
                          required 
                          className="form-control"
                          type="text"
                          name="primer_pago" 
                          onChange={(e) => onChange( e.target.name ,e.target.value)} />
                    </FormGroup>

                    <FormGroup>
                    <label>
                        Segundo pago: 
                    </label>
                    <Form.Control 
                        required 
                        className="form-control"
                        type="text"
                        name="segundo_pago" 
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