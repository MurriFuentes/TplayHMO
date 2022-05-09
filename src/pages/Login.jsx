import useUser from "../hooks/UseUser";
import * as icons from "react-icons/bs";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import Slide01 from "../images/telefono.png";

export default function Page_Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { isLogginLoading, hasLoginError, login, isLogged } = useUser();

  let history = useHistory();

  useEffect(() => {
    if (isLogged) {
      history.replace("./");
      onLogin && onLogin();
    }
  }, [history, onLogin, isLogged]);

  const handleSubmit = (event) => {
    event.preventDefault();
    login({ username, password });

  };

  return (
    <div className="container">
      <div className="bg-black col-12 col-md-8 m-auto pt-5">
        <div className="">
          <div className="m-auto bg-dark ps-5 pt-5 pb-5 pe-5 rounded border w-100">
            <h1 className="bg-primary p-3 h1 text-center border rounded fw-bolder">Inicia sesión</h1>
            {isLogginLoading && <strong className="text-warning">Comprobando Credenciales...</strong>}

            {!isLogginLoading && (
              <Form onSubmit={handleSubmit} className="rounded border bg-black text-white p-5">
                <Form.Group className="mb-3">
                  <h2 className="text-white h2 text-center">Nombre de Usuario<icons.BsFillPersonFill /></h2>
                  <Form.Control
                    type="user"
                    placeholder="Ej: Juan Perez"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="fw-bolder fs-3"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <h2 className="text-white h2 text-center">Contraseña<icons.BsFillLockFill /></h2>
                  <Form.Control
                    type="password"
                    placeholder="Ej: 123"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="fw-bolder fs-3"
                  />
                </Form.Group>
                <div className="m-auto">

                  <Button
                    variant="dark"
                    type="submit"
                    className="text-primary w-100 p-2 mt-3 fs-3"
                  >
                    Login
                  </Button>
                </div>
              </Form>
            )}
            {hasLoginError && <strong className="text-warning">Credenciales Invalidas</strong>}
          </div>
        </div>
      </div>
    </div>
  );
}
