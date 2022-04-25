import { useState} from "react";
import { Form, FormGroup, Label , Button } from "reactstrap";

import { guardarCliente } from "../services/API/ContactList";
export default function Page_Contratar() {
    const paquete = window.localStorage.getItem('SelectedOption');
    const [nombre, setNombre] = useState("");
    const [telefono, setTelefono] = useState("");
    
    const handleSubmit = (event) => {
        event.preventDefault();
        guardarCliente(nombre,paquete,telefono);
    }

    return(
        <div className="Section">
             <div className="principal">
                <div className="secundario">
                    <Form className="Formulario" onSubmit={handleSubmit}>
                        <FormGroup>
                            <Label className="margenDerecha">Nombre:</Label>
                            <input className="rounded" type="text" required value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Nombre" />
                        </FormGroup>
                        <FormGroup>
                            <Label className="margenDerecha">Telefono: </Label>
                            <input className="rounded"type="text" maxLength="10" minLength="10" required value={telefono} onChange={(e) => setTelefono(e.target.value)} placeholder="Telefono" />
                        </FormGroup>
                        <FormGroup className="paqueteMostrado">
                            <Label >Paquete</Label>
                            <p className="nombrePaquete">{paquete}</p>
                            
                        </FormGroup>
                            <Button className="btnContratar form-group" type="submit">Contratar</Button>
                    </Form>
                </div>
            </div>
        </div>
    )
}