import { useState } from "react";
import { guardarCliente } from "../services/API/ContactList";


export default function Contratar() {
  const [Nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [paquete, setPaquete] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    guardarCliente(Nombre, telefono, paquete);
  };

  return (
    <>
      <div className="cardContainer">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={Nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Nombre"
          />
          <input
            type="tel"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            placeholder="Telefono"
          />
          <input
            type="text"
            vale={paquete}
            onChange={(e) => setPaquete(e.target.value)}
            placeholder="Paquete"
          />
          <button type="submit">Contratar</button>
        </form>
      </div>
    </>
  );
}
