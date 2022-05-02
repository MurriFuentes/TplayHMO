import useUser from "../hooks/UseUser";
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
    <div className="bg-success h-100 container-fluid d-flex">
      <div className="card-group m-auto">
        <div className="m-auto bg-primary ps-5 pt-5 pb-5 pe-5 rounded border w-100">
          <h1 className="bg-warning p-1 text-center border rounded">Inicia sesión</h1>
          {isLogginLoading && <strong>Comprobando Credenciales...</strong>}

          {!isLogginLoading && (
            <Form onSubmit={handleSubmit} className="rounded border bg-danger p-5">
              <Form.Group className="mb-3">
                <Form.Label>Nombre de usuario</Form.Label>
                <Form.Control
                  type="user"
                  placeholder="Ej: Juan Perez"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Ej: 123"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Button
                variant="dark"
                type="submit"
              >
                Enviar
              </Button>
            </Form>
          )}
          {hasLoginError && <strong>Credenciales Invalidas</strong>}
        </div>
      </div>
    </div>
  );
}
