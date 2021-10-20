import useUser from "../hooks/useUser";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Page_Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { isLogginLoading, hasLoginError, login, isLogged } = useUser();
    let history = useHistory();

    useEffect(() => {
        if (isLogged) history.push("./")
    }, [isLogged, history])

    const handleSubmit = (event) => {
        event.preventDefault();
        login({ username, password });

        /*
        if (!name || !password) alert("Llena los campos correctamente");
        axios.post("/authenticate", {
            nombre: name,
            password: password
        }).then((response) => {
            sessionStorage.setItem("token", response.data.token)
            console.log(response.data.token)
        })
        */
    }

    return (
        <div className="Section">
            <h1>Identificate</h1>
            {isLogginLoading && <span>Checking  Credentials</span>}
            {!isLogginLoading &&
                <form onSubmit={handleSubmit}>
                    <label>Nombre:
                        <input
                            placeholder="username"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </label>
                    <label>Contraseña:
                        <input
                            placeholder="********"
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
            }
            {
                hasLoginError && <strong>Credentials are invalid</strong>
            }
        </div>
    );
}