import { useState, useEffect } from "react";
import "./Cotizador.css";
import {
  guardarCotizacion,
  guardarCotizacionUsuario,
} from "../../services/API/UserQuotation";
import Button from "react-bootstrap/Button";
import { Form, Row, Col } from "react-bootstrap";
import InnerSectionInfo from "./InnerSectionInfo";
import TablaPrecios from './TablaPrecios'

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
      television: formState.televisionValue,
      // nuevoTotalPlayTv: formState.televisionValue === "1" ? true : false,
      netflix: formState.streamingValue === "1" ? true : false,
      amazon: formState.streamingValue === "2" ? true : false,
      // cantidadPantallasNetflix: 1,
      wifiExtender: formState.wifiExtenderValue.toString(10),
      tvAdicional: formState.tvExtraValue.toString(10),
      hbo: formState.streamingValue === "1" ? true : false,
      star: formState.streamingValue === "2" ? true : false,
      // nuevoTotalPlayTvAdicional: 
      //   formState.televisionValue === "2" ? true : false,
      canales140: formState.canalesValue === "1" ? true : false,
      canales230: formState.canalesValue === "2" ? true : false,
      canales280: formState.canalesValue === "3" ? true : false,
    };

    var username = window["username"];
    var data = {
      numeroEmpleado: username,
    };

    if ((username === "admin") | (username === null)) {
      guardarCotizacion({ "paquete": paquete, "numeroTelefono": formState.telefono, "correoElectronico": formState.correo });
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

  useEffect(() => {
    setFormState((prev) => ({
      ...prev,
      televisionValue: "1",
    }));
  }, [])
  

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
    if (index == 1) {
      setFormState((prev) => ({
        ...prev,
        televisionValue: "1",
      }));
    }
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
      <div className="container-fluid">
        <div className="row">
          <div className="cotizador_container col-12 col-lg-7">
            <div className="bloc-tabs h5">
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
              <div className="content active-content">
                <div className="tab_infoContainer mb-3">
                  <InnerSectionInfo
                    onChange={onChange}
                    formState={formState}
                    data={MegasDisp}
                    title="Elige tu velocidad de internet"
                    name="megasValue"
                    toggleState={1}
                  />
                </div>

                <div className="vertical mb-3">
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

                <div className="vertical mb-3">
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

                <div className="Row mb-3">
                  <div className="tab_InnerSection">
                  <h5 className="text-white">¿Wifi Extender?</h5>
                    <div className="button_container">
                      <Button
                        variant="primary"
                        onClick={onDecrementWifi}
                        disabled={formState.wifiExtenderValue <= 0 ? true : false}
                      >
                        -
                      </Button>
                      <h3 className="text-white h2">{formState.wifiExtenderValue}</h3>
                      <Button
                        variant="primary"
                        onClick={onIncrementWifi}
                        disabled={formState.wifiExtenderValue >= 4 ? true : false}
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
                    <h5 className="text-white">¿Television Extra?</h5>
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
                      <h3 className="text-white h2">{formState.tvExtraValue}</h3>
                      <Button
                        variant="primary"
                        onClick={onIncrementTvExtra}
                        disabled={
                          formState.tvExtraValue >= 4
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
                        <Col className="col-6">
                          <Form.Group className="mb-3">
                            <Form.Control
                              required
                              type="email"
                              name="correo"
                              minLength={10}
                              placeholder="Ejemplo@gmail.com"
                              value={formState.correo}
                              onChange={onChange}
                              className="bg-dark text-white inputsCotizador p-2"
                            />
                          </Form.Group>
                        </Col>
                        <Col className="col-6">
                          <Form.Group className="mb-3">
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
                              placeholder="662..."
                              value={formState.telefono}
                              onChange={onChange}
                              className="bg-dark text-white inputsCotizador p-2"
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col className="col-6">
                          <Button variant="dark vertical" type="submit" size="lg">
                            Cotizar
                          </Button>

                        </Col>
                        <Col className="col-6">
                          <Button variant="dark vertical" onClick={() => setFormState(initialState)} size="lg">
                            Reiniciar
                          </Button>
                        </Col>
                      </Row>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-5">
            <TablaPrecios formState={formState} />
          </div>
        </div>
      </div>
    </>
  );
}