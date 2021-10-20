
import { useState } from "react";
import axios from "axios";

export default function Page_Login() {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {

        event.preventDefault();
        
        if (!name || !password) alert("Llena los campos correctamente");
        axios.post("/authenticate", {
            nombre: name,
            password: password
        }).then((response) => {
            sessionStorage.setItem("auth", response.data)
        })

    }

    return(
        <div>
            <h1>Paquete 1</h1>

            <form onSubmit={handleSubmit}>
                <label>Nombre:
                    <input
                    type="text" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
                </label>
                <label>Contraseña:
                    <input
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <label>
                    <button type="submit">
                            Enviar
                    </button>
                </label>
            </form>
        </div>
    );
}