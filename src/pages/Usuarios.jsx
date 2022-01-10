import {Form} from "react-bootstrap";
import { useState , useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
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
import Registrar_Usuario from "../services/API/UsersSignUp"
import useUser from "../hooks/useUser";
import { useHistory } from "react-router-dom";

export default function Page_Usuarios() {

    const { isLogged } = useUser();
    
    let history = useHistory();

    useEffect(() => {
      if (!isLogged) {
        history.replace("./");
      }
    }, [history, isLogged]);


    const data = [
        { numeroEmpleado: 1, nombre: "Naruto", apellidopaterno: "Naruto", apellidomaterno: "uzumaki", fechaNacimiento: "2016/06/06"},
        { numeroEmpleado: 2, nombre: "Naruto", apellidopaterno: "Naruto", apellidomaterno: "uzumaki", fechaNacimiento: "2016/06/06"},
    ];

    const userInitialState = {
        numeroEmpleado: 0,
        nombre : "",
        apellidopaterno: "",
        apellidomaterno: "",
        fechaNacimiento: "",
    };

    const initialState = {
        data: data,
        modalActualizar: false,
        modalInsertar: false,
        form: {
            numeroEmpleado: 0,
            nombre: "", 
            apellidopaterno: "", 
            apellidomaterno: "", 
            fechaNacimiento: "",
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
        var opcion = window.confirm("Estás Seguro que deseas Eliminar al usuario "+ dato.numeroEmpleado+ "?");
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
    
    const insertar= ()=>{
        var valorNuevo= {...userState};
        valorNuevo.numeroEmpleado = userState.numeroEmpleado;
        var lista = userSelected.data;
        lista.push(valorNuevo);
        setuserSelected({ data: lista, modalInsertar: false });
    }

    const onSubmit= (event)=>{
        event.preventDefault();
        //Registrar_Usuario(userState)
        setuserState(userInitialState);
    }
    
    return(
    <>
        <Container>
        <br />
          <Button color="success" onClick={() => mostrarModalInsertar()}>Crear nuevo usuario</Button>
          <br />
          <br />
          <Table>
            <thead>
              <tr>
                <th>Numero Empleado</th>
                <th>Nombre</th>
                <th>Apellido Paterno</th>
                <th>Apellido Materno</th>
                <th>Fecha Nacimiento</th>
              </tr>
            </thead>

            <tbody>
              {userSelected.data.map((dato) => (
                <tr key={dato.numeroEmpleado}>
                  <td>{dato.numeroEmpleado}</td>
                  <td>{dato.nombre}</td>
                  <td>{dato.apellidopaterno}</td>
                  <td>{dato.apellidomaterno}</td>
                  <td>{dato.fechaNacimiento}</td>
                  <td>
                    <Button color="primary"onClick={() => mostrarModalActualizar(dato)}>
                      Editar
                    </Button>
                    <Button color="danger" onClick={()=> eliminar(dato)}>Eliminar</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
        
        <Modal  isOpen={userSelected.modalInsertar}>
          <ModalHeader>
           <div><h3>Registrar nuevo usuario</h3></div>
          </ModalHeader>

          <ModalBody>
            <Form onSubmit={onSubmit}>
                <FormGroup>
                    <label>
                        Numero de Empleado: 
                    </label>
                    
                    <Form.Control
                        required
                        className="form-control"
                        type="number"
                        name="numeroEmpleado"
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
                        name="apellidopaterno" 
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
                        name="apellidomaterno" 
                        onChange={(e) => onChange( e.target.name ,e.target.value)} />
                    </FormGroup>

                <FormGroup>
                    <label>
                        Fecha de Nacimiento: 
                    </label>
                    <Form.Control 
                        required 
                        className="form-control"
                        type="date"
                        name="fechaNacimiento" 
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