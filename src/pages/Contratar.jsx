import { useState } from "react";
import { Form, FormGroup, Label, Button } from "reactstrap";
import * as icons from "react-icons/bs";

import { guardarCliente } from "../services/API/ContactList";
export default function Page_Contratar({ paqueteC, handleC }) {
    const paquete = paqueteC;
    const [nombre, setNombre] = useState("");
    const [telefono, setTelefono] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        guardarCliente(nombre, paquete, telefono);
        setTelefono("");
        setNombre("");
        if(paquete!=null){
            handleC();
        }
            
    }

    return (
        <div className="p-4 bg-black text-white">
            <Form className="Formulario" onSubmit={handleSubmit}>
                <FormGroup>
                    <Label className="">Nombre:</Label>
                    <input className="rounded fs-4 text-dark" type="text" required value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Juanito..." />
                </FormGroup>
                <FormGroup>
                    <Label className="margenDerecha w-100">Telefono: </Label>
                    <input className="rounded fs-4 text-dark" type="text" maxLength="10" minLength="10" required value={telefono} onChange={(e) => setTelefono(e.target.value)} placeholder="662..." />
                </FormGroup>

                {paqueteC &&<FormGroup className="paqueteMostrado bg-light">
                    <Label >Paquete</Label>
                    <p className="nombrePaquete">{paquete}</p>

                </FormGroup>

                }
                
                <Button className="btnContratar form-group bg-primary p-2" type="submit">Enviar <icons.BsFillEnvelopeFill /></Button>
            </Form>
        </div>

    )
}