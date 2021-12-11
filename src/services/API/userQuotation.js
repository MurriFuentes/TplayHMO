import axios from "axios";
const DEV_ENDPOINT = "http://localhost:8080";

export const guardarCotizacion = (paquete, numeroTelefono, correoElectronico) => {
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

export const getListCotizaciones = async () => {
  let jwt = sessionStorage.getItem("jwt");
  if (!jwt) return [];

  try {
    const resp = await axios.get(`${DEV_ENDPOINT}/listarCotizaciones`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
        "Content-Type": "application/json",
      },
    });

    return resp.data;
  } catch (error) {
    console.log(error);

    throw error;
  }
};
