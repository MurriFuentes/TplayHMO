import {Form} from "react-bootstrap";
import { useState } from "react";
//import { guardarCliente } from "../services/API/contactList";
import {Registrar_Usuario} from "../services/API/UsersSignUp"
export default function Page_Usuarios() {

    const [nombre, setNombre] = useState("");
    const [apellidoPaterno, setApellidoPaterno] = useState("");
    const [apellidoMaterno, setApellidoMaterno] = useState("");
    const [fechaNacimiento, setFechaNacimiento] = useState("");
    const [numeroEmpleado, setNumeroEmpleado] = useState("");

    const handleSubmit = (event) => {
        console.log(nombre);
        console.log(apellidoPaterno);
        console.log(apellidoMaterno);
        console.log(fechaNacimiento);
        console.log(numeroEmpleado);
        event.preventDefault();
        Registrar_Usuario(
            nombre,
            apellidoPaterno,
            apellidoMaterno,
            fechaNacimiento,
            numeroEmpleado)
        alert("Usuario registrado con exito!", [
          { text: "OK", onPress: () => console.log("alert closed") },
        ]);
      };

    return(
        <div className="Section">
            <Form onSubmit={handleSubmit}>
                <h3>Registrar un Usuario</h3>

                <div className="form-group">
                    <label>Nombre</label>
                    <input type="text" className="form-control" onChange={(e) => setNombre(e.target.value)}/>
                </div>

                <div className="form-group">
                    <label>Apellido Paterno</label>
                    <input type="text" className="form-control" onChange={(e) => setApellidoPaterno(e.target.value)}/>
                </div>
                
                <div className="form-group">
                    <label>Apellido Materno</label>
                    <input type="text" className="form-control" onChange={(e) => setApellidoMaterno(e.target.value)}/>
                </div>

                <div className="form-group">
                    <label>Fecha de Nacimiento</label>
                    <input type="date" className="form-control" onChange={(e) => setFechaNacimiento(e.target.value)}/>
                </div>

                <div className="form-group">
                    <label>Numero de empleado</label>
                    <input type="text" className="form-control" onChange={(e) => setNumeroEmpleado(e.target.value)}/>
                </div>

                <button type="submit" className="btn btn-primary">Registrar</button>
                
            </Form>
        </div>
    );
}