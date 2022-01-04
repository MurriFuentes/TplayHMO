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
                            <input type="text" maxlength="10" minlength="10" required value={telefono} onChange={(e) => setTelefono(e.target.value)} placeholder="Telefono" />
                        </FormGroup>
                        <FormGroup>
                            <Label>Paquete</Label>
                            <select required value={paquete} onChange={(e) => setPaquete(e.target.value)}>
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
                            <Button className="btnContratar form-group" type="submit">Contratar</Button>
                    </Form>
                </div>
            </div>
        </div>
    )
}