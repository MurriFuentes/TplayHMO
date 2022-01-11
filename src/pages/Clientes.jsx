export default function Page_Clientes() {
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
    console.log("Componente renderizado")
    if (isLogged && dataList.length === 0) {
      getListUsers();
    }
    if(window["users"]){
      userSelected.data = window["users"].data
    }

    console.log(window["users"])
  }, [history, isLogged, dataList, dataLoaded]);

    const userInitialState = {
      nombre : "",
      apellidoPaterno: "",
      apellidoMaterno: "",
      fechaNacimiento: "",
      numeroEmpleado: 0
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
          numeroEmpleado: 0
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
        var opcion = window.confirm("Estás Seguro que deseas Eliminar al Cliente "+ dato.id+ "?");
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
        console.log(lista);
        setuserSelected({ data: lista, modalInsertar: false });
    }

    const onSubmit= (event)=>{
        event.preventDefault();
        Registrar_Usuario(userState)
        setuserState(userInitialState);
    }
    
    return(
    <>
        
        <Container>
        <br />
          <Button color="success" onClick={() => mostrarModalInsertar()}>Registrar nuevo cliente</Button>
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
                <tr key={dato.id}>
                  <td>{dato.nombre}</td>
                  <td>{dato.apellidoPaterno}</td>
                  <td>{dato.apellidoMaterno}</td>
                  <td>{dato.fechaNacimiento}</td>
                  <td>{dato.numeroEmpleado}</td>
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