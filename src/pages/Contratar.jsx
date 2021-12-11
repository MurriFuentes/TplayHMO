import { useState} from "react";
import { Form, FormGroup, Label , Button } from "reactstrap";
import { guardarCliente } from "../services/API/contactList";
export default function Page_Contratar() {
    
    const [nombre, setNombre] = useState("");
    const [telefono, setTelefono] = useState("");
    const [paquete, setPaquete] = useState("");

    
    const handleSubmit = (event) => {
        event.preventDefault();
        guardarCliente(nombre,paquete,telefono);
        
        alert('Contratacion realizada exitosamente!',[
            {text: 'OK', onPress:()=>console.log('alert closed')}
        ]);
    }

    return(
        <div className="Section">
             <div className="principal">
                <div className="secundario">
                    <Form className="Formulario" onSubmit={handleSubmit}>
                        <FormGroup>
                            <Label>Nombre</Label>
                            <input type="text" required value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Nombre" />
                        </FormGroup>
                        <FormGroup>
                            <Label>Telefono</Label>
                            <input type="text" required value={telefono} onChange={(e) => setTelefono(e.target.value)} placeholder="Telefono" />
                        </FormGroup>
                        <FormGroup>
                            <Label>Paquete</Label>
                            <input type="text" required value={paquete} onChange={(e) => setPaquete(e.target.value)} placeholder="Paquete" />
                        </FormGroup>
                            <Button className="btnContratar form-group" type="submit">Contratar</Button>
                    </Form>
                </div>
            </div>
        </div>
    )
}