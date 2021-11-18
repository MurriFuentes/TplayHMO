import { useState } from "react";
import "./Cotizador.css";
import { guardarCotizacion } from "../../services/Service_Cotizar";
import ButtonGroup from "react-bootstrap/esm/ButtonGroup";
import { ToggleButton } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Form, Row, Col } from "react-bootstrap";

export default function Cotizador() {
  const [megasValue, setMegasValue] = useState("1");
  const [canalesValue, setCanalesValue] = useState("0");
  const [televisionValue, setTelevisionValue] = useState("0");
  const [tvExtraValue, setTvExtraValue] = useState(0);
  const [streamingValue, setStreamingValue] = useState("0");
  const [wifiExtenderValue, setWifiExtenderValue] = useState(0);
  const [tvPremiumValue, setTvPremiumValue] = useState("0");
  const [telefono, setTelefono] = useState("");
  const [tv, setTV] = useState(false);
  const [correo, setCorreo] = useState("");
  const [toggleState, setToggleState] = useState(1);

  const handleSubmit = (event) => {
    event.preventDefault();

    let paquete = {
      velocidadInternet: megasValue,
      television: televisionValue !== "0"? true: false,
      nuevoTotalPlayTv: televisionValue === "1"? true: false,
      netflix: streamingValue === "1" ? true : false,
      amazon: streamingValue === "2" ? true : false,
      cantidadPantallasNetflix: 1,
      wifiExtender: wifiExtenderValue,
      tvAdicional: tvExtraValue,
      nuevoTotalPlayTvAdicional: televisionValue === "2"? true: false,
      canales140: canalesValue === "1" ? true : false,
      canales230: canalesValue === "2" ? true : false,
      canales280: canalesValue === "3" ? true : false,
    };

    guardarCotizacion(paquete, telefono, correo );
  };

  const TV = () => {
    tv ? setTV(false) : setTV(true);
  };

  const toggleTab = (index) => {
    setToggleState(index);
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
    { name: "10 Mb", value: "10" },
    { name: "20 Mb", value: "20" },
    { name: "50 Mb", value: "50" },
    { name: "100 Mb", value: "100" },
    { name: "150 Mb", value: "150" },
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
              <div className="tab_InnerSection">
                <h2>Elige tu velocidad de internet</h2>
                <div className="button_container"></div>
                <ButtonGroup>
                  {MegasDisp.map((radio, idx) => (
                    <ToggleButton
                      key={idx}
                      id={`radio-${idx}`}
                      type="radio"
                      variant={idx % 2 ? "outline-success" : "outline-danger"}
                      name="radio"
                      value={radio.value}
                      checked={megasValue === radio.value}
                      onChange={(e) => setMegasValue(e.currentTarget.value)}
                    >
                      {radio.name}
                    </ToggleButton>
                  ))}
                </ButtonGroup>
              </div>
            </div>

            <div className="Row">
              <div className="tab_InnerSection">
                <h2>¿TV Premium?</h2>
                <div className="button_container"></div>
                <ButtonGroup>
                  {Premium.map((Premium, idx) => (
                    <ToggleButton
                      key={idx}
                      id={`Premium-${idx}`}
                      type="radio"
                      variant={idx % 2 ? "outline-success" : "outline-danger"}
                      name="Premium"
                      value={Premium.value}
                      checked={tvPremiumValue === Premium.value}
                      disabled={toggleState === 2}
                      onChange={(e) => setTvPremiumValue(e.currentTarget.value)}
                    >
                      {Premium.name}
                    </ToggleButton>
                  ))}
                </ButtonGroup>
              </div>
              <div className="tab_InnerSection">
                <h2>Television</h2>
                <div className="button_container">
                  <ButtonGroup>
                    {Television.map((Television, idx) => (
                      <ToggleButton
                        key={idx}
                        id={`Television-${idx}`}
                        type="radio"
                        variant={idx % 2 ? "outline-success" : "outline-danger"}
                        name="Telev"
                        value={Television.value}
                        checked={televisionValue === Television.value}
                        disabled={toggleState === 2}
                        onChange={(e) =>
                          setTelevisionValue(e.currentTarget.value)
                        }
                      >
                        {Television.name}
                      </ToggleButton>
                    ))}
                  </ButtonGroup>
                </div>
              </div>
            </div>

            <div className="Row">
              <div className="tab_InnerSection">
                <h2>¿Servicio de Streaming?</h2>
                <div className="button_container"></div>
                <ButtonGroup>
                  {Streaming.map((Stream, idx) => (
                    <ToggleButton
                      key={idx}
                      id={`Stream-${idx}`}
                      type="radio"
                      variant={idx % 2 ? "outline-success" : "outline-danger"}
                      name="Stream"
                      value={Stream.value}
                      checked={streamingValue === Stream.value}
                      onChange={(e) => setStreamingValue(e.currentTarget.value)}
                    >
                      {Stream.name}
                    </ToggleButton>
                  ))}
                </ButtonGroup>
              </div>
              <div className="tab_InnerSection">
                <h2>¿Mas canales?</h2>
                <div className="button_container"></div>
                <ButtonGroup>
                  {Canales.map((canal, idx) => (
                    <ToggleButton
                      key={idx}
                      id={`canal-${idx}`}
                      type="radio"
                      variant={idx % 2 ? "outline-success" : "outline-danger"}
                      name="canal"
                      value={canal.value}
                      checked={canalesValue === canal.value}
                      disabled={toggleState === 2}
                      onChange={(e) => setCanalesValue(e.currentTarget.value)}
                    >
                      {canal.name}
                    </ToggleButton>
                  ))}
                </ButtonGroup>
              </div>
            </div>

            <div className="Row">
              <div className="tab_InnerSection">
                <h2>¿Wifi Extender?</h2>
                <div className="button_container">
                  <Button
                    variant="primary"
                    onClick={() => setWifiExtenderValue(wifiExtenderValue - 1)}
                    disabled={wifiExtenderValue <= 0 ? true : false}
                  >
                    -
                  </Button>
                  <h3>{wifiExtenderValue}</h3>
                  <Button
                    variant="primary"
                    onClick={() => setWifiExtenderValue(wifiExtenderValue + 1)}
                    disabled={
                      wifiExtenderValue >= 5 ? true : false || toggleState === 2
                    }
                  >
                    +
                  </Button>
                </div>
              </div>
              <div className="tab_InnerSection">
                <h2>¿Television Extra?</h2>
                <div className="button_container">
                  <Button
                    variant="primary"
                    onClick={() => setTvExtraValue(tvExtraValue - 1)}
                    disabled={
                      tvExtraValue <= 0 ? true : false || toggleState === 2
                    }
                  >
                    -
                  </Button>
                  <h3>{tvExtraValue}</h3>
                  <Button
                    variant="primary"
                    onClick={() => setTvExtraValue(tvExtraValue + 1)}
                    disabled={
                      tvExtraValue >= 5 ? true : false || toggleState === 2
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
                      <Form.Control
                        type="email"
                        placeholder="Correo (Opcional)"
                        value={correo}
                        onChange={(e) => setCorreo(e.target.value)}
                      />
                    </Col>
                    <Col>
                      <Form.Control
                        placeholder="Telefono (Opcional)"
                        value={telefono}
                        onChange={(e) => setTelefono(e.target.value)}
                      />
                    </Col>
                    <Col>
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
