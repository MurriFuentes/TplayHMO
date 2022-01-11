import useUser from "../hooks/useUser";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";

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
    <div className="Section">
      <h1>Inicia sesión</h1>
      {isLogginLoading && <strong>Comprobando Credenciales...</strong>}

      {!isLogginLoading && (
        <Form onSubmit={handleSubmit}>
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
            variant="primary"
            type="submit"
            style={{
              marginLeft: 72,
            }}
          >
            Enviar
          </Button>
        </Form>
      )}
      {hasLoginError && <strong>Credenciales Invalidas</strong>}
    </div>
  );
}
