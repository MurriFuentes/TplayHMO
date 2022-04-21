import { useState } from "react";
import "./Cotizador.css";
import {
  guardarCotizacion,
  guardarCotizacionUsuario,
} from "../../services/API/UserQuotation";
import Button from "react-bootstrap/Button";
import { Form, Row, Col } from "react-bootstrap";
import InnerSectionInfo from "./InnerSectionInfo";
import { BsAlignCenter } from "react-icons/bs";

const initialState = {
  megasValue: "20",
  canalesValue: "0",
  televisionValue: "0",
  tvExtraValue: 0,
  streamingValue: "0",
  wifiExtenderValue: 0,
  tvPremiumValue: "0",
  telefono: "",
  correo: "",
};

export default function Cotizador() {
  const [toggleState, setToggleState] = useState(1);
  const [formState, setFormState] = useState(initialState);

  const handleSubmit = (event) => {
    event.preventDefault();

    let paquete = {
      velocidadInternet: formState.megasValue,
      television: formState.televisionValue !== "0" ? true : false,
      nuevoTotalPlayTv: formState.televisionValue === "1" ? true : false,
      netflix: formState.streamingValue === "1" ? true : false,
      amazon: formState.streamingValue === "2" ? true : false,
      cantidadPantallasNetflix: 1,
      wifiExtender: formState.wifiExtenderValue,
      tvAdicional: formState.tvExtraValue,
      nuevoTotalPlayTvAdicional:
        formState.televisionValue === "2" ? true : false,
      canales140: formState.canalesValue === "1" ? true : false,
      canales230: formState.canalesValue === "2" ? true : false,
      canales280: formState.canalesValue === "3" ? true : false,
    };

    var username = window["username"];
    var data = {
      numeroEmpleado: username,
    };

    if ((username === "admin") | (username === null)) {
      guardarCotizacion(paquete, formState.telefono, formState.correo);
    } else {
      guardarCotizacionUsuario(
        paquete,
        formState.telefono,
        formState.correo,
        data
      );
    }

    setFormState(initialState);
  };

  const onChange = (event) => {
    setFormState((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const onDecrementWifi = (event) => {
    setFormState((prev) => ({
      ...prev,
      wifiExtenderValue: prev.wifiExtenderValue - 1,
    }));
  };

  const onIncrementWifi = (event) => {
    setFormState((prev) => ({
      ...prev,
      wifiExtenderValue: prev.wifiExtenderValue + 1,
    }));
  };

  const onDecrementTvExtra = (event) => {
    setFormState((prev) => ({
      ...prev,
      tvExtraValue: prev.tvExtraValue - 1,
    }));
  };

  const onIncrementTvExtra = (event) => {
    setFormState((prev) => ({
      ...prev,
      tvExtraValue: prev.tvExtraValue + 1,
    }));
  };

  const toggleTab = (index) => {
    setToggleState(index);
    setFormState(initialState);
  };

  const Canales = [
    { name: "140", value: "1" },
    { name: "230", value: "2" },
    { name: "280", value: "3" },
  ];

  const Television = [
    { name: "TotalPlayTv", value: "1" },
    { name: "TotalPlayTv+", value: "2" },
  ];

  const Streaming = [
    { name: "Netflix", value: "1" },
    { name: "Prime Video", value: "2" },
  ];

  const Premium = [
    { name: "HBO", value: "1" },
    { name: "Star Premium", value: "2" },
  ];

  const MegasDisp = [
    { name: "20 Mb", value: "20" },
    { name: "40 Mb", value: "40" },
    { name: "100 Mb", value: "100" },
    { name: "200 Mb", value: "200" },
    { name: "500 Mb", value: "500" },
    { name: "1000 Mb", value: "1000" },
  ];

  return (
    <>
      <div className="cotizador_container">
        <div className="bloc-tabs">
          <button
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            Triple Play
          </button>
          <button
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            Doble Play
          </button>
        </div>

        <div className="content-tabs">
          <div className="content  active-content">
            <div className="tab_infoContainer">
              <InnerSectionInfo
                onChange={onChange}
                formState={formState}
                data={MegasDisp}
                title="Elige tu velocidad de internet"
                name="megasValue"
                toggleState={1}
              />
            </div>

            <div className="vertical">
              <InnerSectionInfo
                onChange={onChange}
                formState={formState}
                data={Premium}
                title="¿TV Premium?"
                name="tvPremiumValue"
                toggleState={toggleState}
              />

              <InnerSectionInfo
                onChange={onChange}
                formState={formState}
                data={Television}
                title="Television"
                name="televisionValue"
                toggleState={toggleState}
              />
            </div>

            <div className="vertical">
              <InnerSectionInfo
                onChange={onChange}
                formState={formState}
                data={Streaming}
                title="¿Servicio de Streaming?"
                name="streamingValue"
                toggleState={1}
              />

              <InnerSectionInfo
                onChange={onChange}
                formState={formState}
                data={Canales}
                title="¿Mas canales?"
                name="canalesValue"
                toggleState={toggleState}
              />
            </div>

            <div className="Row">
              <div className="tab_InnerSection">
                <h5>¿Wifi Extender?</h5>
                <div className="button_container">
                  <Button
                    variant="primary"
                    onClick={onDecrementWifi}
                    disabled={formState.wifiExtenderValue <= 0 ? true : false}
                  >
                    -
                  </Button>
                  <h3>{formState.wifiExtenderValue}</h3>
                  <Button
                    variant="primary"
                    onClick={onIncrementWifi}
                    disabled={formState.wifiExtenderValue >= 5 ? true : false}
                  >
                    +
                  </Button>
                </div>
              </div>
              <div
                className={
                  "tab_InnerSection " + (toggleState === 2 ? "disabled" : "")
                }
              >
                <h5>¿Television Extra?</h5>
                <div className="button_container">
                  <Button
                    variant="primary"
                    onClick={onDecrementTvExtra}
                    disabled={
                      formState.tvExtraValue <= 0
                        ? true
                        : false || toggleState === 2
                    }
                  >
                    -
                  </Button>
                  <h3>{formState.tvExtraValue}</h3>
                  <Button
                    variant="primary"
                    onClick={onIncrementTvExtra}
                    disabled={
                      formState.tvExtraValue >= 5
                        ? true
                        : false || toggleState === 2
                    }
                  >
                    +
                  </Button>
                </div>
              </div>
            </div>
            <div className="tab_infoContainer">
              <div className="tab_InnerSection">
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col>
                      <Form.Group className="mb-3">
                        <Form.Label></Form.Label>
                        <Form.Control
                          required
                          type="email"
                          name="correo"
                          minLength={10}
                          placeholder="Correo (Opcional)"
                          value={formState.correo}
                          onChange={onChange}
                        />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group className="mb-3">
                        <Form.Label></Form.Label>
                        <Form.Control
                          onKeyPress={(event) => {
                            if (!/[0-9]/.test(event.key)) {
                              event.preventDefault();
                            }
                          }}
                          maxLength={10}
                          minLength={10}
                          required
                          name="telefono"
                          placeholder="Telefono (Opcional)"
                          value={formState.telefono}
                          onChange={onChange}
                        />
                      </Form.Group>
                    </Col>
                    <Col className="vertical">
                      <Button variant="primary" type="submit" size="lg">
                        Cotizar
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}