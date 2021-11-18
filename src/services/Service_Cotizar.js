import axios from "axios";
const DEV_ENDPOINT = "http://localhost:8080";

export const guardarCotizacion = (paquete, numeroTelefono, correoElectronico) => {
  console.log(paquete)
  console.log(numeroTelefono)
  console.log(correoElectronico)
  try {
    axios.post(`${DEV_ENDPOINT}/guardarCotizacion`, {
      paquete,
      numeroTelefono,
      correoElectronico,
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
};
